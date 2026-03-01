import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__brand">
                    <div className="footer__logo">
                        <span className="footer__logo-en">BLOSSOM</span>
                        <span className="footer__logo-jp">COFFEE</span>
                    </div>
                    <p className="footer__tagline">
                        On se voit quand ?<br />
                        11 Rue des Trois Renards,<br />
                        31000 Toulouse<br />
                        06 50 21 64 50
                    </p>
                    <div className="footer__socials">
                        <a href="#" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        <a href="#" aria-label="TikTok">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.22-2.32.72-4.68 2.5-6.19 1.4-1.2 3.21-1.68 5.03-1.46.12.01.21.05.33.05v4.11c-.34-.02-.68-.02-1.02-.02-1.29-.07-2.58.58-3.32 1.63-.66.95-.91 2.19-.54 3.3.4 1.25 1.48 2.22 2.78 2.45 1.54.26 3.12-.39 4.02-1.68.75-1.06 1.1-2.38 1.09-3.68-.05-6.52-.02-13.04-.02-19.56z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer__links">
                    <div className="footer__col">
                        <h3 className="footer__col-title">Horaires</h3>
                        <nav className="footer__nav" style={{ color: 'var(--mid-gray)', fontSize: '13px', lineHeight: '2' }}>
                            <span>Lundi 11:00–18:45</span>
                            <span>Mardi 11:00–18:45</span>
                            <span>Mercredi 11:00–18:45</span>
                            <span>Jeudi 11:00–18:45</span>
                            <span>Vendredi 11:00–18:45</span>
                            <span>Samedi 11:00–18:45</span>
                            <span>Dimanche 11:00–18:45</span>
                        </nav>
                    </div>
                    <div className="footer__col">
                        <h3 className="footer__col-title">Membres Uniquement</h3>
                        <nav className="footer__nav" style={{ color: 'var(--mid-gray)', fontSize: '13px', lineHeight: '1.5' }}>
                            <span style={{ color: 'var(--dark-gray)' }}>Blossom Circle Club</span>
                            <span>Le cercle le plus croustillant de Toulouse. Événements privés, dégustations en avant-première & good vibes.</span>
                            <br />
                            <span style={{ fontStyle: 'italic' }}>Actuellement complet</span>
                        </nav>
                    </div>
                    <div className="footer__col">
                        <h3 className="footer__col-title">Suivez nos aventures</h3>
                        <nav className="footer__nav" style={{ color: 'var(--mid-gray)', fontSize: '13px', lineHeight: '1.5' }}>
                            <span>Les coulisses, les events et du latte art.</span>
                            <a href="https://www.instagram.com/blossom_coffee_brunch/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>@blossom.coffee</a>
                            <br />
                            <span style={{ color: 'var(--dark-gray)' }}>Centre Ville</span>
                            <span>Juste à côté du Capitole</span>
                        </nav>
                    </div>
                    <div className="footer__col">
                        <h3 className="footer__col-title">Informations</h3>
                        <nav className="footer__nav" style={{ color: 'var(--mid-gray)', fontSize: '13px', lineHeight: '1.5' }}>
                            <Link to="/#faq" style={{ textDecoration: 'none' }}>Vos questions</Link>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>Contactez-nous</Link>
                            <Link to="/mentions-legales" style={{ textDecoration: 'none' }}>Mentions Légales</Link>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <span>© 2026 Blossom Coffee - Développé par Microdidact</span>
                <span className="footer__bottom-jp">Good Vibes Only</span>
            </div>
        </footer>
    )
}
