
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
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold pixel-text text-gradient mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="pixel-card p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 border-2 border-primary flex items-center justify-center text-2xl text-primary flex-shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Email</h4>
                    <a href="mailto:soham.chaudhary404@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                      soham.chaudhary404@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 border-2 border-primary flex items-center justify-center text-2xl text-primary flex-shrink-0">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Phone</h4>
                    <a href="tel:+918806649733" className="text-gray-300 hover:text-primary transition-colors">+91 8806649733</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 border-2 border-primary flex items-center justify-center text-2xl text-primary flex-shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Location</h4>
                    <p className="text-gray-300">Pune, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-8">
                  <a href="https://github.com/SohamDev404" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/in/soham-chaudhary14" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pixel-input w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pixel-input w-full"
                  />
                </div>
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="pixel-input w-full"
                />
                
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="pixel-input w-full resize-none"
                ></textarea>
                
                <button type="submit" className="pixel-btn bg-gradient-to-r from-primary to-secondary w-full py-4 text-white font-semibold">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
