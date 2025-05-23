
import './Contact.css';
const Contact = () => (
   <section id="contact" className="contact">
    <h2>Contact Me</h2>
    <form>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <p>Email:titusben64@gmail.com</p>
    <p>Location: Mombasa, Kenya</p>
    <p>Social: 
      <a href="https://linkedin.com/in/ben titus" target="_blank" rel="noopener">LinkedIn</a><br />
      <a href="https://github.com/benjah104410" target="_blank" rel="noopener">GitHub</a><br />
      <a href="https://twitter.com/ben_titus" target="_blank" rel="noopener">Twitter</a><br />
      <a href="https://www.facebook.com/ben.titus.5" target="_blank" rel="noopener">Facebook</a><br />
       <a href="https://www.instagram.com/ben_titus/" target="_blank" rel="noopener">Instagram</a>

    </p>
  </section>
);

export default Contact;