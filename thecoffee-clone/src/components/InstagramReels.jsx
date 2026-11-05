import { useEffect, useRef, useState } from 'react'
import './InstagramReels.css'

const INSTAGRAM_URL = 'https://www.instagram.com/blossom_coffee_brunch/'

const REELS = [
    { id: 'DezT5RAIDNO', src: '/reels/DezT5RAIDNO.mp4' },
    { id: 'DfPyyFNSczB', src: '/reels/DfPyyFNSczB.mp4' },
    { id: 'DdttMWShkt9', src: '/reels/DdttMWShkt9.mp4' },
]

function Reel({ reel, unmuted, onToggleSound }) {
    const videoRef = useRef(null)

    // Lecture automatique uniquement quand la vidéo est visible à l'écran
    useEffect(() => {
        const video = videoRef.current
        if (!video) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) video.play().catch(() => {})
                else video.pause()
            },
            { threshold: 0.4 }
        )
        observer.observe(video)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const video = videoRef.current
        if (!video) return
        video.muted = !unmuted
        if (unmuted) video.play().catch(() => {})
    }, [unmuted])

    return (
        <div className="reel">
            <video
                ref={videoRef}
                className="reel__video"
                src={reel.src}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
            />
            <button
                type="button"
                className={`reel__sound ${unmuted ? 'reel__sound--on' : ''}`}
                onClick={onToggleSound}
                aria-label={unmuted ? 'Couper le son' : 'Activer le son'}
            >
                {unmuted ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 5 6 9H2v6h4l5 4V5z" />
                        <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 5 6 9H2v6h4l5 4V5z" />
                        <path d="m23 9-6 6M17 9l6 6" />
                    </svg>
                )}
                <span>{unmuted ? 'Son activé' : 'Activer le son'}</span>
            </button>
            <a
                href={`https://www.instagram.com/reel/${reel.id}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="reel__link"
                aria-label="Voir ce reel sur Instagram"
            >
                ↗
            </a>
        </div>
    )
}

export default function InstagramReels() {
    // Un seul reel avec le son à la fois
    const [soundId, setSoundId] = useState(null)

    return (
        <section id="instagram" className="reels-section">
            <div className="reels-section__header">
                <span className="section-eyebrow">Sur Instagram</span>
                <h2 className="section-title">La vie chez Blossom</h2>
                <p className="section-body">Les coulisses, nos créations et les good vibes du café, en vidéo.</p>
            </div>

            <div className="reels-grid">
                {REELS.map(reel => (
                    <Reel
                        key={reel.id}
                        reel={reel}
                        unmuted={soundId === reel.id}
                        onToggleSound={() => setSoundId(id => (id === reel.id ? null : reel.id))}
                    />
                ))}
            </div>

            <div className="reels-section__cta">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    Suivez-nous sur Instagram
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
            </div>
        </section>
    )
}
