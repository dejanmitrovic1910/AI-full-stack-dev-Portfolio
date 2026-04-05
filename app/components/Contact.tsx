'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact" className="section db">
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 15px' }}>
        <div className="section-title" style={{ textAlign: 'center' }}>
          <h3>Contact Me</h3>
        </div>

        <div className="contact-form-wrapper">
          {submitted ? (
            <p style={{ color: '#4caf50', textAlign: 'center', fontSize: 18 }}>
              Thank you! Your message has been sent.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
                <div className="contact-col" style={{ padding: '0 15px', width: '50%' }}>
                  <input
                    className="contact-input"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="contact-input"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="contact-input"
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-col" style={{ padding: '0 15px', width: '50%' }}>
                  <textarea
                    className="contact-textarea"
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div style={{ padding: '0 15px', width: '100%', textAlign: 'center', marginTop: 20 }}>
                  <button type="submit" className="btn-new from-middle">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
