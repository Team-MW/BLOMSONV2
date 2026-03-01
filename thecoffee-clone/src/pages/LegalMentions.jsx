import { useEffect } from 'react'
import './LegalMentions.css'

export default function LegalMentions() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="legal-mentions">
            <div className="legal-mentions__header fade-up">
                <span className="section-eyebrow">Informations</span>
                <h1 className="section-title">Mentions Légales</h1>
            </div>

            <div className="legal-mentions__content fade-up fade-up--delay">
                <section className="legal-section">
                    <h2>1. Éditeur du site</h2>
                    <p>
                        <strong>Blossom Coffee</strong><br />
                        11 Rue des Trois Renards<br />
                        31000 Toulouse<br />
                        France<br />
                        Téléphone : 06 50 21 64 50<br />
                        Email : contact@blossom-coffee-brunch.com
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. Hébergement</h2>
                    <p>
                        Ce site est hébergé par : [Nom de l'hébergeur] <br />
                        [Adresse de l'hébergeur]<br />
                        [Contact de l'hébergeur]
                    </p>
                </section>

                <section className="legal-section">
                    <h2>3. Conception & Développement</h2>
                    <p>
                        <strong>Microdidact</strong><br />
                        Création de site web et solutions digitales.<br />
                    </p>
                </section>

                <section className="legal-section">
                    <h2>4. Propriété Intellectuelle</h2>
                    <p>
                        Le contenu du site (textes, images, graphismes, logo, icônes, etc.)
                        est la propriété exclusive de Blossom Coffee. Toute reproduction,
                        distribution, modification, adaptation, retransmission ou publication,
                        même partielle, de ces différents éléments est strictement interdite.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>5. Données Personnelles</h2>
                    <p>
                        Conformément à la réglementation en vigueur (RGPD), vous disposez d'un
                        droit d'accès, de rectification et de suppression des données vous
                        concernant. Blossom Coffee s'engage à ce que la collecte et le
                        traitement de vos données, effectués à partir du site, soient conformes
                        au règlement général sur la protection des données (RGPD) et à la
                        loi Informatique et Libertés.
                    </p>
                </section>
            </div>
        </main>
    )
}
