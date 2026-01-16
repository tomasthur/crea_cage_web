'use client';

import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { useState } from 'react';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Odoslanie priamo z browsera na Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '03182857-e158-408c-b565-c25b4aaba8c6',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nová správa z Crea Cage webu od ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Chyba:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navigation />
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll animation="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">KONTAKT</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={100}>
            <p className="text-lg text-gray-300 mb-12">
              Máte otázku alebo nás chcete pozvať na koncert? Napíšte nám!
            </p>
          </AnimateOnScroll>

          {/* Contact Info */}
          <AnimateOnScroll animation="fade-in-left" delay={150}>
            <div className="mb-12 bg-[#2a2a2a] p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Kontaktné informácie</h2>
              <p className="text-gray-300">
                <span className="font-semibold text-[#ff0000]">Email:</span> creacage@gmail.com
              </p>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Field */}
            <AnimateOnScroll animation="fade-in-right" delay={200}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                  Meno *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333] rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#ff0000] transition-colors"
                  placeholder="Vaše meno"
                />
              </div>
            </AnimateOnScroll>

            {/* Email Field */}
            <AnimateOnScroll animation="fade-in-left" delay={250}>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333] rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#ff0000] transition-colors"
                  placeholder="vas@email.com"
                />
              </div>
            </AnimateOnScroll>

            {/* Message Field */}
            <AnimateOnScroll animation="fade-in-right" delay={300}>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                  Správa *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333] rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#ff0000] transition-colors resize-none"
                  placeholder="Vaša správa..."
                />
              </div>
            </AnimateOnScroll>

            {/* Submit Button */}
            <AnimateOnScroll animation="fade-in-up" delay={350}>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-[#ff0000] text-white font-bold text-lg rounded hover:bg-[#cc0000] transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'ODOSIELAM...' : 'ODOSLAŤ SPRÁVU'}
              </button>
            </AnimateOnScroll>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-green-900/50 border border-green-700 rounded text-green-300">
                ✓ Správa bola úspešne odoslaná!
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-900/50 border border-red-700 rounded text-red-300">
                ✗ Nastala chyba pri odosielaní správy. Skúste to prosím znova alebo nás kontaktujte priamo na creacage@gmail.com
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}
