import React, { useState } from 'react';
import { X, MessageCircle, Mail, Phone } from 'lucide-react';
import { useInquiry } from '../context/InquiryContext';
import { companyInfo } from '../config/themeConfig';
import './InquiryModal.css';

const InquiryModal = () => {
  const { isModalOpen, selectedProduct, closeInquiry, getWhatsAppLink, getEmailSubject } = useInquiry();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  if (!isModalOpen || !selectedProduct) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual EmailJS/Formspree integration)
    try {
      // Example EmailJS integration:
      // await emailjs.send(serviceId, templateId, {
      //   from_name: formData.name,
      //   from_email: formData.email,
      //   phone: formData.phone,
      //   message: formData.message,
      //   product_name: selectedProduct.name,
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setTimeout(() => {
        closeInquiry();
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = getWhatsAppLink(selectedProduct);
  const emailSubject = getEmailSubject(selectedProduct);

  return (
    <div
      className="inquiry-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
    >
      {/* Backdrop */}
      <div
        className="inquiry-modal__backdrop"
        onClick={closeInquiry}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="inquiry-modal__content">
        {/* Close Button */}
        <button
          onClick={closeInquiry}
          className="inquiry-modal__close"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="inquiry-modal__header">
          <div className="inquiry-modal__header-content">
            {/* Product Image */}
            <div className="inquiry-modal__product-image">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="inquiry-modal__header-info">
              <h2 id="inquiry-modal-title" className="inquiry-modal__title">
                Request Quote
              </h2>
              <p className="inquiry-modal__product-name">{selectedProduct.name}</p>
              <p className="inquiry-modal__product-model">Model: {selectedProduct.model}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="inquiry-modal__quick-actions">
          <p className="inquiry-modal__quick-actions-label">Quick Contact Options:</p>
          <div className="inquiry-modal__quick-buttons">
            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inquiry-modal__quick-btn inquiry-modal__quick-btn--whatsapp"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Inquiry</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${companyInfo.email}?subject=${encodeURIComponent(emailSubject)}`}
              className="inquiry-modal__quick-btn inquiry-modal__quick-btn--email"
            >
              <Mail size={18} />
              <span>Email Us</span>
            </a>

            {/* Call */}
            <a
              href={`tel:${companyInfo.phone}`}
              className="inquiry-modal__quick-btn inquiry-modal__quick-btn--call"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="inquiry-modal__form">
          <p className="inquiry-modal__form-label">
            Or fill out this form and we'll get back to you:
          </p>

          {submitStatus === 'success' && (
            <div className="inquiry-modal__status inquiry-modal__status--success">
              Thank you! Your inquiry has been submitted successfully.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="inquiry-modal__status inquiry-modal__status--error">
              Something went wrong. Please try again or use the quick contact options above.
            </div>
          )}

          <div className="inquiry-modal__fields">
            {/* Name and Phone Row */}
            <div className="inquiry-modal__field-row">
              {/* Name */}
              <div className="inquiry-modal__field">
                <label htmlFor="name" className="inquiry-modal__field-label">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="inquiry-modal__input"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone */}
              <div className="inquiry-modal__field">
                <label htmlFor="phone" className="inquiry-modal__field-label">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="inquiry-modal__input"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Email */}
            <div className="inquiry-modal__field">
              <label htmlFor="email" className="inquiry-modal__field-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="inquiry-modal__input"
                placeholder="Enter your email (optional)"
              />
            </div>

            {/* Subject (Auto-populated, readonly) */}
            <div className="inquiry-modal__field">
              <label htmlFor="subject" className="inquiry-modal__field-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={emailSubject}
                readOnly
                className="inquiry-modal__input inquiry-modal__input--readonly"
              />
            </div>

            {/* Message */}
            <div className="inquiry-modal__field">
              <label htmlFor="message" className="inquiry-modal__field-label">
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="inquiry-modal__textarea"
                placeholder="Any specific requirements or questions?"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inquiry-modal__submit"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryModal;
