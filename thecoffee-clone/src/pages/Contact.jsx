import { useState } from 'react'
import './Contact.css'

export default function Contact() {
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
    }

    return (
        <main className="page contact">
            <div className="contact__grid">
                <div className="contact__info">
                    <div className="contact__info-content">
                        <span className="section-eyebrow">Fale Conosco</span>
                        <h1 className="contact__title">Talk<br />to us.</h1>
                        <p className="contact__sub">
                            Whether you have a question about our coffee, want to know more
                            about franchising, or just want to say hello — we'd love to hear from you.
                        </p>

                        <div className="contact__details">
                            <div className="contact__detail">
                                <span className="contact__detail-label">Email</span>
                                <a href="mailto:hello@thecoffee.jp">hello@thecoffee.jp</a>
                            </div>
                            <div className="contact__detail">
                                <span className="contact__detail-label">Headquarters</span>
                                <span>Curitiba, Brazil</span>
                            </div>
                            <div className="contact__detail">
                                <span className="contact__detail-label">Social</span>
                                <div className="contact__socials">
                                    <a href="#">Instagram</a>
                                    <a href="#">LinkedIn</a>
                                    <a href="#">Spotify</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact__info-img">
                        <img src="/hero.png" alt="Coffee" />
                    </div>
                </div>

                <div className="contact__form-wrap">
                    {sent ? (
                        <div className="contact__success">
                            <span className="contact__success-icon">✓</span>
                            <h3>Message received.</h3>
                            <p>We'll get back to you within 48 hours.</p>
                            <button className="btn-text" onClick={() => setSent(false)}>
                                Send another message →
                            </button>
                        </div>
                    ) : (
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <h2 className="contact__form-title">Send us a message</h2>
                            <div className="contact__form-row">
                                <div className="contact__field">
                                    <label>Name</label>
                                    <input type="text" placeholder="Your name" required />
                                </div>
                                <div className="contact__field">
                                    <label>Email</label>
                                    <input type="email" placeholder="your@email.com" required />
                                </div>
                            </div>
                            <div className="contact__field">
                                <label>Subject</label>
                                <select>
                                    <option>General inquiry</option>
                                    <option>Franchise</option>
                                    <option>Press</option>
                                    <option>Partnerships</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="contact__field">
                                <label>Message</label>
                                <textarea placeholder="How can we help you?" rows={6} required />
                            </div>
                            <button type="submit" className="contact__submit">
                                Send Message
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </main>
    )
}
