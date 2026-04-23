import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill all fields.');
      return;
    }
    
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatus(errorData.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Failed to connect to server.');
    }

    setTimeout(() => setStatus(''), 5000);
  };

  // Safe Google Maps Embed URL - updated to requested location
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.244635363654!2d81.09690485375523!3d16.714641197168113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3615e2af027cd3%3A0xe62ecfb6ab181419!2sOven%20Diaries!5e0!3m2!1sen!2sin!4v1776876669067!5m2!1sen!2sin"
  return (
    <section id="contact" className="py-24 bg-[#1c2070] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-[10px] font-bold tracking-widest text-[#b8a35e] uppercase mb-3">Reach Out</h2>
          <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">Get In Touch</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            {/* Quick Contact style from design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-b border-white/10 pb-8">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#b8a35e] mb-2 flex items-center gap-2"><MapPin size={12} /> Location</span>
                <p className="text-xs text-white/70 leading-relaxed">Sankara Matam St, near Athidi hotel,<br/>Ramachandra Rao Pet, Eluru,<br/>Andhra Pradesh 534002</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#b8a35e] mb-2 flex items-center gap-2"><Phone size={12} /> Call Us</span>
                <p className="text-xs text-white/70 leading-relaxed">+91 8529988567<br/>+91 7947415308<br/>+91 9966060999<br/>c2kfoodtech@gmail.com</p>
              </div>
              <div className="flex flex-col sm:col-span-2">
                <span className="text-[10px] uppercase tracking-widest text-[#b8a35e] mb-2 flex items-center gap-2"><Mail size={12} /> Hours</span>
                <p className="text-xs text-white/70 leading-relaxed">Mon-Sun: 11:00 AM — 10:30 PM</p>
              </div>
            </div>

            <div className="w-full h-64 sm:h-80 bg-white/5 rounded-sm overflow-hidden border border-white/10 p-1">
              <iframe 
                src={mapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm flex flex-col justify-center"
          >
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">Send a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1c2070]/50 border border-white/10 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-[#b8a35e] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#1c2070]/50 border border-white/10 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-[#b8a35e] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="w-full bg-[#1c2070]/50 border border-white/10 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-[#b8a35e] transition-colors resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#b8a35e] hover:bg-[#c9b77d] text-[#1c2070] font-bold py-3 rounded-sm uppercase tracking-widest transition-colors duration-300 text-xs"
              >
                Send Message
              </button>

              {status && (
                <p className={`text-center text-xs tracking-widest uppercase ${status.includes('success') ? 'text-[#b8a35e]' : 'text-red-400'}`}>
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
