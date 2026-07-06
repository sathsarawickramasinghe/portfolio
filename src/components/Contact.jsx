import React, { useState, useRef } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Phone, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import './Contact.css';


const EMAILJS_SERVICE_ID  = 'service_kkydsqm';   
const EMAILJS_TEMPLATE_ID = 'template_i64309p';  
const EMAILJS_PUBLIC_KEY  = '8dd1yno_s7TRX2pT1';   
// ───────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus('submitting');
    setStatusMessage('');

    // Send real email via EmailJS
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setFormStatus('success');

        // Gold confetti celebration!
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#f0ad00', '#ffb800', '#ffffff', '#d89b00']
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setFormStatus('error');
        setStatusMessage('Something went wrong. Please try again later.');
      });
  };

  const handleReset = () => {
    setFormStatus('idle');
    setStatusMessage('');
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Have an idea or project in mind? Contact me to start collaborating.</p>
          <div className="section-accent-line"></div>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <div>
              <h3 className="contact-info-title text-gradient">Let's talk about your project</h3>
              <p className="text-muted">
                I am interested in freelance opportunities, collaborations, and engineering roles. 
                Fill out the form, or reach out directly via email or phone. I will reply within 24 hours.
              </p>
            </div>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-method-details">
                  <h4>Email Me</h4>
                  <p>sathsaragavindu2003@gmail.com</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-method-details">
                  <h4>Call Me</h4>
                  <p>+94 (70) 168-1356</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-method-details">
                  <h4>Location</h4>
                  <p>Rathnapura, Sri Lanka .</p>
                </div>
              </div>

              <a
                href="https://wa.me/94701681356"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                aria-label="Chat on WhatsApp"
              >
                <span className="whatsapp-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="glass-panel contact-form-container">
            {formStatus === 'success' ? (
              <div className="contact-success-state">
                <div className="success-icon-ring">
                  <CheckCircle size={44} />
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                  Thank you for reaching out. I have received your message and will contact you shortly!
                </p>
                <button className="btn btn-primary" onClick={handleReset}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                {formStatus === 'error' && (
                  <div className="form-status-msg error">
                    <AlertCircle size={18} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    {statusMessage}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={formStatus === 'submitting'}
                  />
                  {errors.name && (
                    <span className="error-message">
                      <AlertCircle size={14} /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={formStatus === 'submitting'}
                  />
                  {errors.email && (
                    <span className="error-message">
                      <AlertCircle size={14} /> {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="form-control"
                    placeholder="Describe your project, timeline, or details..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formStatus === 'submitting'}
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">
                      <AlertCircle size={14} /> {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
