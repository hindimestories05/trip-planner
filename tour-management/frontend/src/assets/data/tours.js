import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Colaba CauseWay, Mumbai",
    city: "Mumbai",
    distance: 369,
    price: 12,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "Mayank Yadav",
        rating: 4.6,
      },
      {
        name: "Chandan",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Victoria Memorial Hall, Kolkata",
    city: "Kolkata",
    distance: 243,
    price: 23,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Mayank Yadav",
        rating: 4,
      },
      {
        name: "Chandan",
        rating: 3.2,
      },
      {
        name: "Sami",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Swaminarayan Temple, Ahmedabad",
    city: "Ahmedabad",
    distance: 90,
    price: 10,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Ketan",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "City Palace of Jaipur",
    city: "Jaiput",
    distance: 676,
    price: 21,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Birla Mandir, Hydrabad",
    city: "Hydrabad",
    distance: 321,
    price: 7,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 2.5,
      },
      {
        name: "jhon doe",
        rating: 4.5,
      },
      {
        name: "jhon doe",
        rating: 3.5,
      },
      {
        name: "jhon doe",
        rating: 4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Belur Math, Delhi",
    city: "Delhi",
    distance: 12,
    price: 17,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "Karan Shah",
        rating: 4.6,
      }
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Lalbag Garden, Bengaluru",
    city: "Bengaluru",
    distance: 332,
    price: 5,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Banaras Ghat",
    city: "Ghat",
    distance: 567,
    price: 10,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
