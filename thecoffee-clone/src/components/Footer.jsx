import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__brand">
                    <div className="footer__logo">
                        <span className="footer__logo-en">the coffee.</span>
                        <span className="footer__logo-jp">ザ・コーヒー</span>
                    </div>
                    <p className="footer__tagline">
                        Coffee is amazing. We love.<br />
                        But taste and aroma are only<br />
                        part of the whole experience.
                    </p>
                    <div className="footer__socials">
                        <a href="#" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Spotify">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 13.5a8 8 0 0 1 8-1M8 16.5a6 6 0 0 1 6-.75M8 10.5a10 10 0 0 1 10-1.25" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer__links">
                    <div className="footer__col">
                        <h3 className="footer__col-title">Company</h3>
                        <nav className="footer__nav">
                            <Link to="/aboutus">About us</Link>
                            <Link to="/ourbean">Our Beans</Link>
                            <Link to="/locations">Our Stores</Link>
                            <Link to="/franchise">Franchise</Link>
                            <Link to="/contact">Talk to us</Link>
                        </nav>
                    </div>
                    <div className="footer__col">
                        <h3 className="footer__col-title">Legal</h3>
                        <nav className="footer__nav">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Code of Ethics</a>
                        </nav>
                    </div>
                    <div className="footer__col">
                        <h3 className="footer__col-title">Languages</h3>
                        <nav className="footer__nav">
                            <a href="#">Português</a>
                            <a href="#">English</a>
                            <a href="#">Español</a>
                            <a href="#">Français</a>
                            <a href="#">日本語</a>
                            <a href="#">한국어</a>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <span>The Coffee © {new Date().getFullYear()}</span>
                <span className="footer__bottom-jp">ザ・コーヒー</span>
            </div>
        </footer>
    )
}
