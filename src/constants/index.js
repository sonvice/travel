import {
  dominicana,
  egypto,
  roma,
  moscu,
  hotel,
  food,
  wifi,
  flight,
  londresGallery,
  roundStar,
  paris,
  dubai,
  venezia,
  airbnb,
  tripAdvisor,
  booking,
  expedia,
  fedex,
  carabana,
  cuba,
  piscina,
  desierto,
  oriente,
  globo,
  twitter,
  facebook,
  instagram,
  pinterest,
  caribe,
} from "../assets/";

export const navigation = [
  { title: "home", url: "#home", active:true },
  { title: "places", url: "#places" },
  { title: "destination", url: "#destination" },
  { title: "gallery", url: "#gallery" },
  { title: "login", url: "#login", onlyMobile: true },
  { title: "sign up", url: "#sign-up", onlyMobile: true },
];

export const places = [
  {
    image: dominicana,
    title: "Santo Domingo",
    price: "624",
    fullNameCity: "Santo Domingo, R.D",
    person: "/person",
    alt:'Chica en piscina'
  },
  {
    image: egypto,
    title: "El Cairo",
    price: "510",
    fullNameCity: "El Cairo, Egypto",
    person: "/person",
    alt:'Viajero en un camello frente al las pirámides'
  },
  {
    image: roma,
    title: "Piazza",
    price: "424",
    fullNameCity: "Piazza dei Miracoli, Italy",
    person: "/person",
    alt:'Chica comiendo helado'
  },
  {
    image: moscu,
    title: "Moscú",
    price: "429",
    fullNameCity: "Moscú, Rusia",
    person: "/person",
    alt:'Monumento Moscú'
  },
  {
    image: caribe,
    title: "Bora Bora",
    price: "1.124",
    fullNameCity: "Isla en la Polinesia",
    person: "/person",
    alt:'Chica en piscina'
  },
];

export const incluse = [
  { icon: hotel, name: "Hotel" },
  { icon: food, name: "Food" },
  { icon: wifi, name: "Wifi" },
  { icon: flight, name: "Flight" },
];

export const destination = [
  {
    image: londresGallery,
    name: "Londres",
    starting: "Starting From $1500",
    rank: "4.5",
    star: roundStar,
  },
  {
    image: paris,
    name: "Paris",
    starting: "Starting From $1200",
    rank: "4.5",
    star: roundStar,
  },
  {
    image: dubai,
    name: "Dubai",
    starting: "Starting From $1800",
    rank: "4.5",
    star: roundStar,
  },
  {
    image: venezia,
    name: "Venezia",
    starting: "Starting From $1100",
    rank: "4.5",
    star: roundStar,
  },
];

export const brands = [
  { brand: airbnb, alt: "Airbnb" },
  { brand: tripAdvisor, alt: "Trip Advisor" },
  { brand: booking, alt: "Booking" },
  { brand: expedia, alt: "Expedia" },
  { brand: fedex, alt: "Fedex" },
];

export const gallery = [
  { image: carabana, alt: "Chicos fuera de un coche carabana" },
  { image: londresGallery, alt: "Paisaje de un atardecer en Londres" },
  { image: cuba, alt: "Calle con un coche en una ciudad de cuba" },
  { image: piscina, alt: "Chica metida en la piscina" },
  { image: desierto, alt: "Panorámica del desierto" },
  { image: oriente, alt: "Atardecer en oriente medio" },
  { image: globo, alt: "Globo aerostático en un atardecer" },
];

export const social = [
  { icon: twitter, alt: "X" },
  { icon: facebook, alt: "Facebook" },
  { icon: instagram, alt: "Instagram" },
  { icon: pinterest, alt: "Pinterest" },
];

export const footerLink1 = [
'Home', 'Tours', 'Flights', 'Bookings'
]
export const footerLink2 = [
'FAQ’s', 'Privacy Policy', 'Terms & Conditions', 'Support'
]

export const contact = ['travel@agency.com','(280) 557 0669' ]