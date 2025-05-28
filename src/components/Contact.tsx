
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title pixel-text">Get In Touch</h2>
            <p className="section-description">
              Have a project in mind or want to collaborate? Let's talk!
            </p>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-container pixel-card">
              <div className="row g-4">
                <div className="col-lg-5">
                  <div className="contact-info h-100 d-flex flex-column">
                    <div className="contact-item d-flex align-items-center mb-4">
                      <div className="contact-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="contact-details">
                        <h4>Email</h4>
                        <a href="mailto:soham.chaudhary404@gmail.com">
                          soham.chaudhary404@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="contact-item d-flex align-items-center mb-4">
                      <div className="contact-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="contact-details">
                        <h4>Phone</h4>
                        <a href="tel:+918806649733">+91 8806649733</a>
                      </div>
                    </div>
                    
                    <div className="contact-item d-flex align-items-center mb-4">
                      <div className="contact-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="contact-details">
                        <h4>Location</h4>
                        <p>Pune, Maharashtra, India</p>
                      </div>
                    </div>
                    
                    <div className="social-links mt-auto pt-4">
                      <a href="https://github.com/SohamDev404" className="social-link me-3">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="https://linkedin.com/in/soham-chaudhary14" className="social-link">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-7">
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control pixel-input"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="email"
                          className="form-control pixel-input"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control pixel-input"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <textarea
                        className="form-control pixel-input"
                        name="message"
                        rows={6}
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary pixel-btn w-100">
                      <i className="fas fa-paper-plane me-2"></i>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
