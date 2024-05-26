import React from 'react'
import Navbar from '../components/Navbar'
import CommunityandFeedback from '../components/comunityAndFeed'
import Footer from '../components/Footer'

function CommunityandFeed() {
  return (
    <> 
      <Navbar/>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <CommunityandFeedback />
        </div>
        <Footer />
      </div>
      <Footer/>
    </>
  )
}

export default CommunityandFeed
