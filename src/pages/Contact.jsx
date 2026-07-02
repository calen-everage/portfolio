export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Have a project in mind or want to connect? Reach out below.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      <div className="social-links">
        <a href="mailto:everage.calen@gmail.com">Email</a>
        <a href="https://github.com/calen-everage" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/calen-everage-750a10297/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}
