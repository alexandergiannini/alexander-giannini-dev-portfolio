const ContactCard = ({ title, href, Icon, external}) => {
  return (
    <a
      className="contact-card"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span className="contact-icon"><Icon /></span>
      <span className="contact-title">{title}</span>
    </a>
  );
}

export default ContactCard