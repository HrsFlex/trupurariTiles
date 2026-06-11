'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <motion.div 
        className="hero-bg" 
        style={{ 
          backgroundImage: 'url(/hero_bg.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          opacity: 0.9 
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />
      
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <motion.div 
        className="container relative z-10 hero-content liquid-glass-dark"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
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
      </motion.div>
    </section>
  );
}
