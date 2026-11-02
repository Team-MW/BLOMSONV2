import { useState, useEffect, useRef } from 'react'
import './PhotoGallery.css'

const GALLERY_IMAGES = [
  {
    src: '/photos/DSC_3096.jpg',
    title: 'L\'Art du Brunch',
    subtitle: 'Assiettes gourmandes & créatives',
    tag: 'Signature'
  },
  {
    src: '/photos/DSC_3101.jpg',
    title: 'Specialty Coffee',
    subtitle: 'Grains d\'exception & extraction précise',
    tag: 'Café de spécialité'
  },
  {
    src: '/photos/DSC_3112.jpg',
    title: 'Douceurs Sucrées',
    subtitle: 'Pâtisseries artisanales du jour',
    tag: 'Fait maison'
  },
  {
    src: '/photos/DSC_3116.jpg',
    title: 'Good Vibes Only',
    subtitle: 'Partager des moments précieux',
    tag: 'Ambiance'
  },
  {
    src: '/photos/DSC_3127.jpg',
    title: 'Barista Passion',
    subtitle: 'Chaque tasse est une création',
    tag: 'Latte Art'
  },
  {
    src: '/photos/DSC_3150.jpg',
    title: 'Le Lieu de Vie',
    subtitle: 'Design chaleureux et cosy',
    tag: 'Concept Store'
  },
  {
    src: '/photos/DSC_3153.jpg',
    title: 'Fraîcheur & Équilibre',
    subtitle: 'Ingrédients de saison sélectionnés',
    tag: 'Local & Sain'
  },
  {
    src: '/photos/DSC_3164.jpg',
    title: 'Pancakes Moelleux',
    subtitle: 'La recette secrète Blossom',
    tag: 'Gourmandise'
  },
  {
    src: '/photos/DSC_3177.jpg',
    title: 'L\'Instant Café',
    subtitle: 'Un moment suspendu à Toulouse',
    tag: 'Détente'
  },
  {
    src: '/photos/DSC_3189.jpg',
    title: 'Terrasse Ensoleillée',
    subtitle: 'Profiter de la lumière du jour',
    tag: 'Plein air'
  },
  {
    src: '/photos/DSC_3761.jpg',
    title: 'Brunch Salé Festif',
    subtitle: 'Toasts savoureux & garnitures généreuses',
    tag: 'Brunch'
  },
  {
    src: '/photos/DSC_3764.jpg',
    title: 'Palette de Saveurs',
    subtitle: 'Du sucré au salé, tout en finesse',
    tag: 'Créations'
  },
  {
    src: '/photos/DSC_3818.jpg',
    title: 'L\'Expérience Blossom',
    subtitle: 'Votre nouveau QG toulousain',
    tag: 'Communauté'
  }
]

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const trackRef = useRef(null)
  const isHoveredRef = useRef(false)

  // Double array for seamless infinite scroll
  const duplicatedImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES]

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  const scrollByAmount = (direction) => {
    if (!trackRef.current) return
    const cardWidth = 360
    trackRef.current.scrollBy({
      left: direction * cardWidth * 1.5,
      behavior: 'smooth'
    })
  }

  return (
    <section id="galerie" className="photo-gallery-section">
      <div className="photo-gallery__header">
        <div className="photo-gallery__header-left">
          <span className="section-eyebrow">Moments Capturés</span>
          <h2 className="section-title">L'Expérience en Images</h2>
          <p className="photo-gallery__subtitle">
            Plongez dans l'univers vibrant de Blossom : nos créations brunch, notre café de spécialité et nos instants de partage au cœur de Toulouse.
          </p>
        </div>

        <div className="photo-gallery__controls">
          <button
            className={`gallery-ctrl-btn ${!isPlaying ? 'gallery-ctrl-btn--paused' : ''}`}
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Mettre en pause' : 'Reprendre le défilement'}
            title={isPlaying ? 'Pause' : 'Lecture'}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" rx="1.5" />
                <rect x="14" y="5" width="4" height="14" rx="1.5" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6,4 20,12 6,20" />
              </svg>
            )}
          </button>

          <button
            className="gallery-ctrl-btn"
            onClick={() => scrollByAmount(-1)}
            aria-label="Image précédente"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="gallery-ctrl-btn"
            onClick={() => scrollByAmount(1)}
            aria-label="Image suivante"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Infinite scrolling carousel track */}
      <div
        className="photo-gallery__carousel-wrapper"
        onMouseEnter={() => { isHoveredRef.current = true }}
        onMouseLeave={() => { isHoveredRef.current = false }}
      >
        <div
          ref={trackRef}
          className={`photo-gallery__track ${isPlaying ? 'photo-gallery__track--scrolling' : ''}`}
        >
          {duplicatedImages.map((img, idx) => {
            const originalIndex = idx % GALLERY_IMAGES.length
            return (
              <div
                key={`${img.src}-${idx}`}
                className="photo-card"
                onClick={() => setLightboxIndex(originalIndex)}
              >
                <div className="photo-card__media">
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    decoding="async"
                    className="photo-card__img"
                  />
                  <div className="photo-card__gradient" />
                  
                  <span className="photo-card__tag">{img.tag}</span>

                  <div className="photo-card__overlay">
                    <span className="photo-card__counter">0{originalIndex + 1} / {GALLERY_IMAGES.length}</span>
                    <h3 className="photo-card__title">{img.title}</h3>
                    <p className="photo-card__subtitle">{img.subtitle}</p>
                    <div className="photo-card__zoom-cta">
                      <span>Agrandir</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="photo-gallery__footer">
        <span className="photo-gallery__badge">
          <span className="photo-gallery__dot"></span>
          {GALLERY_IMAGES.length} photos haute définition
        </span>
        <span className="photo-gallery__hint">
          Glissez pour explorer • Cliquez pour agrandir
        </span>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="gallery-lightbox"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="gallery-lightbox__inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-lightbox__close"
              onClick={() => setLightboxIndex(null)}
              aria-label="Fermer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              onClick={() => setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)}
              aria-label="Photo précédente"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="gallery-lightbox__content">
              <img
                src={GALLERY_IMAGES[lightboxIndex].src}
                alt={GALLERY_IMAGES[lightboxIndex].title}
                className="gallery-lightbox__img"
              />
              <div className="gallery-lightbox__caption">
                <div className="gallery-lightbox__meta">
                  <span className="gallery-lightbox__tag">{GALLERY_IMAGES[lightboxIndex].tag}</span>
                  <span className="gallery-lightbox__num">{lightboxIndex + 1} sur {GALLERY_IMAGES.length}</span>
                </div>
                <h3>{GALLERY_IMAGES[lightboxIndex].title}</h3>
                <p>{GALLERY_IMAGES[lightboxIndex].subtitle}</p>
              </div>
            </div>

            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={() => setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length)}
              aria-label="Photo suivante"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
