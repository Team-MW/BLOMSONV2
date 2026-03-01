import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

// Slide indicators component
function SlideIndicators({ count, active, onChange }) {
    return (
        <div className="slide-indicators">
            {Array.from({ length: count }).map((_, i) => (
                <button
                    key={i}
                    className={`slide-dot ${i === active ? 'slide-dot--active' : ''}`}
                    onClick={() => onChange(i)}
                    aria-label={`Slide ${i + 1}`}
                />
            ))}
        </div>
    )
}

// Observer hook for scroll animations
function useInView(threshold = 0.2) {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true) },
            { threshold }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [threshold])
    return [ref, inView]
}

const HERO_SLIDES = [
    {
        img: '/blossom_brunch_hero.png',
        title: 'Brunch. Coffee.',
        sub: 'Toulouse Centre',
        action: 'Le Menu',
    },
    {
        img: '/blossom_cafe_interior.png',
        title: 'Good Vibes.',
        sub: 'Ambiance Blossom',
        action: 'Réserver 🥞',
    }
]

export default function Home() {
    const [slide, setSlide] = useState(0)
    const [heroRef, heroInView] = useInView(0.1)
    const [conceptRef, conceptInView] = useInView(0.2)
    const [historyRef, historyInView] = useInView(0.2)
    const [pressRef, pressInView] = useInView(0.2)
    const [globalRef, globalInView] = useInView(0.2)

    // Auto-advance slides
    useEffect(() => {
        const id = setInterval(() => {
            setSlide(s => (s + 1) % HERO_SLIDES.length)
        }, 5000)
        return () => clearInterval(id)
    }, [])

    return (
        <main className="home">

            {/* ── HERO ── */}
            <section className="hero" ref={heroRef}>
                {HERO_SLIDES.map((s, i) => (
                    <div
                        key={i}
                        className={`hero__slide ${i === slide ? 'hero__slide--active' : ''}`}
                    >
                        <img src={s.img} alt={s.title} className="hero__img" />
                        <div className="hero__overlay" style={{ background: 'linear-gradient(to bottom, transparent 20%, rgba(0, 0, 0, 0.4) 100%)' }} />
                    </div>
                ))}

                <div className={`hero__content ${heroInView ? 'hero__content--visible' : ''}`}>
                    <span className="hero__jp">{HERO_SLIDES[slide].sub}</span>
                    <h1 className="hero__title">{HERO_SLIDES[slide].title}</h1>
                    <p className="hero__tagline" style={{ letterSpacing: '0.15em', fontSize: '15px' }}>
                        BLOSSOM COFFEE
                    </p>
                </div>

                <div className="hero__bottom">
                    <Link to="#action" className="hero__cta-pill">
                        <span>{HERO_SLIDES[slide].action}</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                    </Link>

                    <button className="hero__plus" aria-label="Scroll down">
                        <span>+</span>
                    </button>

                    <SlideIndicators
                        count={HERO_SLIDES.length}
                        active={slide}
                        onChange={setSlide}
                    />
                </div>
            </section>

            {/* ── APP BANNER (LA CARTE) ── */}
            <section id="menu" className="app-banner">
                <div className="app-banner__inner">
                    <div className="app-banner__text">
                        <span className="app-banner__label">gourmandise 100% maison</span>
                        <Link to="/menu" className="app-banner__link">
                            découvrir la carte
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── REINVENTED ── */}
            <section id="concept" className="roasters" ref={conceptRef}>
                <div className={`roasters__media ${conceptInView ? 'fade-up' : 'fade-hidden'}`}>
                    <img src="/blossom_cafe_interior.png" alt="Blossom Coffee Vibes" className="roasters__img" />
                </div>
                <div className={`roasters__text ${conceptInView ? 'fade-up fade-up--delay' : 'fade-hidden'}`}>
                    <span className="section-eyebrow">Notre Concept</span>
                    <h2 className="section-title">Coffee Shop<br />Reinvented</h2>
                    <p className="section-body">
                        Plus qu'un simple café, Blossom est une expérience sensorielle. Une fusion audacieuse entre l'art du café de spécialité et une culture pop vibrante.
                    </p>
                    <div className="concept-tags">
                        {["Good Vibes Only", "Specialty Coffee", "Ambiance Blossom", "Food Blossom", "Coffee Art", "Interior"].map(tag => (
                            <span key={tag} className="concept-tag"> {tag} </span>
                        ))}
                    </div>
                    <div>
                        <Link to="#" className="btn-outline">
                            notre univers
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── MARQUEE ── */}
            <div className="marquee-wrap">
                <div className="marquee">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className="marquee__item" style={{ fontSize: 'clamp(20px, 3vw, 36px)', fontStyle: 'italic' }}>
                            Good Vibes Only.&nbsp;&nbsp;&nbsp;Brunch.&nbsp;&nbsp;&nbsp;
                        </span>
                    ))}
                </div>
            </div>

            {/* ── HISTOIRE & VALEURS ── */}
            <section id="gourmandise" className="history" ref={historyRef}>
                <div className={`history__content ${historyInView ? 'fade-up' : 'fade-hidden'}`}>
                    <span className="section-eyebrow">Engagement</span>
                    <h2 className="section-title">Un café engagé,<br />un lieu de vie.</h2>
                    <div className="history__body">
                        <p>
                            Blossom Coffee est né d’une envie simple : créer un endroit où l’on se sent bien.
                            Un lieu chaleureux, vivant, sincère. Ici, chaque détail compte.
                        </p>
                        <p>
                            Nous sélectionnons des cafés de qualité, des produits frais, locaux et de saison, et nous cuisinons maison, chaque jour, avec amour. <em>Gourmandise.</em>
                        </p>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px', fontSize: '14px', lineHeight: '2.5', color: 'var(--dark-gray)' }}>
                        <li>☕ Café de spécialité</li>
                        <li>🥐 Brunch & cuisine maison</li>
                        <li>🌿 Produits locaux et responsables</li>
                        <li>🤍 Engagement humain et féminin</li>
                    </ul>
                    <blockquote style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '20px', color: 'var(--mid-gray)', marginBottom: '30px' }}>
                        "Prenez place. Restez longtemps.<br />Vous êtes chez vous."
                    </blockquote>
                </div>
                <div className={`history__visual ${historyInView ? 'fade-up fade-up--delay2' : 'fade-hidden'}`}>
                    <div className="history__img-wrap">
                        <img src="/blossom_latte_art.png" alt="Latte Art Specialty Coffee" />
                        <div className="history__year" style={{ bottom: 'auto', top: '24px', left: 'auto', right: '24px' }}>
                            <span className="history__year-num" style={{ fontSize: '24px' }}>7j/7</span>
                            <span className="history__year-label">ouvert</span>
                        </div>
                    </div>
                    <div className="history__stats">
                        <div className="history__stat">
                            <span className="history__stat-num" style={{ fontSize: '20px' }}>11:00</span>
                            <span className="history__stat-label">Ouverture</span>
                        </div>
                        <div className="history__stat">
                            <span className="history__stat-num" style={{ fontSize: '20px' }}>18:45</span>
                            <span className="history__stat-label">Fermeture</span>
                        </div>
                        <div className="history__stat">
                            <span className="history__stat-num" style={{ fontSize: '20px' }}>100%</span>
                            <span className="history__stat-label">Fait Maison</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── AVIS ── */}
            <section id="faq" className="press" ref={pressRef}>
                <div className={`press__header ${pressInView ? 'fade-up' : 'fade-hidden'}`}>
                    <span className="section-eyebrow">Vos Avis</span>
                    <h2 className="section-title" style={{ marginBottom: '10px' }}>Ils nous kiffent grave</h2>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--white)', padding: '8px 16px', borderRadius: '20px', fontSize: '12px', border: '1px solid var(--light-gray)' }}>
                        ⭐ 4.9/5 sur Google
                    </div>
                </div>
                <div className={`press__grid ${pressInView ? 'fade-up fade-up--delay' : 'fade-hidden'}`} style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px' }}>

                    <div className="press__logo" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '40px' }}>
                        <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '16px', color: 'var(--black)', marginBottom: '15px' }}>Léa D.</span>
                        <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--dark-gray)', textAlign: 'left', fontStyle: 'italic' }}>
                            "Le meilleur café de Toulouse ! L'ambiance est incroyable, la déco est super colorée et l'équipe est adorable. Les pancakes sont une tuerie."
                        </p>
                    </div>

                    <div className="press__logo" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '40px' }}>
                        <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '16px', color: 'var(--black)', marginBottom: '15px' }}>Thomas M.</span>
                        <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--dark-gray)', textAlign: 'left', fontStyle: 'italic' }}>
                            "Un spot parfait pour bosser ou chiller. Le café est excellent (vrai specialty coffee) et les pâtisseries maison sont à tomber. Je recommande !"
                        </p>
                    </div>

                    <div className="press__logo" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '40px' }}>
                        <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '16px', color: 'var(--black)', marginBottom: '15px' }}>Sarah B.</span>
                        <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--dark-gray)', textAlign: 'left', fontStyle: 'italic' }}>
                            "Gros coup de cœur pour le Blossom ! C'est pop, c'est frais, ça change. Le brunch du dimanche est devenu notre rituel."
                        </p>
                    </div>

                </div>
                <div style={{ textAlign: 'center', marginTop: '40px' }} className={pressInView ? 'fade-up fade-up--delay2' : 'fade-hidden'}>
                    <Link to="#" className="btn-text">
                        Voir tous les avis
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </section>

            {/* ── OU NOUS TROUVER ── */}
            <section id="locations" className="global" ref={globalRef} style={{ minHeight: '600px' }}>
                <div className="global__bg">
                    <img src="/blossom_brunch_hero.png" alt="Toulouse localisation" />
                    <div className="global__overlay" style={{ background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4))' }} />
                </div>
                <div className={`global__content ${globalInView ? 'fade-up' : 'fade-hidden'}`}>
                    <span className="section-eyebrow global__eyebrow">Au Cœur de Toulouse</span>
                    <h2 className="global__title" style={{ marginBottom: '40px' }}>On se voit<br />quand ?</h2>
                    <div className="global__info-card">
                        <div className="global__info-item">
                            <h4>Blossom Coffee</h4>
                            <p>11 Rue des Trois Renards<br />31000 Toulouse</p>
                        </div>
                        <div className="global__info-divider" />
                        <div className="global__info-item">
                            <h4>Accessibilité</h4>
                            <p>Notre établissement est entièrement accessible aux personnes à mobilité réduite (PMR). Rampe d'accès et toilettes adaptées.</p>
                        </div>
                        <div className="global__info-item">
                            <p>🚇 Métro A - Esquirol<br />🚌 Bus L4, L7, L9</p>
                        </div>
                    </div>
                    <Link to="/contact" className="btn-white">
                        Des questions ? FAQ
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </section>

        </main>
    )
}
