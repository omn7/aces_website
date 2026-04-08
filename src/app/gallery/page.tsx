'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';

const GALLERY_CATEGORIES = [
    {
        id: 'ai-workshop',
        label: 'AI Workshop',
        images: [
            { src: '/galary/ACES-Photo, videos/Ai-Workshop/ai1.jpg', alt: 'AI Workshop – Session 1' },
            { src: '/galary/ACES-Photo, videos/Ai-Workshop/ai2.jpg', alt: 'AI Workshop – Session 2' },
            { src: '/galary/ACES-Photo, videos/Ai-Workshop/ai3.jpg', alt: 'AI Workshop – Session 3' },
        ],
    },
    {
        id: 'marathi-divas',
        label: 'Marathi Rajbhasha Divas',
        images: [
            { src: '/galary/ACES-Photo, videos/Marathi Divas/maratidivas1.jpg', alt: 'Marathi Divas – Photo 1' },
            { src: '/galary/ACES-Photo, videos/Marathi Divas/maratidivas2.jpg', alt: 'Marathi Divas – Photo 2' },
            { src: '/galary/ACES-Photo, videos/Marathi Divas/maratidivas3.jpg', alt: 'Marathi Divas – Photo 3' },
            { src: '/galary/ACES-Photo, videos/Marathi Divas/maratidivas4.jpg', alt: 'Marathi Divas – Photo 4' },
            { src: '/galary/ACES-Photo, videos/Marathi Divas/maratidivas5.jpg', alt: 'Marathi Divas – Photo 5' },
        ],
    },
    {
        id: 'innovation-workshop',
        label: 'Workshop of Innovation & Creativity',
        images: [
            { src: '/galary/ACES-Photo, videos/Workshop of innovation, creativity/Untitled design.jpg', alt: 'Innovation Workshop – Banner' },
            { src: '/galary/ACES-Photo, videos/Workshop of innovation, creativity/IMG-20260407-WA0033.jpg', alt: 'Innovation Workshop – Photo 1' },
            { src: '/galary/ACES-Photo, videos/Workshop of innovation, creativity/IMG-20260407-WA0037.jpg', alt: 'Innovation Workshop – Photo 2' },
            { src: '/galary/ACES-Photo, videos/Workshop of innovation, creativity/IMG-20260407-WA0049.jpg', alt: 'Innovation Workshop – Photo 3' },
            { src: '/galary/ACES-Photo, videos/Workshop of innovation, creativity/IMG-20260407-WA0063.jpg', alt: 'Innovation Workshop – Photo 4' },
        ],
    },
];

const ALL_IMAGES = GALLERY_CATEGORIES.flatMap((cat) =>
    cat.images.map((img) => ({ ...img, category: cat.label }))
);

