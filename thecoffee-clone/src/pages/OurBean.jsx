import { useEffect, useRef, useState } from 'react'
import './OurBean.css'

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

const BEANS = [
    {
        id: 'white',
        name: 'White Bag',
        jp: 'ホワイトバッグ',
        origin: 'Cerrado Mineiro, Brazil',
        roast: 'Light Roast',
        notes: ['Caramel', 'Milk Chocolate', 'Hazelnut'],
        desc: 'Our signature blend. Carefully selected Arabica beans from the highlands of Cerrado Mineiro, Brazil. Light roasted to preserve the natural sweetness and complexity of the bean.',
    },
    {
        id: 'black',
        name: 'Black Bag',
        jp: 'ブラックバッグ',
        origin: 'Ethiopia & Colombia',
        roast: 'Medium Roast',
        notes: ['Jasmine', 'Bergamot', 'Red Fruits'],
        desc: 'A sophisticated single-origin blend combining Ethiopian and Colombian beans. Medium roasted to highlight floral and fruity notes with a bright, clean finish.',
    },
    {
        id: 'gold',
        name: 'Gold Bag',
        jp: 'ゴールドバッグ',
        origin: 'Specialty Selection',
        roast: 'Filter Roast',
        notes: ['Tropical Fruit', 'Brown Sugar', 'Dark Chocolate'],
        desc: 'Our premium specialty selection. Exclusively sourced and filter roasted to achieve a complex yet balanced cup. Reserved for the true coffee connoisseur.',
    },
]

export default function OurBean() {
    const [activeBean, setActiveBean] = useState(0)
    const [headerRef, headerInView] = useInView(0.1)
    const [contentRef, contentInView] = useInView(0.1)

    return (
        <main className="page ourbean">

            {/* Header */}
            <section className="ourbean__header" ref={headerRef}>
                <div className={`ourbean__header-content ${headerInView ? 'fade-in' : ''}`}>
                    <span className="section-eyebrow">Nossos grãos</span>
                    <h1 className="ourbean__title">Our Beans</h1>
                    <p className="ourbean__subtitle">
                        Selected and roasted with perfection in Curitiba, Brazil.
                    </p>
                </div>
                <div className="ourbean__hero-img">
                    <img src="/beans.png" alt="Coffee beans" />
                </div>
            </section>

            {/* Bean selector */}
            <section className="ourbean__content" ref={contentRef}>
                <div className={`ourbean__tabs ${contentInView ? 'fade-in' : ''}`}>
                    {BEANS.map((bean, i) => (
                        <button
                            key={bean.id}
                            className={`ourbean__tab ${i === activeBean ? 'ourbean__tab--active' : ''}`}
                            onClick={() => setActiveBean(i)}
                        >
                            {bean.name}
                            <span>{bean.jp}</span>
                        </button>
                    ))}
                </div>

                <div className={`ourbean__detail ${contentInView ? 'fade-in-delay' : ''}`}>
                    {BEANS.map((bean, i) => (
                        <div
                            key={bean.id}
                            className={`ourbean__panel ${i === activeBean ? 'ourbean__panel--active' : ''}`}
                        >
                            <div className="ourbean__info">
                                <div className="ourbean__meta">
                                    <div className="ourbean__meta-item">
                                        <span className="ourbean__meta-label">Origin</span>
                                        <span className="ourbean__meta-value">{bean.origin}</span>
                                    </div>
                                    <div className="ourbean__meta-item">
                                        <span className="ourbean__meta-label">Roast</span>
                                        <span className="ourbean__meta-value">{bean.roast}</span>
                                    </div>
                                </div>

                                <h2 className="ourbean__panel-title">{bean.name}</h2>
                                <p className="ourbean__panel-desc">{bean.desc}</p>

                                <div className="ourbean__notes">
                                    <span className="ourbean__notes-label">Tasting Notes</span>
                                    <div className="ourbean__notes-list">
                                        {bean.notes.map(note => (
                                            <span key={note} className="ourbean__note">{note}</span>
                                        ))}
                                    </div>
                                </div>

                                <a href="#" className="btn-outline">Order Now</a>
                            </div>

                            <div className="ourbean__visual">
                                <div className="ourbean__img-frame">
                                    <img src="/beans.png" alt={bean.name} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Roasting process */}
            <section className="roasting">
                <div className="roasting__content">
                    <span className="section-eyebrow">Our process</span>
                    <h2 className="section-title">The Art of Roasting</h2>
                    <p className="section-body">
                        Our master roaster in Curitiba has spent years perfecting the ideal roast profile
                        for each bean. Through countless research sessions and taste tests, we've found
                        the perfect combination of time and temperature that brings out the best in every cup.
                    </p>
                </div>
                <div className="roasting__img">
                    <img src="/roasters.png" alt="Coffee roasting" />
                </div>
            </section>

        </main>
    )
}
