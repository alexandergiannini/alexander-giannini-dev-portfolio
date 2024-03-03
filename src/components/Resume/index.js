import React from 'react';
//import PDF from '../Resume/Alex_Giannini_Resume_(2021).pdf'
//import coverImage from "../../assets/cover/cover-image.jpg";
//add an alt attribute to the img src
const resumePDF = 'https://alexandergiannini.github.io/alexander-giannini-dev-portfolio/AlexanderGianniniQAResume2024.pdf'
function Resume() {
    const downloadFileAtUrl = (url) => {
        const aTag = document.createElement('a');
        aTag.href = url
        aTag.setAttribute('download', 'AlexanderGianniniQAResume2024.pdf')
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }
    return (
      <section className="m-5">
        <h1 id="about">Resume</h1>
        <button onClick={() => {downloadFileAtUrl(resumePDF)}}>Download Resume</button>
        {/* <a href={require('src/components/Resume/Alex_Giannini_Resume_(2021).pdf')} target="_blank" id="resume-link">Download my resume</a> */}
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
                Docker
            </li>
            <li className="li-proficiences">
                JMeter
            </li>
        </ul>
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
                jQuery
            </li>
            <li className="li-proficiences">
                React.js
            </li>
            <li className="li-proficiences">
                MongoDB
            </li>
            <li className="li-proficiences">
                MYSQL
            </li>
            <li className="li-proficiences">
                Sequelize
            </li>
            <li className="li-proficiences">
                Express.js
            </li>
        </ul>  
      </section>
    );
  }

export default Resume;