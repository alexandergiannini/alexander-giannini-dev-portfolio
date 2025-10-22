import ContactCard from './ContactCard';
import MailIcon from '../../Icons/mailIcon';
import GitHubIcon from '../../Icons/gitHubIcon';
import LinkedInIcon from '../../Icons/linkedInIcon';

function ContactForm() {
    return (
        <section className="m-5">
          <h1 id="about">Contact Information</h1>
          <ul className="contact-list">
          <li><ContactCard title="Send Email" href="mailto:alexgiannini310@gmail.com" Icon={MailIcon} /></li>
          <li><ContactCard title="GitHub Profile" href="https://github.com/alexandergiannini" Icon={GitHubIcon} external /></li>
          <li><ContactCard title="LinkedIn Profile" href="https://www.linkedin.com/in/alex-giannini-004345141/" Icon={LinkedInIcon} external /></li>
          </ul>
        </section>
      );
}

export default ContactForm;