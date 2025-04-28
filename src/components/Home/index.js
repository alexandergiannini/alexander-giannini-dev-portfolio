import React from 'react';
//import coverImage from "../../assets/cover/cover-image.jpg";
//add an alt attribute to the img src
function Home() {
    return (
        <section className="m-5">
          <h1 id="about">About Me</h1>
          <img src={require('../../assets/small/commercial/6.jpg').default}></img>
          <p className="about-me-p-tag">Hi there! I'm Alex Giannini.</p>
          <p className="about-me-p-tag">I’ve spent the past 8 years building my career in tech, starting in QA engineering and eventually transitioning into software engineering.</p>
          <p className="about-me-p-tag">Currently, I’m a software engineer at OpenTug, where I work on full stack projects for their web application, making an impact across the maritime and barge industries.</p>
          <p className="about-me-p-tag">Previously, I was a QA Engineer at Deltatre, where I wrote automation code and performed manual testing for major clients like the NFL, MLS, and MLB.</p>
          <p className="about-me-p-tag">My first experience in tech came at GOAT Group, where I had the opportunity to dive into QA for the first time.</p>
          <p className="about-me-p-tag">I also completed the UCLA Extension Bootcamp, where I developed full stack web development skills that I use in my work today.</p>
          <p className="about-me-p-tag">Outside of tech, I’m an avid tennis player, a huge basketball fan, and love spending time with my family and friends.</p>
        </section>
      );
  }

export default Home;