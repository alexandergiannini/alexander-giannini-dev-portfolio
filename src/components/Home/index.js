import React from 'react';
//import coverImage from "../../assets/cover/cover-image.jpg";
//add an alt attribute to the img src
function Home() {
    return (
        <section className="m-5">
          <h1 id="about">About Me</h1>
          <img src={require('../../assets/small/commercial/6.jpg').default}></img>
          <p className="about-me-p-tag">Hi there! My name is Alex Giannini!</p>
          <p className="about-me-p-tag">I've been working in Tech for the last 7 years mostly primarily focused on QA Engineering.</p>
          <p className="about-me-p-tag">My last job was working as a QA Engineer at Deltatre, focusing on writing automation code + manual testing for Deltatre's biggest clients such as NFL, MLS, and MLB.</p>
          <p className="about-me-p-tag">Prior to Deltatre, I was working at GOAT Groap where I had my first QA opportunities.</p>
          <p className="about-me-p-tag">I also attended the UCLA Extension Bootcamp where I learned Fullstack Web development skills!</p>
          <p className="about-me-p-tag">I am also an avid tennis player and a huge basketball fan. I spend most of my time with my family and friends.</p>
        </section>
      );
  }

export default Home;