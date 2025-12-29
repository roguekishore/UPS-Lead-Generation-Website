import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from 'lucide-react';
import { companyInfo } from '../config/themeConfig';

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const productName = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: productName ? `Quote Request for ${productName}` : '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    // Replace with EmailJS or Formspree integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: companyInfo.phone,
      href: `tel:${companyInfo.phone}`,
      description: 'Mon-Sat: 9:00 AM - 7:00 PM',
    },
    {
      icon: Mail,
      title: 'Email',
      content: companyInfo.email,
      href: `mailto:${companyInfo.email}`,
      description: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: `${companyInfo.address.city}, ${companyInfo.address.state}`,
      href: '#map',
      description: companyInfo.address.line1,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9AM - 7PM',
      href: null,
      description: 'Sunday: Closed',
    },
  ];

  return (
    <main className="page">
      {/* Hero Section */}
      <section className="contact-header">
        <div className="contact-header__container">
          <div className="contact-header__content">
            <span className="contact-header__badge">Contact Us</span>
            <h1 className="contact-header__title">Get in Touch</h1>
            <p className="contact-header__description">
              Have questions about our products or services? We're here to help.
              Reach out to us and our team will respond promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="page-section page-section--white" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="page-section__container">
          <div className="contact-info-cards">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="contact-info-card__content">
                    <h3>{item.title}</h3>
                    {item.href ? (
                      <p><a href={item.href}>{item.content}</a></p>
                    ) : (
                      <p style={{ color: 'var(--primary)', fontWeight: '500' }}>{item.content}</p>
                    )}
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section">
        <div className="contact-form-section__container">
          <div className="contact-form-section__header">
            <h2 className="contact-form-section__title">Send Us a Message</h2>
            <p className="contact-form-section__description">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="contact-form-section__grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              {submitStatus === 'success' && (
                <div className="inquiry-modal__status inquiry-modal__status--success" style={{ marginBottom: '1.5rem' }}>
                  <CheckCircle size={20} style={{ marginRight: '0.5rem' }} />
                  Message sent successfully! We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="inquiry-modal__status inquiry-modal__status--error" style={{ marginBottom: '1.5rem' }}>
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
                <div className="contact-form__row">
                  {/* Name */}
                  <div className="contact-form__field">
                    <label htmlFor="name" className="contact-form__label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="contact-form__input"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Phone */}
                  <div className="contact-form__field">
                    <label htmlFor="phone" className="contact-form__label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="contact-form__input"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="contact-form__field">
                  <label htmlFor="email" className="contact-form__label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="contact-form__input"
                    placeholder="john@example.com (optional)"
                  />
                </div>

                {/* Subject */}
                <div className="contact-form__field">
                  <label htmlFor="subject" className="contact-form__label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="contact-form__input"
                    placeholder="Quote Request for Generator"
                  />
                </div>

                {/* Message */}
                <div className="contact-form__field">
                  <label htmlFor="message" className="contact-form__label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="contact-form__textarea"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-form__submit"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* WhatsApp Alternative */}
              <div className="contact-whatsapp">
                <p className="contact-whatsapp__text">Or reach us directly on WhatsApp</p>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('Hello Universal Power Systems, I would like to inquire about your products.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-whatsapp__btn"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="contact-sidebar">
              {/* Map Placeholder */}
              <div className="contact-map" id="map">
                <div className="contact-map__placeholder">
                  <div className="contact-map__placeholder-content">
                    <MapPin size={48} />
                    <p>Google Maps Placeholder</p>
                    <p>Replace with actual iframe embed</p>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="contact-address-card">
                <h3 className="contact-address-card__title">Visit Our Office</h3>
                <div className="contact-address-card__list">
                  <div className="contact-address-card__item">
                    <MapPin size={20} />
                    <div>
                      <p className="contact-address-card__item-title">Universal Power Systems</p>
                      <p className="contact-address-card__item-text">
                        {companyInfo.address.line1}<br />
                        {companyInfo.address.line2}<br />
                        {companyInfo.address.city}, {companyInfo.address.state} - {companyInfo.address.pincode}
                      </p>
                    </div>
                  </div>
                  <div className="contact-address-card__item">
                    <Clock size={20} />
                    <div>
                      <p className="contact-address-card__item-title">Business Hours</p>
                      <p className="contact-address-card__item-text">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Card */}
              <div className="contact-emergency-card">
                <h3 className="contact-emergency-card__title">Emergency Support?</h3>
                <p className="contact-emergency-card__text">
                  For urgent breakdown support, call us directly:
                </p>
                <a href={`tel:${companyInfo.phone}`} className="contact-emergency-card__btn">
                  <Phone size={18} />
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
