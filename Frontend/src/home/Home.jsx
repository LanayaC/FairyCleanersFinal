import React from 'react';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BannerServiceSample from '../components/BannerServiceSample';
import Footer from "../components/Footer";


function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <BannerServiceSample/>
    <Footer/>
    </>
  )
}

export default Home
