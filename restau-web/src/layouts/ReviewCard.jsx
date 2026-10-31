const ReviewCard = ({ img, name, quote, place }) => {
  return (
    <article className="flex h-full w-full flex-col justify-between rounded-lg bg-white p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <p className="font-logo text-lg leading-relaxed text-lightText md:text-xl">
        “{quote}”
      </p>
      <div className="mt-4 flex flex-row items-center gap-4">
        <img
          className="h-14 w-14 shrink-0 rounded-full object-cover md:h-16 md:w-16"
          src={img}
          alt={name}
        />
        <div>
          <h3 className="font-hedding text-xl font-semibold leading-tight md:text-2xl">
            {name}
          </h3>
          {place ? (
            <p className="text-sm text-lightText">{place}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
