import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InquiryProvider } from './context/InquiryContext';
import { Navbar, Footer, InquiryModal, ScrollToTop } from './components';
import {
  HomePage,
  AboutPage,
  ProductsPage,
  ServicesPage,
  ContactPage,
} from './pages';
import './App.css';

function App() {
  return (
    <InquiryProvider>
      <Router>
        <ScrollToTop />
        <div className="app-layout">
          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <div className="app-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />

          {/* Inquiry Modal (Global) */}
          <InquiryModal />
        </div>
      </Router>
    </InquiryProvider>
  );
}

export default App;
