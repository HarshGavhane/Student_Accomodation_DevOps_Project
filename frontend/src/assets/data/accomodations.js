import roomImg01 from "../images/tour-img01.jpg";
import roomImg02 from "../images/tour-img02.jpg";
import roomImg03 from "../images/tour-img03.jpg";
import roomImg04 from "../images/tour-img04.jpg";
import roomImg05 from "../images/tour-img05.jpg";
import roomImg06 from "../images/tour-img06.jpg";
import roomImg07 from "../images/tour-img07.jpg";

const accomodations = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    roomm: "Single bed",
    price: 99,
    address: "Somewhere",
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: roomImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Dublin",
    roomm: "double bed",
    price: 99,
    address: "Somewhere",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: roomImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Madrid",
    roomm: "single bed",
    price: 99,
    address: "Somewhere",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: roomImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Berlin",
    roomm: "double bed",
    price: 99,
    address: "Somewhere",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: roomImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    roomm: "single bed",
    price: 99,
    address: "Somewhere",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: roomImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    roomm: "double bed",
    price: 99,
    address: "Somewhere",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: roomImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    roomm: "single bed",
    price: 99,
    address: "Somewhere",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: roomImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    roomm: "double bed",
    price: 99,
    address: "Somewhere",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: roomImg03,
    featured: false,
  },
];

export default accomodations;
