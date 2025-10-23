import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Carousel from '../Carousel/carousel';

const slides = [
    {
    title: "OpenTug",
    href: "https://opentug.com/",
    github: "https://github.com/alexandergiannini",
    img: require("../../assets/MyWork/OpenTug/OpenTugHome.jpg").default,
  },
  {
    title: "Movie Hunt",
    href: "https://alexreveles.github.io/movie-hunt-app/",
    github: "https://github.com/alexreveles/movie-hunt-app",
    img: require("../../assets/small/commercial/1.jpg").default,
  },
  {
    title: "Workday Scheduler",
    href: "https://alexandergiannini.github.io/workday-scheduler-05/",
    github: "https://github.com/alexandergiannini/workday-scheduler-05",
    img: require("../../assets/small/commercial/3.jpg").default,
  },
  {
    title: "Weather Challenge",
    href: "https://alexandergiannini.github.io/weather-challenge-06/",
    github: "https://github.com/alexandergiannini/weather-challenge-06",
    img: require("../../assets/small/commercial/4.jpg").default,
  },
  {
    title: "Password Generator",
    href: "https://alexandergiannini.github.io/password-generator/",
    github: "https://github.com/alexandergiannini/password-generator",
    img: require("../../assets/small/commercial/10.jpg").default,
  },
];

function Portfolio(props) {
  return (
        <section>
      <h1>My Work</h1>
      <Carousel slides={slides} height={500} />
    </section>
  );
}
export default Portfolio;
