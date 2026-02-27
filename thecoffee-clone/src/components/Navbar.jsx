import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const languages = ['PT', 'EN', 'ES', 'FR', 'JP', 'KR']

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeLang, setActiveLang] = useState('EN')
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'Our Beans', path: '/ourbean' },
        { label: 'Our Stores', path: '/locations' },
        { label: 'Franchise', path: '/franchise' },
        { label: 'Talk to us', path: '/contact' },
    ]

    return (
        <>
            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__langs">
                    {languages.map(lang => (
                        <button
                            key={lang}
                            className={`navbar__lang ${activeLang === lang ? 'navbar__lang--active' : ''}`}
                            onClick={() => setActiveLang(lang)}
                        >
                            {lang}
                        </button>
                    ))}
                </div>

                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-en">the coffee.</span>
                    <span className="navbar__logo-jp">ザ・コーヒー</span>
                </Link>

                <div className="navbar__right">
                    <div className="navbar__socials">
                        <a href="#" className="navbar__social" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        <a href="#" className="navbar__social" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a href="#" className="navbar__social" aria-label="Spotify">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 13.5a8 8 0 0 1 8-1M8 16.5a6 6 0 0 1 6-.75M8 10.5a10 10 0 0 1 10-1.25" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                        </a>
                    </div>
                    <button
                        className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Full screen menu */}
            <div className={`fullmenu ${menuOpen ? 'fullmenu--open' : ''}`}>
                <div className="fullmenu__content">
                    <nav className="fullmenu__nav">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`fullmenu__link ${location.pathname === link.path ? 'fullmenu__link--active' : ''}`}
                                style={{ transitionDelay: menuOpen ? `${i * 0.08}s` : '0s' }}
                            >
                                <span className="fullmenu__link-num">0{i + 1}</span>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="fullmenu__footer">
                        <p>Coffee is amazing. We love.</p>
                        <p>But taste and aroma are only part of the whole experience.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
