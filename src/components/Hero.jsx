'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ 
        backgroundImage: 'url(/hero_bg.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        opacity: 0.9 
      }}></div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      {/* Added glass-dark for perfect contrast against light background */}
      <div className="container relative z-10 hero-content animate-fade-in glass-dark">
        <h1 className="hero-title">
          Elevate Your Space with <span style={{color: 'var(--accent-secondary)'}}>Premium</span> Marble & Tiles
        </h1>
        <p className="hero-subtitle">
          Discover the finest collection of Orientbell tiles, exquisite marble, and durable granite at Tripurari Tiles and Marble, Bhurkunda.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="#collections" className="btn btn-primary">
            Explore Collections
          </Link>
          {/* Updated CTA to link to WhatsApp */}
          <Link 
            href={`https://wa.me/919955952208?text=${encodeURIComponent("Hi, I want to learn more about your tiles and marble.")}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
