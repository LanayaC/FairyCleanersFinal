import React from 'react';
import Navbar from '../components/Navbar';
import Service from '../components/Service';
import Footer from '../components/Footer';
import list from "../../public/list.json"

function Services() {
  console.log(list);
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Service />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Services;
