import React from 'react'; //, { useState } from 'react'

function ContactForm() {
    return (
        <section className="m-5">
          <h1 id="about">Contact Information</h1>
          <ul>
              <li className="contact-information">
              <a href="mailto: alexgiannini310@gmail.com" target="_blank">Send Email</a>
              </li>
              <li className="contact-information">
              <a href="https://github.com/alexandergiannini" target="_blank">GitHub Profile</a>
              </li>
              <li className="contact-information">
              <a href="https://www.linkedin.com/in/alex-giannini-004345141/" target="_blank">LinkedIn Profile</a>
              </li>
          </ul>
        </section>
      );
}

export default ContactForm;