import React from 'react'; //, { useState } from 'react'
//import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    return (
        <section className="m-5">
          <h1 id="about">Contact Information</h1>
          {/* <h2>Phone Number: 3108018673</h2>
          <h2>Email: alexgiannini310@gmail.com</h2> */}
          <ul>
              <li className="contact-information">
              <a href="mailto: alexgiannini310@gmail.com" target="_blank">Click for Email</a>
              </li>
              <li className="contact-information">
              <a href="https://github.com/alexandergiannini" target="_blank">GitHub Profile</a>
              </li>
              <li className="contact-information">
              <a href="https://www.linkedin.com/in/alexander-giannini-004345141/" target="_blank">LinkedIn Profile</a>
              </li>
              {/* <div className="column footer-link" ><a href="https://github.com/alexandergiannini" target="_blank"><i className="fab fa-github"></i></a></div>
         <div className="column footer-link" ><a href="https://www.linkedin.com/in/alexander-giannini-004345141/" target="_blank"><i class="fab fa-linkedin"></i></a></div> */}
          </ul>

          {/* <a href="https://docs.google.com/document/d/1YO3B5R9KmEaGuYwkme4qocd0NvtRboxqJUOmM1KT3II/edit" target="_blank" id="resume-link">Download my resume</a>
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
                  Chai.js
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
          </ul>   */}
        </section>
      );

    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // const { name, email, message } = formState;

    // const [errorMessage, setErrorMessage] = useState('');


    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         // isValid conditional statement

    //         // isValid conditional statement
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //           setErrorMessage(`A ${e.target.name} is required in order to submit.`);
    //         } else {
    //           setErrorMessage('');
    //         }
    //       }

    //       console.log('errorMessage', errorMessage);
    //     setFormState({ ...formState, [e.target.name]: e.target.value })
    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //       }

    // }

    // console.log(formState);

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }


//     return (
//         <section>
//             <h1>Contact Me</h1>
//             <form id="contact-form" onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name" className="contact-form-label"></label>
//                     <input type="text" defaultValue={name} onBlur={handleChange} name="name" size="45" className="contact-labels" placeholder="Please enter your name."/>
//                 </div>
//                 <div>
//                     <label htmlFor="email" className="contact-form-label" size="45"></label>
//                     <input type="email" defaultValue={email} onBlur={handleChange} name="email" size="45" className="contact-labels" placeholder="Please enter your email."/>
//                 </div>
//                 <div>
//                     <label htmlFor="message" className="contact-form-label" ></label>

                    

//                     <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" className="contact-labels" placeholder="Please enter a message." />

//                     {errorMessage && (
//   <div>
//     <p className="error-text">{errorMessage}</p>
//   </div>
// )}
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//         </section>
//     );



}

export default ContactForm;