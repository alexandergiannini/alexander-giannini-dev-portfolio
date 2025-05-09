import React from 'react';
//add an alt attribute to the img src
//import resume from "../../assets/resume/AlexanderGianniniQAResume2024.pdf"
import resume from "../../assets/resume/Alex_Giannini_QA_Resume_2024.pdf"
//const resumePDF = 'https://alexandergiannini.github.io/alexander-giannini-dev-portfolio/AlexanderGianniniQAResume2024.pdf'
function Resume() {
    return (
      <section className="m-5">
        <h1 id="about">Resume</h1>
        <a href={resume} download="Resume">
        <button>Download Resume</button>
        </a>
        <h2>Fullstack Proficiencies</h2>
        <ul>
            <li className="li-proficiences">
                HTML
            </li>
            <li className="li-proficiences">
                CSS
            </li>
            <li className="li-proficiences">
                JavaScript
            </li>
            <li className="li-proficiences">
                TypeScript
            </li>
            <li className="li-proficiences">
                Node.js
            </li>
            <li className="li-proficiences">
                Python
            </li>
            <li className="li-proficiences">
                React.js
            </li>
            <li className="li-proficiences">
                Solid.js
            </li>
            <li className="li-proficiences">
                Django
            </li>
            <li className="li-proficiences">
                MongoDB
            </li>
            <li className="li-proficiences">
                SQL
            </li>
            <li className="li-proficiences">
                Express.js
            </li>
            <li className="li-proficiences">
                Docker
            </li>
        </ul>  
        <h2>QA Automation Proficiencies</h2>
        <ul>
            <li className="li-proficiences">
                WebdriverIO
            </li>
            <li className="li-proficiences">
                Cypress
            </li>
            <li className="li-proficiences">
                Mocha
            </li>
            <li className="li-proficiences">
                Selenium
            </li>
            <li className="li-proficiences">
                ChromeDriver
            </li>
            <li className="li-proficiences">
                Cucumber
            </li>
            <li className="li-proficiences">
                Chai
            </li>
            <li className="li-proficiences">
                Playwright
            </li>
            <li className="li-proficiences">
                JMeter
            </li>
        </ul>
      </section>
    );
  }

export default Resume;