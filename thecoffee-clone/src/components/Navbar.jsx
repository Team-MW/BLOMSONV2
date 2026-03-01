import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        // Handle hash scroll when location changes (from another page to home page anchor)
        if (location.hash) {
            setTimeout(() => {
                const element = document.getElementById(location.hash.substring(1))
                if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100)
        }
    }, [location])

    const handleNavClick = (e, path) => {
        setMenuOpen(false)
        if (path.startsWith('/#')) {
            const targetId = path.substring(2)
            if (location.pathname === '/') {
                e.preventDefault()
                setTimeout(() => {
                    const element = document.getElementById(targetId)
                    if (element) {
                        const yOffset = -100;
                        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                        window.history.pushState(null, '', path)
                    }
                }, 150) // wait for menu animations to start closing
            }
        }
    }

    const navLinks = [
        { label: 'Le Menu', path: '/#menu' },
        { label: 'Notre Concept', path: '/#concept' },
        { label: 'Gourmandise', path: '/#gourmandise' },
        { label: 'Où nous trouver ?', path: '/#locations' },
        { label: 'Vos Avis', path: '/#faq' },
        { label: 'Contact', path: '/contact' },
    ]

    return (
        <>
            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__langs">
                    {/* Empty or can be used for something else */}
                </div>

                <Link to="/" className="navbar__logo" onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}>
                    <span className="navbar__logo-en">BLOSSOM</span>
                    <span className="navbar__logo-jp">COFFEE</span>
                </Link>

                <div className="navbar__right">
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
                                onClick={(e) => handleNavClick(e, link.path)}
                                className={`fullmenu__link`}
                                style={{ transitionDelay: menuOpen ? `${i * 0.08}s` : '0s' }}
                            >
                                <span className="fullmenu__link-num">0{i + 1}</span>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="fullmenu__footer">
                        <p>Brunch. Coffee. Good Vibes.</p>
                        <p>Plus qu'un simple café, Blossom est une expérience sensorielle.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
