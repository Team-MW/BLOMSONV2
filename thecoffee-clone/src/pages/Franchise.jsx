import './Franchise.css'

const STEPS = [
    { num: '01', title: 'Apply Online', desc: 'Fill out our franchise application form and tell us about yourself and your vision.' },
    { num: '02', title: 'Meet the Team', desc: 'We\'ll schedule a call with our franchise development team to discuss the opportunity.' },
    { num: '03', title: 'Business Plan', desc: 'Together we review your location, business plan, and investment capacity.' },
    { num: '04', title: 'Training', desc: 'Complete our comprehensive training program in Curitiba, Brazil.' },
    { num: '05', title: 'Open Your Store', desc: 'With full support from our team, open your The Coffee location.' },
]

const STATS = [
    { num: '500+', label: 'stores worldwide' },
    { num: '15+', label: 'countries' },
    { num: '6yr', label: 'of growth' },
    { num: '#1', label: 'specialty coffee brand' },
]

export default function Franchise() {
    return (
        <main className="page franchise">

            {/* Hero */}
            <section className="franchise__hero">
                <div className="franchise__hero-content">
                    <span className="section-eyebrow">Franquia</span>
                    <h1 className="franchise__title">
                        Join a global<br />coffee movement.
                    </h1>
                    <p className="franchise__sub">
                        Bring The Coffee experience to your city. We provide the brand,
                        the training, and the support — you bring the passion.
                    </p>
                    <a href="#apply" className="btn-outline">Apply Now</a>
                </div>
                <div className="franchise__hero-img">
                    <img src="/store.png" alt="The Coffee Store" />
                    <div className="franchise__hero-overlay" />
                </div>
            </section>

            {/* Stats */}
            <div className="franchise__stats">
                {STATS.map(s => (
                    <div key={s.num} className="franchise__stat">
                        <span className="franchise__stat-num">{s.num}</span>
                        <span className="franchise__stat-label">{s.label}</span>
                    </div>
                ))}
            </div>

            {/* Why */}
            <section className="franchise__why">
                <div className="franchise__why-text">
                    <span className="section-eyebrow">Why The Coffee</span>
                    <h2 className="section-title">More than a coffee shop.</h2>
                    <p className="section-body">
                        The Coffee is a full lifestyle experience rooted in Japanese minimalism and
                        Brazilian coffee culture. Our franchise model is built for rapid growth while
                        maintaining the quality and simplicity that makes us unique.
                    </p>
                    <ul className="franchise__benefits">
                        <li>✦ Complete training program in Curitiba</li>
                        <li>✦ Proprietary roasting technology</li>
                        <li>✦ Marketing & brand support</li>
                        <li>✦ Operational systems & POS</li>
                        <li>✦ Community of 500+ franchisees</li>
                    </ul>
                </div>
                <div className="franchise__why-img">
                    <img src="/roasters.png" alt="Coffee roasting" />
                </div>
            </section>

            {/* Steps */}
            <section className="franchise__process">
                <div className="franchise__process-header">
                    <span className="section-eyebrow">How it works</span>
                    <h2 className="section-title">The path to opening<br />your store.</h2>
                </div>
                <div className="franchise__steps">
                    {STEPS.map(step => (
                        <div key={step.num} className="franchise__step">
                            <span className="franchise__step-num">{step.num}</span>
                            <h3 className="franchise__step-title">{step.title}</h3>
                            <p className="franchise__step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section id="apply" className="franchise__cta">
                <div className="franchise__cta-bg">
                    <img src="/hero.png" alt="Coffee" />
                    <div className="franchise__cta-overlay" />
                </div>
                <div className="franchise__cta-content">
                    <h2 className="franchise__cta-title">Ready to start?</h2>
                    <p className="franchise__cta-sub">
                        Fill out the form below and our franchise team will be in touch within 48 hours.
                    </p>
                    <form className="franchise__form">
                        <div className="franchise__form-row">
                            <input type="text" placeholder="First Name" className="franchise__input" />
                            <input type="text" placeholder="Last Name" className="franchise__input" />
                        </div>
                        <input type="email" placeholder="Email Address" className="franchise__input" />
                        <input type="text" placeholder="City / Country" className="franchise__input" />
                        <textarea
                            placeholder="Tell us about your project..."
                            className="franchise__textarea"
                            rows={4}
                        />
                        <button type="submit" className="franchise__submit">
                            Send Application
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                    </form>
                </div>
            </section>

        </main>
    )
}
