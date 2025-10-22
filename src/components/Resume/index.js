import resume from "../../assets/resume/Alex_Giannini_Dev_Resume.pdf"
function Resume() {
    return (
      <section className="m-5">
        {/* <h1 id="about">Resume</h1> */}
        <div className="skills">
  <div className="skills-col">
    <h2>Full-stack Proficiencies</h2>
    <ul className="skills-list">
      <li className="li-proficiencies">HTML</li>
      <li className="li-proficiencies">CSS</li>
      <li className="li-proficiencies">JavaScript</li>
      <li className="li-proficiencies">TypeScript</li>
      <li className="li-proficiencies">Node.js</li>
      <li className="li-proficiencies">Python</li>
      <li className="li-proficiencies">React.js</li>
      <li className="li-proficiencies">Solid.js</li>
      <li className="li-proficiencies">Django</li>
      <li className="li-proficiencies">MongoDB</li>
      <li className="li-proficiencies">SQL</li>
      <li className="li-proficiencies">Express.js</li>
      <li className="li-proficiencies">Docker</li>
      <li className="li-proficiencies">GitHub</li>
    </ul>
  </div>

  <div className="skills-col">
    <h2>QA Automation Proficiencies</h2>
    <ul className="skills-list">
      <li className="li-proficiencies">WebdriverIO</li>
      <li className="li-proficiencies">Cypress</li>
      <li className="li-proficiencies">Mocha</li>
      <li className="li-proficiencies">Selenium</li>
      <li className="li-proficiencies">ChromeDriver</li>
      <li className="li-proficiencies">Cucumber</li>
      <li className="li-proficiencies">Chai</li>
      <li className="li-proficiencies">Playwright</li>
      <li className="li-proficiencies">JMeter</li>
    </ul>
  </div>
</div>
        <a href={resume} download="Resume" className="resume-link">
        <button className="resume-button">Download Resume</button>
        </a>

      </section>
    );
  }

export default Resume;