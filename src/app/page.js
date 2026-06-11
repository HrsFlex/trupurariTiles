'use client';

import Hero from '@/components/Hero';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const collections = [
    {
      id: 1,
      title: "Orientbell Floor Tiles",
      desc: "Durable, easy to clean, and stylish floor tiles that elevate any room's aesthetic.",
      bg: "url(/floor_tiles.png)",
    },
    {
      id: 2,
      title: "Premium Marble",
      desc: "Luxurious natural marble with exquisite veins. Perfect for flooring and high-end countertops.",
      bg: "url(/premium_marble.png)",
    },
    {
      id: 3,
      title: "Kitchen & Wall Tiles",
      desc: "Water-resistant and beautiful designs to give your kitchen and bathrooms a modern look.",
      bg: "url(/wall_tiles.png)",
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main>
      <Hero />
      
      {/* SOCIAL PROOF SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '3rem' }}>
        <div className="container">
          <motion.div 
            className="grid-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                text: "Amazing place best tiles full of Verity, large stock and best stylish 😍😍",
                author: "Yash Raj (Local Guide)"
              },
              {
                text: "Very good collection of tile and granite",
                author: "Niyaj Alli"
              },
              {
                text: "Best shop for tiles and marble in Bhurkunda.",
                author: "Shahjahan Khan"
              }
            ].map((review, index) => (
              <motion.div key={index} variants={fadeInUp} className="review-card liquid-glass">
                <div className="stars" style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="review-text" style={{ color: 'var(--text-primary)' }}>"{review.text}"</p>
                <h5 style={{ fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>- {review.author}</h5>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            style={{ textAlign: 'center', marginTop: '2rem' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Rated 4.7/5 on Google</span>
          </motion.div>
        </div>
      </section>

      {/* COLLECTIONS SECTION */}
      <section id="collections" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Collections
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Browse through our vast inventory of premium materials designed to bring your vision to life.
          </motion.p>
          
          <motion.div 
            className="grid-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {collections.map(item => (
              <motion.div key={item.id} variants={fadeInUp} className="card liquid-glass">
                <div className="card-img-wrapper">
                  <div className="card-img" style={{ backgroundImage: item.bg, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                </div>
                <div className="card-body">
                  <h3 className="card-title" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link 
                      href={`https://wa.me/919955952208?text=${encodeURIComponent(`Hi, I'd like an estimate for ${item.title}.`)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline" 
                      style={{ width: '100%', marginTop: 'auto' }}
                    >
                      Get Estimate
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose Us?
            </motion.h2>
            <motion.p 
              style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.8' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              At <strong style={{ color: 'var(--text-primary)' }}>Tripurari Tiles and Marble</strong>, we pride ourselves on delivering the finest quality materials to elevate your home or business. Located in Bhurkunda, Jharkhand, we are an authorized dealer of Orientbell Tiles and offer a massive inventory of premium marble and granite.
            </motion.p>
            
            <motion.div 
              className="grid-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeInUp} className="liquid-glass" style={{ padding: '3rem', borderRadius: '4px' }}>
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Huge Variety</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Hundreds of exclusive designs to choose from, matching any interior aesthetic.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="liquid-glass" style={{ padding: '3rem', borderRadius: '4px' }}>
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Top Quality</h4>
                <p style={{ color: 'var(--text-secondary)' }}>We source only the best raw materials ensuring long-lasting durability and shine.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="liquid-glass" style={{ padding: '3rem', borderRadius: '4px' }}>
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Expert Advice</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Our highly knowledgeable staff helps you find exactly what you need for your project.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          <motion.div 
            style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Visit Our Store</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              Ready to transform your space? Visit our showroom in Bhurkunda or chat with us on WhatsApp for a free quote.
            </p>
            
            <div className="liquid-glass" style={{ padding: '3rem', borderRadius: '4px', marginBottom: '3rem', textAlign: 'left' }}>
              <div style={{ marginBottom: '2rem' }}>
                <strong style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px' }}>Address</strong>
                <p style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}>Matkama Marg, chowk, Ladi Rd,<br/>Bhurkunda, Jharkhand 829105</p>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px' }}>Opening Hours</strong>
                <p style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}>Mon - Sun: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="https://wa.me/919955952208" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ width: '100%', maxWidth: '300px' }}
              >
                Chat with Us on WhatsApp
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer style={{ backgroundColor: '#1C1917', padding: '4rem 0', textAlign: 'center', color: '#FAFAF9' }}>
        <div className="container">
          <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.8rem' }}>Tripurari Tiles & Marble</h3>
          <p style={{ color: '#D6D3D1', marginBottom: '2rem', fontWeight: 300 }}>Bhurkunda, Jharkhand 829105</p>
          <p style={{ color: '#A8A29E', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
