import img from "../assets/img.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img1.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";

export const destinations = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    country: "French Polynesia",
    location: "Bora Bora Lagoon",
    grade: "Cultural Relax",
    fees: "$700",
    priceValue: 700,
    rating: 4.9,
    reviews: 1284,
    rank: 1,
    hashtag: "#BoraBora",
    description:
      "The epitome of romance—Bora Bora is known for luxurious stays and lagoon adventures that feel real, not staged.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    country: "Peru",
    location: "Cusco Region",
    grade: "Cultural Trek",
    fees: "$600",
    priceValue: 600,
    rating: 4.8,
    reviews: 2103,
    rank: 2,
    hashtag: "#MachuPicchu",
    description:
      "Huayna Picchu rises over the Lost City of the Incas. Sunrise from the Sun Gate is simply spectacular.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    country: "Australia",
    location: "Queensland",
    grade: "Ocean Escape",
    fees: "$700",
    priceValue: 700,
    rating: 4.7,
    reviews: 1890,
    rank: 3,
    hashtag: "#GreatBarrierReef",
    description:
      "One of Australia’s remarkable natural gifts—lavish color underwater and quiet beaches above.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    country: "Turkey",
    location: "Göreme",
    grade: "Cultural Relax",
    fees: "$800",
    priceValue: 800,
    rating: 4.8,
    reviews: 1566,
    rank: null,
    hashtag: "#Cappadocia",
    description:
      "Balloon mornings and carved valleys. About 2 million of Turkey’s visitors come for Cappadocia each year.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    country: "Mexico",
    location: "Central Highlands",
    grade: "City Color",
    fees: "$1100",
    priceValue: 1100,
    rating: 4.6,
    reviews: 742,
    rank: null,
    hashtag: "#Guanajuato",
    description:
      "Silver-mining history and colonial streets painted in the brightest colors you can find.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    country: "Italy",
    location: "Liguria",
    grade: "Coastal Walk",
    fees: "$840",
    priceValue: 840,
    rating: 4.7,
    reviews: 1320,
    rank: null,
    hashtag: "#CinqueTerre",
    description:
      "Cliffside villages in vibrant hues—and seafood that makes every evening feel like a discovery.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    country: "Cambodia",
    location: "Siem Reap",
    grade: "Heritage",
    fees: "$790",
    priceValue: 790,
    rating: 4.9,
    reviews: 2451,
    rank: null,
    hashtag: "#AngkorWat",
    description:
      "Khmer art from the 9th to 15th century—the heart and soul of Cambodia at golden hour.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    country: "India",
    location: "Agra",
    grade: "Iconic Visit",
    fees: "$900",
    priceValue: 900,
    rating: 4.8,
    reviews: 3204,
    rank: null,
    hashtag: "#TajMahal",
    description:
      "White marble built for Mumtaz—breathtaking at dawn, still quietly moving at dusk.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    country: "Indonesia",
    location: "Ubud & Beaches",
    grade: "Island Soul",
    fees: "$500",
    priceValue: 500,
    rating: 4.7,
    reviews: 4102,
    rank: null,
    hashtag: "#Bali",
    description:
      "Volcanoes, temples, food, and sandy beaches—holiday energy with a real island pace.",
  },
];

export const destinationNames = destinations.map((d) => d.destTitle);