type LightboxImage = { src: string; alt: string; category: string };

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({ open: false, index: 0 });

    const filteredImages =
        activeCategory === 'all'
            ? ALL_IMAGES
            : ALL_IMAGES.filter((img) => img.category === activeCategory);

    const openLightbox = (index: number) => setLightbox({ open: true, index });
    const closeLightbox = () => setLightbox({ open: false, index: 0 });

    const prev = useCallback(() => {
        setLightbox((lb) => ({ open: true, index: (lb.index - 1 + filteredImages.length) % filteredImages.length }));
    }, [filteredImages.length]);

    const next = useCallback(() => {
        setLightbox((lb) => ({ open: true, index: (lb.index + 1) % filteredImages.length }));
    }, [filteredImages.length]);

    useEffect(() => {
        if (!lightbox.open) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightbox.open, prev, next]);

    const currentImage: LightboxImage | undefined = filteredImages[lightbox.index];

    return (
        <>
            {/* Hero */}
            {/* Hero Section */}
            <div className="bg-gray-50 pt-32 pb-16 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Gallery</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                        A visual journey through our events, workshops, and unforgettable moments.
                    </p>
                </div>
            </div>

            <SectionWrapper>
                {/* Filter Tabs */}
                <div className="gallery-filters">
                    <button
                        className={`gallery-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('all')}
                    >
                        All Photos
                        <span className="gallery-filter-count">{ALL_IMAGES.length}</span>
                    </button>
                    {GALLERY_CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            className={`gallery-filter-btn ${activeCategory === cat.label ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.label)}
                        >
                            {cat.label}
                            <span className="gallery-filter-count">{cat.images.length}</span>
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <div className="gallery-grid">
                    {filteredImages.map((image, idx) => (
                        <div
                            key={`${image.src}-${idx}`}
                            className="gallery-item"
                            onClick={() => openLightbox(idx)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
                            aria-label={`Open ${image.alt}`}
                        >
                            <div className="gallery-item-img-wrap">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="gallery-item-img"
                                />
                            </div>
                            <div className="gallery-item-overlay">
                                <div className="gallery-item-overlay-content">
                                    <span className="gallery-item-category-badge">{image.category}</span>
                                    <p className="gallery-item-alt">{image.alt}</p>
                                    <span className="gallery-item-zoom">🔍 View</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Lightbox */}
            {lightbox.open && currentImage && (
                <div className="lightbox-overlay" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image lightbox">
                    <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">✕</button>

                        <button className="lightbox-nav lightbox-prev" onClick={prev} aria-label="Previous image">‹</button>

                        <div className="lightbox-img-wrap">
                            <Image
                                src={currentImage.src}
                                alt={currentImage.alt}
                                fill
                                sizes="90vw"
                                className="lightbox-img"
                                priority
                            />
                        </div>

                        <button className="lightbox-nav lightbox-next" onClick={next} aria-label="Next image">›</button>

                        <div className="lightbox-caption">
                            <span className="lightbox-caption-category">{currentImage.category}</span>
                            <span className="lightbox-caption-text">{currentImage.alt}</span>
                            <span className="lightbox-caption-counter">{lightbox.index + 1} / {filteredImages.length}</span>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`


                /* Filter Tabs */
                .gallery-filters {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    justify-content: center;
                    margin-bottom: 2.5rem;
                }
                .gallery-filter-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    padding: 0.55rem 1.2rem;
                    border-radius: 999px;
                    border: 1.5px solid #e2e8f0;
                    background: #fff;
                    color: #475569;
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .gallery-filter-btn:hover {
                    border-color: #10b981;
                    color: #10b981;
                    background: #ecfdf5;
                    transform: translateY(-1px);
                }
                .gallery-filter-btn.active {
                    background: linear-gradient(135deg, #10b981, #059669);
                    border-color: transparent;
                    color: #fff;
                    box-shadow: 0 4px 14px rgba(16,185,129,0.4);
                }
                .gallery-filter-count {
                    background: rgba(0,0,0,0.12);
                    border-radius: 999px;
                    padding: 0.05rem 0.5rem;
                    font-size: 0.75rem;
                }
                .gallery-filter-btn.active .gallery-filter-count {
                    background: rgba(255,255,255,0.25);
                }

                /* Masonry Grid */
                .gallery-grid {
                    columns: 1;
                    column-gap: 1.25rem;
                }
                @media (min-width: 640px) { .gallery-grid { columns: 2; } }
                @media (min-width: 1024px) { .gallery-grid { columns: 3; } }

                .gallery-item {
                    break-inside: avoid;
                    margin-bottom: 1.25rem;
                    position: relative;
                    border-radius: 1rem;
                    overflow: hidden;
                    cursor: pointer;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    outline: none;
                }
                .gallery-item:hover,
                .gallery-item:focus-visible {
                    transform: translateY(-4px) scale(1.01);
                    box-shadow: 0 12px 36px rgba(0,0,0,0.18);
                }
                .gallery-item:focus-visible {
                    box-shadow: 0 0 0 3px #10b981, 0 12px 36px rgba(0,0,0,0.18);
                }

                .gallery-item-img-wrap {
                    position: relative;
                    width: 100%;
                    padding-top: 66.66%;
                    background: #e2e8f0;
                }
                .gallery-item-img {
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .gallery-item:hover .gallery-item-img {
                    transform: scale(1.04);
                }

                .gallery-item-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.2) 50%, transparent 100%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    display: flex;
                    align-items: flex-end;
                    padding: 1.25rem;
                }
                .gallery-item:hover .gallery-item-overlay,
                .gallery-item:focus-visible .gallery-item-overlay { opacity: 1; }

                .gallery-item-overlay-content {
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                    transform: translateY(8px);
                    transition: transform 0.3s ease;
                }
                .gallery-item:hover .gallery-item-overlay-content,
                .gallery-item:focus-visible .gallery-item-overlay-content { transform: translateY(0); }

                .gallery-item-category-badge {
                    display: inline-block;
                    background: rgba(16,185,129,0.8);
                    color: #fff;
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    padding: 0.15rem 0.6rem;
                    border-radius: 999px;
                    width: fit-content;
                }
                .gallery-item-alt {
                    color: #e2e8f0;
                    font-size: 0.875rem;
                    font-weight: 500;
                    margin: 0;
                    line-height: 1.4;
                }
                .gallery-item-zoom {
                    color: #6ee7b7;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                /* Lightbox */
                .lightbox-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.92);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    animation: fadeIn 0.2s ease;
                }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

                .lightbox-container {
                    position: relative;
                    width: 100%;
                    max-width: 1000px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }

                .lightbox-img-wrap {
                    position: relative;
                    width: 100%;
                    height: 70vh;
                    border-radius: 1rem;
                    overflow: hidden;
                    box-shadow: 0 25px 60px rgba(0,0,0,0.6);
                }
                .lightbox-img { object-fit: contain; }

                .lightbox-close {
                    position: absolute;
                    top: -3rem;
                    right: 0;
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.15);
                    border: 1.5px solid rgba(255,255,255,0.25);
                    color: #fff;
                    font-size: 1rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s;
                    z-index: 1;
                }
                .lightbox-close:hover { background: rgba(239,68,68,0.7); }

                .lightbox-nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-60%);
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.12);
                    border: 1.5px solid rgba(255,255,255,0.2);
                    color: #fff;
                    font-size: 1.75rem;
                    line-height: 1;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s, transform 0.2s;
                    z-index: 1;
                }
                .lightbox-nav:hover { background: rgba(16,185,129,0.6); transform: translateY(-60%) scale(1.08); }
                .lightbox-prev { left: -4rem; }
                .lightbox-next { right: -4rem; }
                @media (max-width: 768px) {
                    .lightbox-prev { left: 0.25rem; }
                    .lightbox-next { right: 0.25rem; }
                    .lightbox-img-wrap { height: 55vw; min-height: 240px; }
                }

                .lightbox-caption {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .lightbox-caption-category {
                    background: rgba(16,185,129,0.7);
                    color: #fff;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 0.2rem 0.7rem;
                    border-radius: 999px;
                }
                .lightbox-caption-text {
                    color: #e2e8f0;
                    font-size: 0.9rem;
                }
                .lightbox-caption-counter {
                    color: #64748b;
                    font-size: 0.8rem;
                    margin-left: auto;
                }
            `}</style>
        </>
    );
}
