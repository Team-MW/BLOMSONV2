import './AboutUs.css'

const TIMELINE = [
    { year: '2018', title: 'The Beginning', desc: 'First store opens in Curitiba with just 3 square meters.' },
    { year: '2019', title: 'First Expansion', desc: 'Franchise model launched. 20 new stores across Brazil.' },
    { year: '2020', title: 'Resilience', desc: 'Adapted through global challenges. Digital ordering launched.' },
    { year: '2021', title: 'Going Global', desc: 'First international stores in Portugal and Japan.' },
    { year: '2022', title: 'Investment', desc: 'Major investment round. 200+ stores milestone.' },
    { year: '2024', title: 'World Stage', desc: '500+ stores in 15+ countries worldwide.' },
]

const TEAM = [
    { name: 'Carlos Fertonani', role: 'Co-Founder & CEO', img: '/store.png' },
    { name: 'Alexandre Fertonani', role: 'Co-Founder & COO', img: '/roasters.png' },
    { name: 'Luis Fertonani', role: 'Co-Founder & CMO', img: '/beans.png' },
]

export default function AboutUs() {
    return (
        <main className="page about">

            {/* Hero */}
            <section className="about__hero">
                <div className="about__hero-content">
                    <span className="section-eyebrow">Sobre nós</span>
                    <h1 className="about__title">Simple.</h1>
                    <p className="about__sub">
                        Born in Brazil. Inspired by Japan. For the world.
                    </p>
                </div>
                <div className="about__hero-img">
                    <img src="/store.png" alt="The Coffee store" />
                    <div className="about__hero-overlay" />
                </div>
            </section>

            {/* Manifesto */}
            <section className="about__manifesto">
                <div className="about__manifesto-inner">
                    <blockquote className="about__quote">
                        "Coffee is amazing. We love.<br />
                        <em>But taste and aroma are only part of the whole experience.</em>"
                    </blockquote>
                    <div className="about__manifesto-text">
                        <p>
                            In 2018, the idea of creating a different kind of coffee shop in Brazil emerged.
                            Inspired by the high quality, simplicity and perfection of Japanese coffee shops,
                            brothers Carlos, Alexandre and Luis Fertonani opened the first The Coffee store
                            on Al. Prudente de Moraes in Curitiba, Brazil, with just 3 square meters.
                        </p>
                        <p>
                            From that address, something great began — quickly expanding around the world,
                            bringing the best of Brazilian coffee combined with the purity and perfectionism
                            of Japan. Simple.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="about__timeline">
                <div className="about__timeline-header">
                    <span className="section-eyebrow">Nossa história</span>
                    <h2 className="section-title">Our Journey</h2>
                </div>
                <div className="about__timeline-items">
                    {TIMELINE.map((item, i) => (
                        <div key={item.year} className="about__timeline-item">
                            <div className="about__timeline-year">{item.year}</div>
                            <div className="about__timeline-dot" />
                            <div className="about__timeline-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="about__team">
                <div className="about__team-header">
                    <span className="section-eyebrow">Our founders</span>
                    <h2 className="section-title">The people<br />behind the coffee.</h2>
                </div>
                <div className="about__team-grid">
                    {TEAM.map(member => (
                        <div key={member.name} className="about__team-card">
                            <div className="about__team-img">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <div className="about__team-info">
                                <h3>{member.name}</h3>
                                <span>{member.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission */}
            <section className="about__mission">
                <div className="about__mission-bg">
                    <img src="/hero.png" alt="Coffee" />
                    <div className="about__mission-overlay" />
                </div>
                <div className="about__mission-content">
                    <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Our mission</span>
                    <h2 className="about__mission-title">
                        To bring the perfect<br />cup to every corner<br />of the world.
                    </h2>
                </div>
            </section>

        </main>
    )
}
