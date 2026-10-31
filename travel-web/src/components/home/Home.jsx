import React, { useEffect, useMemo, useRef, useState } from "react";
import "./home.scss";
import video from "../../assets/video1.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { destinations } from "../../data/destinations";
import { useLanguage } from "../../i18n/LanguageContext";
import Aos from "aos";
import "aos/dist/aos.css";

const formatDate = (date) => {
  if (!date) return "";
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const Home = () => {
  const { t, locale } = useLanguage();
  const [destination, setDestination] = useState("");
  const [showDestinations, setShowDestinations] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [maxPrice, setMaxPrice] = useState(5000);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const cardRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!cardRef.current?.contains(event.target)) {
        setShowDestinations(false);
        setShowCalendar(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const localizedDestinations = useMemo(
    () =>
      destinations.map((item) => {
        const copy = t.destinations[item.id] || {};
        return {
          ...item,
          destTitle: copy.destTitle || item.destTitle,
          country: copy.country || item.country,
          location: copy.location || item.location,
        };
      }),
    [t]
  );

  const filteredDestinations = useMemo(() => {
    const q = destination.trim().toLowerCase();
    if (!q) return localizedDestinations;
    return localizedDestinations.filter(
      (item) =>
        item.destTitle.toLowerCase().includes(q) ||
        item.country.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q)
    );
  }, [destination, localizedDestinations]);

  const calendarDays = useMemo(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstDay; i += 1) cells.push(null);
    for (let day = 1; day <= daysInMonth; day += 1) {
      cells.push(new Date(year, month, day));
    }
    return cells;
  }, [calendarMonth]);

  const bump = (setter, value, min = 0) => {
    setter(Math.max(min, value));
  };

  const applyFilters = () => {
    setFiltersOpen(false);
  };

  const monthLocale = locale === "ja" ? "ja-JP" : "en-US";

  return (
    <div className="home" id="home">
      <div className="overlay-notinuse"></div>
      <video
        className="heroVideo"
        src={video}
        muted
        autoPlay
        loop
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        tabIndex={-1}
        aria-hidden="true"
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            {t.home.packages}
          </span>
          <h1 data-aos="fade-up" className="homeTitle fontSail">
            {t.home.title}
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid" ref={cardRef}>
          <div className="destinationInput fieldBlock">
            <label htmlFor="city">{t.home.destLabel}</label>
            <div
              className="input flex"
              onClick={() => {
                setShowDestinations(true);
                setShowCalendar(false);
              }}
            >
              <input
                id="city"
                type="text"
                placeholder={t.home.destPlaceholder}
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setShowDestinations(true);
                }}
                onFocus={() => {
                  setShowDestinations(true);
                  setShowCalendar(false);
                }}
                autoComplete="off"
              />
              <GrLocation className="icon" />
            </div>
            {showDestinations ? (
              <ul className="dropdownPanel destinationList" role="listbox">
                {filteredDestinations.length === 0 ? (
                  <li className="empty">{t.home.noMatch}</li>
                ) : (
                  filteredDestinations.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setDestination(item.destTitle);
                          setShowDestinations(false);
                        }}
                      >
                        <strong>{item.destTitle}</strong>
                        <span>
                          {item.location}, {item.country}
                        </span>
                      </button>
                    </li>
                  ))
                )}
              </ul>
            ) : null}
          </div>

          <div className="dateInput fieldBlock">
            <label htmlFor="date">{t.home.dateLabel}</label>
            <div
              className="input flex"
              onClick={() => {
                setShowCalendar(true);
                setShowDestinations(false);
              }}
            >
              <input
                id="date"
                type="text"
                readOnly
                placeholder={t.home.datePlaceholder}
                value={selectedDate ? formatDate(selectedDate) : ""}
              />
            </div>
            {showCalendar ? (
              <div className="dropdownPanel calendarPanel">
                <div className="calendarHeader flex">
                  <button
                    type="button"
                    aria-label={t.home.prevMonth}
                    onClick={() =>
                      setCalendarMonth(
                        (prev) =>
                          new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
                      )
                    }
                  >
                    <MdChevronLeft />
                  </button>
                  <strong>
                    {calendarMonth.toLocaleString(monthLocale, {
                      month: "long",
                      year: "numeric",
                    })}
                  </strong>
                  <button
                    type="button"
                    aria-label={t.home.nextMonth}
                    onClick={() =>
                      setCalendarMonth(
                        (prev) =>
                          new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
                      )
                    }
                  >
                    <MdChevronRight />
                  </button>
                </div>
                <div className="calendarWeekdays">
                  {t.home.weekdays.map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
                <div className="calendarGrid">
                  {calendarDays.map((day, index) => {
                    if (!day) {
                      return <span key={`empty-${index}`} className="emptyDay" />;
                    }
                    const isSelected =
                      selectedDate &&
                      day.toDateString() === selectedDate.toDateString();
                    return (
                      <button
                        key={day.toISOString()}
                        type="button"
                        className={isSelected ? "day selected" : "day"}
                        onClick={() => {
                          setSelectedDate(day);
                          setShowCalendar(false);
                        }}
                      >
                        {day.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">{t.home.maxPrice}</label>
              <h3 className="total">${maxPrice}</h3>
            </div>
            <div className="input flex">
              <input
                id="price"
                type="range"
                max="5000"
                min="1000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
          </div>

          <button
            type="button"
            className={`searchOptions flex ${filtersOpen ? "isOpen" : ""}`}
            onClick={() => {
              setFiltersOpen((open) => !open);
              setShowCalendar(false);
              setShowDestinations(false);
            }}
          >
            <HiFilter className="icon" />
            <span>
              {filtersOpen ? t.home.showLess : t.home.moreFilters}
            </span>
          </button>

          {filtersOpen ? (
            <div className="moreFiltersAccordion">
              <div className="filterRow flex">
                <span>{t.home.rooms}</span>
                <div className="stepper flex">
                  <button
                    type="button"
                    onClick={() => bump(setRooms, rooms - 1, 1)}
                  >
                    −
                  </button>
                  <strong>{rooms}</strong>
                  <button
                    type="button"
                    onClick={() => bump(setRooms, rooms + 1, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="filterRow flex">
                <span>{t.home.adults}</span>
                <div className="stepper flex">
                  <button
                    type="button"
                    onClick={() => bump(setAdults, adults - 1, 1)}
                  >
                    −
                  </button>
                  <strong>{adults}</strong>
                  <button
                    type="button"
                    onClick={() => bump(setAdults, adults + 1, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="filterRow flex">
                <span>{t.home.children}</span>
                <div className="stepper flex">
                  <button
                    type="button"
                    onClick={() => bump(setChildren, children - 1, 0)}
                  >
                    −
                  </button>
                  <strong>{children}</strong>
                  <button
                    type="button"
                    onClick={() => bump(setChildren, children + 1, 0)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="btn applyFiltersBtn"
                onClick={applyFilters}
              >
                {t.home.confirm}
              </button>
            </div>
          ) : null}
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <SiTripadvisor className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
