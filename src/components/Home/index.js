import React from 'react';
//import coverImage from "../../assets/cover/cover-image.jpg";
//add an alt attribute to the img src
function Home() {
    return (
        <section className="m-5">
          <h1 id="about">About Me</h1>
          <img src={require('../../assets/small/commercial/6.jpg').default}></img>
          <p className="about-me-p-tag">Alexander Giannini is a recent graduate of the UCLA Extension Bootcamp. He also has a day job working as a QA Engineer at GOAT Group. He has been working in tech for the last 4 years.</p>
          <p className="about-me-p-tag">He is currently on the lookout for any developer opportunities which may be presented to him so he can utilize his Full Stack Web Development Skills.</p>
          <p className="about-me-p-tag">He currently resides in Los Angeles, California. He went to the University of the Pacific for undergrad.</p>
          <p className="about-me-p-tag">In his free time he is continuing to develop his own applications, conduct practice algorithms, and apply for interviews and jobs.</p>
          <p className="about-me-p-tag">Alexander is an avid sports fan and he loves hanging out with family, friends, and loved ones.</p>
        </section>
      );
  }

export default Home;