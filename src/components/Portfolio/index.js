import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Portfolio(props) {
  return (
    <section>
      <h1>Portfolio</h1>
      <div className="flex-row">

        <div className="portfolio-image">
        <a href="https://alexreveles.github.io/movie-hunt-app/" target="_blank">
        <a href="https://github.com/alexreveles/movie-hunt-app" target="_blank"><i class="fa-brands fa-github fa-github-portfolio"></i></a>  
        <img src={require('../../assets/small/commercial/1.jpg').default} className="img-thumbnail mx-1">
        </img>
        </a>  
        </div>

        <div className="portfolio-image">
          <a href="https://alexandergiannini.github.io/workday-scheduler-05/" target="_blank">
          <a href="https://github.com/alexandergiannini/workday-scheduler-05" target="_blank"><i class="fa-brands fa-github"></i></a>
        <img src={require('../../assets/small/commercial/3.jpg').default} className="img-thumbnail mx-1">
        </img>
        </a>
        </div>

        <div className="portfolio-image">
          <a href="https://alexandergiannini.github.io/weather-challenge-06/" target="_blank" >
          <a href="https://github.com/alexandergiannini/weather-challenge-06" target="_blank"><i class="fa-brands fa-github"></i></a>
        <img src={require('../../assets/small/commercial/4.jpg').default} className="img-thumbnail mx-1">
        </img>
        </a>
        </div>

        <div className="portfolio-image">
          <a href="https://alexandergiannini.github.io/password-generator/" target="_blank">
          <a href="https://github.com/alexandergiannini/password-generator" target="_blank"><i class="fa-brands fa-github"></i></a>
        <img src={require('../../assets/small/commercial/10.jpg').default} className="img-thumbnail mx-1">
        </img>
        </a>
        </div>
        
        
        
      </div>
    </section>
  );
}
export default Portfolio;
