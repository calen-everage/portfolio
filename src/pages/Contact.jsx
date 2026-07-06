import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'

export default function Contact() {
  const sendMessage = useMutation(api.messages.send)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendMessage(form)
      setForm({ name: '', email: '', message: '' })
      setStatus('sent')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Have a project in mind or want to connect? Reach out below.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'sent' && <p className="form-status form-status-success">Thanks! Your message has been sent.</p>}
        {status === 'error' && <p className="form-status form-status-error">Something went wrong. Please try again.</p>}
      </form>
      <div className="social-links">
        <a href="mailto:everage.calen@gmail.com">Email</a>
        <a href="https://github.com/calen-everage" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/calen-everage-750a10297/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}
