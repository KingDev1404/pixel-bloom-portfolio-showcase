
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title pixel-text">Get In Touch</h2>
          <p className="section-description">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="contact-container pixel-card">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="contact-info">
                <div className="flex items-center mb-8">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details ml-6">
                    <h4>Email</h4>
                    <a href="mailto:soham.chaudhary404@gmail.com">
                      soham.chaudhary404@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center mb-8">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-details ml-6">
                    <h4>Phone</h4>
                    <a href="tel:+918806649733">+91 8806649733</a>
                  </div>
                </div>
                
                <div className="flex items-center mb-8">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details ml-6">
                    <h4>Location</h4>
                    <p>Pune, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="social-links mt-auto pt-8">
                  <a href="https://github.com/SohamDev404" className="social-link mr-4">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/in/soham-chaudhary14" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              
              <div className="contact-form-container">
                <form onSubmit={handleSubmit} className="contact-form space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        className="pixel-input w-full"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="pixel-input w-full"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      className="pixel-input w-full"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <textarea
                      className="pixel-input w-full h-32"
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary pixel-btn w-full">
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
