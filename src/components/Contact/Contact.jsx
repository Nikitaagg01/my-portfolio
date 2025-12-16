import React,{useRef} from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';
const Contact = () => {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_q9wavmp',   // Yahan apni Service ID dalein
      'template_qjudjm9',  // Yahan apni Template ID dalein
      form.current,
      'k-FlSimFw3ZF0TUH-'    // Yahan apni Public Key dalein
    )
    .then(() => {
        alert("Success! Mail has been sent.");
        e.target.reset(); // Form khali karne ke liye
    }, (error) => {
        alert("Something wrong: " + error.text);
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Email: nikitaagg2003@gmail.com</p>
          <p>Location: Chandigarh, India</p>
        </div>
        
       <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;