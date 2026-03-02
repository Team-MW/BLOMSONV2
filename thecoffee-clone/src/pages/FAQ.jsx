import React, { useState, useEffect } from 'react'
import './FAQ.css'

const faqsData = [
    {
        category: "Brunch & Concept",
        questions: [
            {
                q: "Proposez-vous des options végétariennes ou vegan ?",
                a: "Absolument ! Notre carte est pensée pour satisfaire tous les régimes. Nous proposons de nombreuses options végétariennes et vegans, tout en gardant une gourmandise maximale."
            },
            {
                q: "Faut-il réserver pour le brunch ?",
                a: "Nous fonctionnons principalement sans réservation afin de conserver l'esprit coffee shop libre et chaleureux. Passez nous voir directement !"
            },
            {
                q: "Vos produits sont-ils faits maison ?",
                a: "Oui, à 100% ! Toute notre cuisine et nos pâtisseries sont réalisées sur place, chaque jour, par notre équipe de passionnés."
            },
            {
                q: "Faites-vous du click and collect ou de la livraison ?",
                a: "Pour le moment, nous privilégions l'expérience sur place pour garantir la qualité et la présentation de nos brunchs. Vous pouvez toutefois emporter nos pâtisseries et notre café."
            }
        ]
    },
    {
        category: "Café de Spécialité",
        questions: [
            {
                q: "Qu'est-ce que le café de spécialité ?",
                a: "Le café de spécialité est un café haut de gamme, sourcé éthiquement et rattaché à un terroir précis. Il est noté plus de 80/100 par des dégustateurs professionnels (Q-Graders) et torréfié artisanalement pour révéler des arômes uniques."
            },
            {
                q: "Proposez-vous des alternatives au lait de vache ?",
                a: "Oui, nous proposons plusieurs laits végétaux (avoine, amande, soja) pour accompagner vos lattes, cappuccinos ou flat whites."
            },
            {
                q: "Puis-je acheter votre café en grains ?",
                a: "Nous mettons en vente les paquets de café de spécialité que nous utilisons au quotidien. N'hésitez pas à demander conseil à nos baristas pour choisir celui qui correspond à votre méthode d'extraction (espresso, filtre...)."
            }
        ]
    },
    {
        category: "Lieu & Informations Pratiques",
        questions: [
            {
                q: "Quelles sont vos horaires d'ouverture ?",
                a: "Nous sommes ouverts 7 jours sur 7. Nos portes ouvrent à 11h00 et nous fermons à 18h45."
            },
            {
                q: "Acceptez-vous les animaux (Dog Friendly) ?",
                a: "Nos amis à quatre pattes sont les bienvenus avec grand plaisir ! Nous avons toujours une petite attention (et des caresses) pour eux."
            },
            {
                q: "Est-ce un bon endroit pour travailler avec son ordinateur ?",
                a: "Nous aimons accueillir tout le monde, mais afin de préserver l'ambiance et permettre à tous de profiter du brunch, les ordinateurs portables ne sont pas autorisés les week-ends et en période de forte affluence."
            },
            {
                q: "Acceptez-vous les tickets restaurant ?",
                a: "Oui, nous acceptons les cartes tickets restaurant, ainsi que les espèces et les cartes bancaires classiques."
            }
        ]
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    useEffect(() => {
        document.title = "FAQ | Blossom Coffee";
        document.querySelector('meta[name="description"]')?.setAttribute("content", "Découvrez notre foire aux questions. Toutes les réponses sur notre café de spécialité, notre brunch, et plus encore.");
    }, []);

    return (
        <>
            <main className="faq-page">
                <section className="faq-hero">
                    <div className="faq-hero-container">
                        <h1 className="faq-hero-title">Foire Aux <span className="highlight">Questions</span></h1>
                        <p className="faq-hero-subtitle">
                            Tout ce que vous avez toujours voulu savoir sur Blossom Coffee.
                        </p>
                    </div>
                </section>

                <section className="faq-content">
                    <div className="faq-wrapper">
                        {faqsData.map((section, sIndex) => (
                            <div key={sIndex} className="faq-category">
                                <h2 className="faq-category-name">{section.category}</h2>
                                <div className="faq-list">
                                    {section.questions.map((item, qIndex) => {
                                        const id = `${sIndex}-${qIndex}`
                                        const isOpen = openIndex === id

                                        return (
                                            <div
                                                key={qIndex}
                                                className={`faq-item ${isOpen ? 'active' : ''}`}
                                            >
                                                <button
                                                    className="faq-question-btn"
                                                    onClick={() => toggleAccordion(id)}
                                                    aria-expanded={isOpen}
                                                >
                                                    <span className="faq-question-text">{item.q}</span>
                                                    <span className="faq-icon">
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            {isOpen ? (
                                                                <path d="M5 12h14" />
                                                            ) : (
                                                                <path d="M12 5v14M5 12h14" />
                                                            )}
                                                        </svg>
                                                    </span>
                                                </button>
                                                <div
                                                    className="faq-answer-container"
                                                    style={{
                                                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                                                        opacity: isOpen ? 1 : 0
                                                    }}
                                                >
                                                    <div className="faq-answer-inner">
                                                        <p>{item.a}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="faq-cta-section">
                    <h2>Vous avez encore des doutes ?</h2>
                    <p>N'hésitez pas à passer nous voir directement ou à découvrir notre univers.</p>
                    <a href="/#locations" className="btn-black" style={{ marginTop: '20px', display: 'inline-flex' }}>
                        Où nous trouver ?
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginLeft: '10px', width: '20px' }}>
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </section>
            </main>
        </>
    )
}
