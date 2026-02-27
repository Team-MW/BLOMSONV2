import './Locations.css'

const STORES = [
    { id: 1, city: 'Curitiba', country: 'Brazil', address: 'Al. Prudente de Moraes', type: 'Flagship', hours: '7:00 – 20:00' },
    { id: 2, city: 'São Paulo', country: 'Brazil', address: 'Rua Oscar Freire, 562', type: 'Store', hours: '8:00 – 21:00' },
    { id: 3, city: 'Rio de Janeiro', country: 'Brazil', address: 'Av. Atlântica, 1100', type: 'Store', hours: '7:30 – 20:00' },
    { id: 4, city: 'Tokyo', country: 'Japan', address: 'Shibuya-ku', type: 'International', hours: '8:00 – 22:00' },
    { id: 5, city: 'Lisbon', country: 'Portugal', address: 'Rua do Carmo, 45', type: 'International', hours: '8:00 – 20:00' },
    { id: 6, city: 'Paris', country: 'France', address: 'Rue de Rivoli, 34', type: 'International', hours: '7:00 – 21:00' },
    { id: 7, city: 'Miami', country: 'USA', address: 'Brickell Ave, 800', type: 'International', hours: '7:00 – 20:00' },
    { id: 8, city: 'Amsterdam', country: 'Netherlands', address: 'Herengracht, 90', type: 'International', hours: '8:00 – 19:00' },
]

const COUNTRIES = ['All', 'Brazil', 'Japan', 'Portugal', 'France', 'USA', 'Netherlands']

import { useState } from 'react'

export default function Locations() {
    const [filter, setFilter] = useState('All')
    const filtered = filter === 'All' ? STORES : STORES.filter(s => s.country === filter)

    return (
        <main className="page locations">
            <div className="locations__header">
                <span className="section-eyebrow">Nossas Lojas</span>
                <h1 className="locations__title">Our Stores</h1>
                <p className="locations__sub">Find a The Coffee near you.</p>
            </div>

            <div className="locations__filters">
                {COUNTRIES.map(c => (
                    <button
                        key={c}
                        className={`locations__filter ${filter === c ? 'locations__filter--active' : ''}`}
                        onClick={() => setFilter(c)}
                    >
                        {c}
                    </button>
                ))}
            </div>

            <div className="locations__grid">
                {filtered.map(store => (
                    <div key={store.id} className="store-card">
                        <div className="store-card__img">
                            <img src="/store.png" alt={store.city} />
                            <span className="store-card__type">{store.type}</span>
                        </div>
                        <div className="store-card__body">
                            <div className="store-card__location">
                                <h2 className="store-card__city">{store.city}</h2>
                                <span className="store-card__country">{store.country}</span>
                            </div>
                            <p className="store-card__address">{store.address}</p>
                            <div className="store-card__footer">
                                <span className="store-card__hours">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    {store.hours}
                                </span>
                                <a href="#" className="store-card__cta">View Store →</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
