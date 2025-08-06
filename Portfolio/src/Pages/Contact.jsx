import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import RevealSection from '../Components/RevealSection';


const Contact = () => {
  return (
    <RevealSection>
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p><FaEnvelope /> mansibakshi2@gmail.com</p>
          <p><FaPhoneAlt /> +91 8199005803</p>
          <p>
            <FaLinkedin />{' '}
            <a href="https://www.linkedin.com/in/mansi-bakshi-386b762a7/" target="_blank" rel="noopener noreferrer">
              Let's connect on Linkedin
            </a>
          </p>
        </div>
        <form
          className="contact-form"
          action="https://formspree.io/f/xwkgrgnp"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
    </RevealSection>
  );
};

export default Contact;
