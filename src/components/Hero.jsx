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
      
      {/* Added liquid-glass-dark for perfect contrast and luxury feel */}
      <div className="container relative z-10 hero-content animate-fluid-up liquid-glass-dark">
        <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)' }}>
          Elevate Your Space with <span className="text-gold">Premium</span> Marble & Tiles
        </h1>
        <p className="hero-subtitle">
          Discover the finest collection of Orientbell tiles, exquisite marble, and durable granite at Tripurari Tiles and Marble, Bhurkunda.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="#collections" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
            Explore Collections
          </Link>
          {/* Updated CTA to link to WhatsApp */}
          <Link 
            href={`https://wa.me/919955952208?text=${encodeURIComponent("Hi, I want to learn more about your premium tiles and marble.")}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
            style={{ padding: '1.2rem 3rem', borderColor: '#CA8A04', color: '#CA8A04' }}
          >
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
