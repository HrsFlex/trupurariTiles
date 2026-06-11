import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

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

  return (
    <main>
      <Hero />
      
      {/* SOCIAL PROOF SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="grid-3">
            <div className="review-card glass animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="stars">★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                "Amazing place best tiles full of Verity, large stock and best stylish 😍😍"
              </p>
              <h5 style={{ fontWeight: '600', color: 'var(--text-primary)' }}>- Yash Raj (Local Guide)</h5>
            </div>
            <div className="review-card glass animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="stars">★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                "Very good collection of tile and granite"
              </p>
              <h5 style={{ fontWeight: '600', color: 'var(--text-primary)' }}>- Niyaj Alli</h5>
            </div>
            <div className="review-card glass animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="stars">★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                "Best shop for tiles and marble in Bhurkunda."
              </p>
              <h5 style={{ fontWeight: '600', color: 'var(--text-primary)' }}>- Shahjahan Khan</h5>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Rated 4.7/5 on Google</span>
          </div>
        </div>
      </section>

      {/* COLLECTIONS SECTION */}
      <section id="collections" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Our Collections</h2>
          <p className="section-subtitle">Browse through our vast inventory of premium materials designed to bring your vision to life.</p>
          <div className="grid-3">
            {collections.map(item => (
              <div key={item.id} className="card animate-fade-in" style={{ animationDelay: `${item.id * 0.2}s` }}>
                <div className="card-img-wrapper">
                  <div className="card-img" style={{ backgroundImage: item.bg, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                  <Link 
                    href={`https://wa.me/919955952208?text=${encodeURIComponent(`Hi, I'd like an estimate for ${item.title}.`)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline" 
                    style={{ width: '100%', marginTop: 'auto' }}
                  >
                    Get Estimate
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">Why Choose Us?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.8' }}>
              At <strong>Tripurari Tiles and Marble</strong>, we pride ourselves on delivering the finest quality materials to elevate your home or business. Located in Bhurkunda, Jharkhand, we are an authorized dealer of Orientbell Tiles and offer a massive inventory of premium marble and granite.
            </p>
            <div className="grid-3">
              <div className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Huge Variety</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Hundreds of exclusive designs to choose from, matching any interior aesthetic.</p>
              </div>
              <div className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Top Quality</h4>
                <p style={{ color: 'var(--text-secondary)' }}>We source only the best raw materials ensuring long-lasting durability and shine.</p>
              </div>
              <div className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Expert Advice</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Our highly knowledgeable staff helps you find exactly what you need for your project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container contact-grid">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Visit Our Store</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              Ready to transform your space? Get in touch with us for a free quote or visit our showroom in Bhurkunda. We respond quickly!
            </p>
            
            <div className="glass" style={{ padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', color: 'var(--accent-primary)', fontSize: '1.1rem' }}>Address</strong>
                <p style={{ marginTop: '0.5rem' }}>Matkama Marg, chowk, Ladi Rd,<br/>Bhurkunda, Jharkhand 829105</p>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--accent-primary)', fontSize: '1.1rem' }}>Opening Hours</strong>
                <p style={{ marginTop: '0.5rem' }}>Mon - Sun: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
            
            <Link 
              href="https://wa.me/919955952208" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
            >
              Direct WhatsApp Message
            </Link>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: '#1a1a1a', padding: '4rem 0', textAlign: 'center', color: '#f5f5f5' }}>
        <div className="container">
          <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Tripurari Tiles & Marble</h3>
          <p style={{ color: '#888', marginBottom: '2rem' }}>Bhurkunda, Jharkhand 829105</p>
          <p style={{ color: '#555', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>

      {/* Global Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}
