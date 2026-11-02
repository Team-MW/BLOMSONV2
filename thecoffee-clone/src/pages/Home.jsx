import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Home.css'
import PhotoGallery from '../components/PhotoGallery'
import imageCarte from '../assets/carte_blossom_officielle.png'
import cafeEngagementImg from '../assets/cafe_engagement.jpeg'

// Slide indicators component

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

export default function Home() {
    const [heroRef, heroInView] = useInView(0.1)
    const [conceptRef, conceptInView] = useInView(0.2)
    const [historyRef, historyInView] = useInView(0.2)
    const [pressRef, pressInView] = useInView(0.2)
    const [globalRef, globalInView] = useInView(0.05)
    const [carteRef, carteInView] = useInView(0.2)
    const [galleryRef, galleryInView] = useInView(0.2)

    return (
        <>
            <Helmet>
                <title>Blossom Coffee | Accueil</title>
                <meta name="description" content="Découvrez Blossom Coffee : brunch et café de spécialité au centre de Toulouse. Plongez dans notre univers concept store : pâtisseries maison, cafés d'exception et vibes chaleureuses !" />
            </Helmet>
            <main className="home">

                {/* ── HERO (FOND UNIQUE AVEC LA DERNIÈRE PHOTO MISE) ── */}
                <section className="hero" ref={heroRef}>
                    <div className="hero__slide hero__slide--active">
                        <img src="/hero_bg.jpg" alt="Blossom Coffee Toulouse" className="hero__img" />
                        <div className="hero__overlay" style={{ background: 'linear-gradient(to bottom, transparent 20%, rgba(0, 0, 0, 0.55) 100%)' }} />
                    </div>

                    <div className={`hero__content ${heroInView ? 'hero__content--visible' : ''}`}>
                        <span className="hero__jp">Toulouse Centre</span>
                        <h1 className="hero__title">Brunch. Coffee.</h1>
                        <p className="hero__tagline" style={{ letterSpacing: '0.15em', fontSize: '15px' }}>
                            BLOSSOM COFFEE
                        </p>
                    </div>

                    <div className="hero__bottom">
                        <div className="hero__cta-group">
                            <a href="#menu" className="hero__cta-pill">
                                <span>La Carte</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                            </a>
                            <a href="#locations" className="hero__cta-pill hero__cta-pill--secondary">
                                <span>Nous Rejoindre</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                            </a>
                        </div>

                        <a href="#menu" className="hero__plus" aria-label="Défiler vers le bas">
                            <span>↓</span>
                        </a>
                    </div>
                </section>

                {/* ── NOTRE CARTE (PDF & TÉLÉCHARGEMENT) ── */}
                <section id="menu" className="carte-section" ref={carteRef}>
                    <div className={`carte-section__header ${carteInView ? 'fade-up' : 'fade-hidden'}`}>
                        <div className="carte-badge">
                            <span className="carte-badge__pulse"></span>
                            <span>Nouvelle Carte de Saison</span>
                        </div>
                        <span className="section-eyebrow">gourmandise 100% maison</span>
                        <h2 className="section-title">La Carte Blossom</h2>
                        <p className="carte-section__lead">
                            Une cuisine fraîche et sincère, des cafés de spécialité sélectionnés avec passion, et des pâtisseries maison cuisinées chaque matin.
                        </p>

                        <div className="carte-actions">
                            <a
                                href="/carte.pdf"
                                download="Carte-Blossom-Coffee.pdf"
                                className="btn-carte-download"
                                title="Télécharger la carte au format PDF"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                <span>Télécharger la Carte (PDF)</span>
                                <span className="btn-carte-pill">PDF • HD</span>
                            </a>

                            <a
                                href="/carte.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-carte-view"
                                title="Ouvrir le menu en plein écran"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                                <span>Consulter en Plein Écran</span>
                            </a>
                        </div>
                    </div>

                    {/* Menu Highlights preview */}
                    <div className={`carte-highlights ${carteInView ? 'fade-up fade-up--delay' : 'fade-hidden'}`}>
                        <div className="carte-highlight-card">
                            <span className="carte-highlight-icon">☕</span>
                            <h3>Specialty Coffee</h3>
                            <p>Espresso d'origine, Flat White velouté, V60 & lattes signatures préparés par nos baristas.</p>
                        </div>
                        <div className="carte-highlight-card">
                            <span className="carte-highlight-icon">🥞</span>
                            <h3>Brunch Sucré & Salé</h3>
                            <p>Fluffy pancakes moelleux, brioche perdue artisanale, toasties gourmands et assiettes complètes.</p>
                        </div>
                        <div className="carte-highlight-card">
                            <span className="carte-highlight-icon">🌿</span>
                            <h3>100% Fait Maison</h3>
                            <p>Ingrédients frais et locaux, produits de saison, options végétariennes & laits végétaux.</p>
                        </div>
                    </div>

                    {/* Visual Card Mockup with Quick Actions */}
                    <div className={`carte-section__img ${carteInView ? 'fade-up fade-up--delay2' : 'fade-hidden'}`}>
                        <div className="carte-display-card">
                            <div className="carte-display-card__bar">
                                <div className="carte-display-card__dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <span className="carte-display-card__filename">Carte-Blossom-Coffee.pdf</span>
                                <a
                                    href="/carte.pdf"
                                    download="Carte-Blossom-Coffee.pdf"
                                    className="carte-display-card__quick-dl"
                                    title="Télécharger directement la carte PDF"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                    <span>Télécharger le PDF</span>
                                </a>
                            </div>

                            <a
                                href="/carte.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="carte-display-card__link"
                                title="Cliquer pour afficher la carte en taille réelle"
                            >
                                <img src={imageCarte} alt="Carte du Brunch Blossom Coffee à Toulouse" />
                                <div className="carte-display-card__hover-overlay">
                                    <div className="carte-display-card__hover-btn">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                        </svg>
                                        <span>Agrandir / Ouvrir le PDF</span>
                                    </div>
                                </div>
                            </a>

                            <div className="carte-display-card__bottom-bar">
                                <p>Disponible 7j/7 au café • 11 Rue des Trois Renards, 31000 Toulouse</p>
                                <a
                                    href="/carte.pdf"
                                    download="Carte-Blossom-Coffee.pdf"
                                    className="carte-bottom-download-link"
                                >
                                    Télécharger le PDF (154 Ko) →
                                </a>
                            </div>
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
                            <img src={cafeEngagementImg} alt="Café de spécialité Blossom Coffee" />
                            <div className="history__year" style={{ bottom: 'auto', top: '24px', left: 'auto', right: '24px' }}>
                                <span className="history__year-num" style={{ fontSize: '24px' }}>7j/7</span>
                                <span className="history__year-label">ouvert</span>
                            </div>
                        </div>
                        <div className="history__stats">
                            <div className="history__stat">
                                <span className="history__stat-num" style={{ fontSize: '18px', whiteSpace: 'nowrap' }}>11:30 - 19:00</span>
                                <span className="history__stat-label">Lun - Ven</span>
                            </div>
                            <div className="history__stat">
                                <span className="history__stat-num" style={{ fontSize: '18px', whiteSpace: 'nowrap' }}>10:30 - 19:00</span>
                                <span className="history__stat-label">Sam - Dim</span>
                            </div>
                            <div className="history__stat">
                                <span className="history__stat-num" style={{ fontSize: '20px' }}>100%</span>
                                <span className="history__stat-label">Fait Maison</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── GALERIE DÉFILANTE BLOSSOM (13 PHOTOS EN SLIDER CONTINU & LIGHTBOX) ── */}
                <PhotoGallery />

                {/* ── AVIS ── */}
                <section id="faq" className="press" ref={pressRef}>
                    <div className={`press__header ${pressInView ? 'fade-up' : 'fade-hidden'}`}>
                        <span className="section-eyebrow">Vos Avis</span>
                        <h2 className="section-title" style={{ marginBottom: '10px' }}>Ils nous kiffent grave</h2>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--white)', padding: '8px 16px', borderRadius: '20px', fontSize: '12px', border: '1px solid var(--light-gray)' }}>
                            ⭐ 4.5/5 sur Google
                        </div>
                    </div>
                    <div className={`press__grid ${pressInView ? 'fade-up fade-up--delay' : 'fade-hidden'}`}>

                        <div className="press__logo" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '16px', color: 'var(--black)', marginBottom: '15px' }}>Léa D.</span>
                            <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--dark-gray)', textAlign: 'left', fontStyle: 'italic' }}>
                                "Le meilleur café de Toulouse ! L'ambiance est incroyable, la déco est super colorée et l'équipe est adorable. Les pancakes sont une tuerie."
                            </p>
                        </div>

                        <div className="press__logo" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span style={{ fontStyle: 'normal', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '16px', color: 'var(--black)', marginBottom: '15px' }}>Thomas M.</span>
                            <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--dark-gray)', textAlign: 'left', fontStyle: 'italic' }}>
                                "Un spot parfait pour bosser ou chiller. Le café est excellent (vrai specialty coffee) et les pâtisseries maison sont à tomber. Je recommande !"
                            </p>
                        </div>

                        <div className="press__logo" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
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

                {/* ── NOUS REJOINDRE (ADRESSE, MÉTROS, BUS, CARTE MAPS & ITINÉRAIRE DIRECT) ── */}
                <section id="locations" className="locations-section" ref={globalRef}>
                    <div className={`locations__header ${globalInView ? 'fade-up' : 'fade-hidden'}`}>
                        <span className="section-eyebrow">Au Cœur de Toulouse</span>
                        <h2 className="section-title">Nous Rejoindre</h2>
                        <p className="locations__lead">
                            Passez nous faire un coucou au café pour savourer nos boissons signatures, notre café de spécialité et nos brunchs maison.
                        </p>
                    </div>

                    <div className={`locations__container ${globalInView ? 'fade-up fade-up--delay' : 'fade-hidden'}`}>
                        {/* Colonne Gauche : Carte Google Maps interactive */}
                        <div className="locations__map-col">
                            <div className="locations__map-wrapper">
                                <iframe
                                    title="Localisation Blossom Coffee Toulouse"
                                    src="https://maps.google.com/maps?q=Blossom+Coffee+11+Rue+des+Trois+Renards+31000+Toulouse&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                    className="locations__iframe"
                                    loading="lazy"
                                    allowFullScreen
                                />
                                <div className="locations__map-badge">
                                    <span className="locations__map-dot"></span>
                                    <span>Blossom Coffee • 11 Rue des Trois Renards</span>
                                </div>
                            </div>

                            <div className="locations__map-actions">
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=Blossom+Coffee+11+Rue+des+Trois+Renards+31000+Toulouse"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-itinerary-primary"
                                    title="Ouvrir l'itinéraire direct dans Google Maps"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="3 11 22 2 13 21 11 13 3 11" />
                                    </svg>
                                    <span>Itinéraire Direct Google Maps</span>
                                </a>

                                <a
                                    href="https://maps.google.com/?q=Blossom+Coffee+11+Rue+des+Trois+Renards+31000+Toulouse"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-itinerary-secondary"
                                    title="Voir sur Google Maps"
                                >
                                    <span>Ouvrir sur Maps ↗</span>
                                </a>
                            </div>
                        </div>

                        {/* Colonne Droite : Fiches Pratiques & Transports */}
                        <div className="locations__info-col">
                            
                            {/* Card Adresse & Contact */}
                            <div className="location-card">
                                <div className="location-card__icon">📍</div>
                                <div className="location-card__content">
                                    <h3>Adresse</h3>
                                    <p className="location-card__main-text">11 Rue des Trois Renards<br />31000 Toulouse</p>
                                    <div className="location-card__links">
                                        <a href="tel:+33783846168" className="location-contact-link">
                                            📞 +33 7 83 84 61 68
                                        </a>
                                        <span className="location-card__dot-sep">•</span>
                                        <span className="location-tag-open">Ouvert 7j/7</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Transports en commun (Métro, Bus, Vélo) */}
                            <div className="location-card">
                                <div className="location-card__icon">🚇</div>
                                <div className="location-card__content">
                                    <h3>Lignes de Métro & Bus</h3>
                                    <div className="transit-grid">
                                        <div className="transit-badge-group">
                                            <span className="transit-pill metro-a">Métro A</span>
                                            <span className="transit-desc"><strong>Esquirol</strong> — à 2 min à pied</span>
                                        </div>
                                        <div className="transit-badge-group">
                                            <span className="transit-pill metro-b">Métro B</span>
                                            <span className="transit-desc"><strong>Carmes</strong> — à 4 min à pied</span>
                                        </div>
                                        <div className="transit-badge-group">
                                            <span className="transit-pill bus">Bus</span>
                                            <span className="transit-desc">Lignes <strong>L4, L7, L9, 44</strong> (Arrêt Esquirol)</span>
                                        </div>
                                        <div className="transit-badge-group">
                                            <span className="transit-pill velo">🚲 Vélo</span>
                                            <span className="transit-desc">VélôToulouse n°10 (Esquirol) & n°26 (Trinité)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card Horaires & Espaces */}
                            <div className="location-card">
                                <div className="location-card__icon">🕒</div>
                                <div className="location-card__content">
                                    <h3>Horaires & Espaces</h3>
                                    <div className="hours-list">
                                        <div className="hours-row">
                                            <span>Lundi – Vendredi</span>
                                            <strong>11:30 – 19:00</strong>
                                        </div>
                                        <div className="hours-row">
                                            <span>Samedi – Dimanche</span>
                                            <strong>10:30 – 19:00</strong>
                                        </div>
                                    </div>
                                    <p className="location-card__note">
                                        ☀️ Terrasse ensoleillée & salle cosy à l'étage pour déguster votre brunch en toute tranquillité.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
