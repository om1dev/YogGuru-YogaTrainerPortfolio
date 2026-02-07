import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [breatheText, setBreatheText] = useState('Inhale...')
  const [isScrolled, setIsScrolled] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [activeService, setActiveService] = useState(null)

  // Breathing animation
  useEffect(() => {
    const breatheInterval = setInterval(() => {
      setBreatheText(prev => prev === 'Inhale...' ? 'Exhale...' : 'Inhale...')
    }, 4000)
    return () => clearInterval(breatheInterval)
  }, [])

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const services = [
    {
      id: 1,
      name: 'General Yoga Classes',
      description: 'Traditional yoga practices for all levels. Build strength, flexibility, and inner peace.',
      icon: '🧘‍♀️'
    },
    {
      id: 2,
      name: 'Weight Loss Yoga',
      description: 'Specialized sequences designed to boost metabolism and burn calories effectively.',
      icon: '🔥'
    },
    {
      id: 3,
      name: 'Back Pain Therapy',
      description: 'Therapeutic yoga to relieve chronic back pain and improve spinal health.',
      icon: '💆‍♀️'
    },
    {
      id: 4,
      name: 'Stress Relief Yoga',
      description: 'Calming practices to reduce anxiety and restore mental balance.',
      icon: '🌸'
    },
    {
      id: 5,
      name: 'Meditation Sessions',
      description: 'Guided meditation for mindfulness, clarity, and emotional well-being.',
      icon: '🕉️'
    },
    {
      id: 6,
      name: 'Personal Training',
      description: 'One-on-one customized sessions tailored to your unique goals and needs.',
      icon: '⭐'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      review: 'After 3 months of yoga therapy, my chronic back pain is completely gone. Life-changing experience!',
      rating: 5,
      image: '👩'
    },
    {
      name: 'Michael Chen',
      review: 'Lost 15 kg with the weight loss yoga program. The trainer is incredibly knowledgeable and supportive.',
      rating: 5,
      image: '👨'
    },
    {
      name: 'Priya Sharma',
      review: 'The meditation sessions have helped me manage stress and anxiety. I feel more centered and peaceful.',
      rating: 5,
      image: '👩‍🦱'
    },
    {
      name: 'David Miller',
      review: 'Professional, patient, and passionate. Best yoga instructor I have worked with!',
      rating: 5,
      image: '👨‍🦰'
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">YogGuru</div>
          <ul className="nav-menu">
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('services')}>Services</li>
            <li onClick={() => scrollToSection('testimonials')}>Testimonials</li>
            <li onClick={() => scrollToSection('gallery')}>Gallery</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="breathing-circle">
          <div className="circle"></div>
          <div className="breathe-text">{breatheText}</div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Namaste, I'm Priya Mehta</h1>
          <p className="hero-tagline">Transform your body and mind with personalized yoga therapy</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('services')}>
              View Services
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Now
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">👤</span>
              </div>
            </div>
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <div className="certifications">
                <div className="cert-badge">✓ Certified Yoga Instructor (RYT 500)</div>
                <div className="cert-badge">✓ Yoga Therapy Specialist</div>
                <div className="cert-badge">✓ Meditation & Mindfulness Coach</div>
              </div>
              <div className="experience">
                <h3>10+ Years of Experience</h3>
                <p>Helping people transform their lives through yoga</p>
              </div>
              <div className="specializations">
                <h3>Specializations</h3>
                <ul>
                  <li>Therapeutic Yoga for Pain Management</li>
                  <li>Weight Loss & Fitness</li>
                  <li>Stress & Anxiety Relief</li>
                  <li>Meditation & Mindfulness</li>
                  <li>Prenatal & Postnatal Yoga</li>
                </ul>
              </div>
              <div className="personal-message">
                <p>"Yoga is not about touching your toes, it's about what you learn on the way down. My mission is to guide you on a journey of self-discovery, healing, and transformation. Whether you're seeking relief from pain, stress, or simply want to improve your overall well-being, I'm here to support you every step of the way."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">Personalized yoga solutions for your unique needs</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`service-card ${activeService === service.id ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                  Contact to Book
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="transformation">
        <div className="container">
          <h2 className="section-title">Real Transformations</h2>
          <p className="section-subtitle">See the journey of healing and growth</p>
          <div className="slider-container">
            <div className="before-after">
              <div className="before-image" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                <div className="image-content before">
                  <span className="label">Before</span>
                  <div className="posture-demo">
                    <div className="posture-icon">🧍</div>
                    <p>Poor Posture</p>
                  </div>
                </div>
              </div>
              <div className="after-image">
                <div className="image-content after">
                  <span className="label">After</span>
                  <div className="posture-demo">
                    <div className="posture-icon">🧘</div>
                    <p>Improved Alignment</p>
                  </div>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(e.target.value)}
                className="slider"
              />
              <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
                <div className="handle-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">What My Clients Say</h2>
          <p className="section-subtitle">Real stories from real people</p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="testimonial-avatar">{testimonial.image}</div>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.review}"</p>
                <p className="testimonial-name">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">Moments from our yoga journey</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>🧘‍♀️</span>
                <p>Group Classes</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>💆‍♀️</span>
                <p>Therapy Sessions</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>🕉️</span>
                <p>Meditation</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>🏡</span>
                <p>Studio Space</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>🌅</span>
                <p>Outdoor Sessions</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>🙏</span>
                <p>Peaceful Moments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Book Your First Session</h2>
          <p className="section-subtitle">Let's start your transformation journey today</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>priya@yogguru.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Location</h3>
                  <p>123 Wellness Street, Yoga City, YC 12345</p>
                </div>
              </div>
              <div className="contact-item whatsapp-item">
                <div className="contact-icon">💬</div>
                <div>
                  <h3>WhatsApp</h3>
                  <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                    Chat with me
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="tel" name="phone" placeholder="Your Phone" required />
                <select name="service" required>
                  <option value="">Select a Service</option>
                  {services.map(service => (
                    <option key={service.id} value={service.name}>{service.name}</option>
                  ))}
                </select>
                <textarea name="message" placeholder="Tell me about your goals..." rows="4" required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <a 
        href="https://wa.me/15551234567" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp"
        title="Chat on WhatsApp"
      >
        <span className="whatsapp-icon">💬</span>
      </a>

      <button 
        className="floating-book" 
        onClick={() => scrollToSection('contact')}
        title="Book a Session"
      >
        <span>📅 Book</span>
      </button>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 YogGuru - Priya Mehta. All rights reserved.</p>
          <p className="footer-tagline">Namaste 🙏</p>
        </div>
      </footer>
    </div>
  )
}

export default App
