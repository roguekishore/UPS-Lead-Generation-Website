import React, { createContext, useContext, useState, useCallback } from 'react';

// Create the Inquiry Context
const InquiryContext = createContext(null);

// Inquiry Provider Component
export const InquiryProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Open inquiry modal with product details
  const openInquiry = useCallback((product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, []);

  // Close inquiry modal
  const closeInquiry = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  // Generate WhatsApp link with pre-filled message
  const getWhatsAppLink = useCallback((product, customMessage = '') => {
    const phoneNumber = '91XXXXXXXXXX'; // Replace with actual WhatsApp number
    const productName = product?.name || 'your products';
    const defaultMessage = customMessage || 
      `Hello Universal Power Systems, I would like a quote for the ${productName}.`;
    const encodedMessage = encodeURIComponent(defaultMessage);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }, []);

  // Generate email subject line
  const getEmailSubject = useCallback((product) => {
    return `Quote Request for ${product?.name || 'Product'}`;
  }, []);

  // Context value
  const value = {
    isModalOpen,
    selectedProduct,
    openInquiry,
    closeInquiry,
    getWhatsAppLink,
    getEmailSubject,
  };

  return (
    <InquiryContext.Provider value={value}>
      {children}
    </InquiryContext.Provider>
  );
};

// Custom hook to use the Inquiry Context
export const useInquiry = () => {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error('useInquiry must be used within an InquiryProvider');
  }
  return context;
};

export default InquiryContext;
