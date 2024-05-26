import React from 'react';
import Navbar from '../components/Navbar';
import ContactUsPage from '../components/ContactUsPage'; 
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <ContactUsPage />
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Contact;
