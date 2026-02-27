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
        img: '/hero.png',
        title: 'Coffee is amazing.',
        sub: 'ザ・コーヒー',
        cta: 'View our menu',
        ctaLink: '/locations',
    },
    {
        img: '/store.png',
        title: 'Find your store.',
        sub: 'ノストラス・ロハス',
        cta: 'Our locations',
        ctaLink: '/locations',
    },
    {
        img: '/roasters.png',
        title: 'We are roasters.',
        sub: 'トレファソン',
        cta: 'Our beans',
        ctaLink: '/ourbean',
    },
]

const PRESS_LOGOS = [
    'Forbes', 'Vogue', 'Dezeen', 'Monocle', 'Kinfolk', 'Wallpaper*', 'The Guardian', 'Condé Nast',
]

const INVESTORS = [
    'Kaszek', 'SoftBank', 'Canary', 'Maya Capital', 'Banana Capital', 'Tiger Global',
]

export default function Home() {
    const [slide, setSlide] = useState(0)
    const [heroRef, heroInView] = useInView(0.1)
    const [roastersRef, roastersInView] = useInView(0.2)
    const [historyRef, historyInView] = useInView(0.2)
    const [globalRef, globalInView] = useInView(0.2)
    const [pressRef, pressInView] = useInView(0.2)

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
                        <div className="hero__overlay" />
                    </div>
                ))}

                <div className={`hero__content ${heroInView ? 'hero__content--visible' : ''}`}>
                    <span className="hero__jp">{HERO_SLIDES[slide].sub}</span>
                    <h1 className="hero__title">{HERO_SLIDES[slide].title}</h1>
                    <p className="hero__tagline">
                        But taste and aroma are only part<br />of the whole experience.
                    </p>
                </div>

                <div className="hero__bottom">
                    <Link to="/locations" className="hero__cta-pill">
                        <span>order via app</span>
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

            {/* ── APP BANNER ── */}
            <section className="app-banner">
                <div className="app-banner__inner">
                    <div className="app-banner__text">
                        <span className="app-banner__label">peça pelo app</span>
                        <Link to="/locations" className="app-banner__link">
                            conheça nosso cardápio
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── WE ARE ROASTERS ── */}
            <section className="roasters" ref={roastersRef}>
                <div className={`roasters__media ${roastersInView ? 'fade-up' : 'fade-hidden'}`}>
                    <img src="/beans.png" alt="Coffee beans" className="roasters__img" />
                </div>
                <div className={`roasters__text ${roastersInView ? 'fade-up fade-up--delay' : 'fade-hidden'}`}>
                    <span className="section-eyebrow">Torrefação própria</span>
                    <h2 className="section-title">We are roasters</h2>
                    <p className="section-body">
                        A seleção e a torrefação dos nossos grãos acontecem na cidade de Curitiba, por meio
                        de um criterioso trabalho do nosso Mestre de Torras. Após diversas pesquisas e testes,
                        encontramos o perfil de torra ideal — responsável por definir o tempo e a temperatura
                        que valoriza cada grão em sua essência.
                    </p>
                    <Link to="/ourbean" className="btn-outline">
                        nossos grãos
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </section>

            {/* ── MARQUEE ── */}
            <div className="marquee-wrap">
                <div className="marquee">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <span key={i} className="marquee__item">
                            Simple.&nbsp;&nbsp;&nbsp;シンプル.&nbsp;&nbsp;&nbsp;
                        </span>
                    ))}
                </div>
            </div>

            {/* ── OUR HISTORY ── */}
            <section className="history" ref={historyRef}>
                <div className={`history__content ${historyInView ? 'fade-up' : 'fade-hidden'}`}>
                    <span className="section-eyebrow">Nossa história</span>
                    <h2 className="section-title">Born in Brazil,<br />inspired by Japan.</h2>
                    <div className="history__body">
                        <p>
                            Em 2018, a ideia de criar um modelo de cafeteria diferente no Brasil surgiu.
                            Inspirada pela alta qualidade, simplicidade e perfeição das cafeterias japonesas,
                            os irmãos Carlos, Alexandre e Luis Fertonani abrem a primeira loja The Coffee na
                            Al. Prudente de Moraes — Curitiba — Brasil, com apenas 3 metros quadrados.
                        </p>
                        <p>
                            Neste endereço o início de algo grandioso começou, e logo se expandiu ao redor
                            do mundo, levando o melhor do café brasileiro combinado com a pureza e o
                            perfeccionismo do Japão. <em>Simple.</em>
                        </p>
                    </div>
                    <Link to="/aboutus" className="btn-text">
                        saiba mais
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
                <div className={`history__visual ${historyInView ? 'fade-up fade-up--delay2' : 'fade-hidden'}`}>
                    <div className="history__img-wrap">
                        <img src="/store.png" alt="The Coffee store" />
                        <div className="history__year">
                            <span className="history__year-num">2018</span>
                            <span className="history__year-label">founded</span>
                        </div>
                    </div>
                    <div className="history__stats">
                        <div className="history__stat">
                            <span className="history__stat-num">500+</span>
                            <span className="history__stat-label">stores worldwide</span>
                        </div>
                        <div className="history__stat">
                            <span className="history__stat-num">15+</span>
                            <span className="history__stat-label">countries</span>
                        </div>
                        <div className="history__stat">
                            <span className="history__stat-num">3m²</span>
                            <span className="history__stat-label">first store</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRESS ── */}
            <section className="press" ref={pressRef}>
                <div className={`press__header ${pressInView ? 'fade-up' : 'fade-hidden'}`}>
                    <span className="section-eyebrow">Imprensa e prêmios</span>
                    <h2 className="section-title">As seen in</h2>
                </div>
                <div className={`press__grid ${pressInView ? 'fade-up fade-up--delay' : 'fade-hidden'}`}>
                    {PRESS_LOGOS.map(name => (
                        <div key={name} className="press__logo">
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── INVESTORS ── */}
            <section className="investors">
                <div className="investors__header">
                    <span className="section-eyebrow">Nossos investidores</span>
                </div>
                <div className="investors__grid">
                    {INVESTORS.map(name => (
                        <div key={name} className="investors__logo">
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── GLOBAL FRANCHISE ── */}
            <section className="global" ref={globalRef}>
                <div className="global__bg">
                    <img src="/roasters.png" alt="Coffee roastery" />
                    <div className="global__overlay" />
                </div>
                <div className={`global__content ${globalInView ? 'fade-up' : 'fade-hidden'}`}>
                    <span className="section-eyebrow global__eyebrow">Faça parte de um café global</span>
                    <h2 className="global__title">Be part of<br />something great.</h2>
                    <p className="global__body">
                        Join the fastest growing specialty coffee brand in the world.
                        Bring The Coffee experience to your city.
                    </p>
                    <Link to="/franchise" className="btn-white">
                        seja um franqueado
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </section>

        </main>
    )
}
