import React from 'react';
import schedule from '../../public/Assets/schedule-ahead.png'; 
import logo from '../../public/Assets/logo.png'; 

function ContactUsPage() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
        <div className="mt-24 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gradient5">Schedule Ahead for Magical Cleaning!</h1>
          <div className="flex justify-center mt-8">
            <img src={schedule} alt="Schedule a Cleaning" className="w-25 h-24" />
          </div>
          <a href="https://calendly.com/fairycleanerstristate/scheduling-with-fairy-cleaners/" target="_blank" rel="noopener noreferrer">
            <button className="btn bg-indigo-200 text-white text-lg p-4 mt-12 rounded-md hover:bg-pink-400 duration-500 cursor-pointer dark:bg-slate-700 dark:border-none dark:hover:bg-pink-400">
              Schedule Now!
            </button>
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <div className="text-center md:text-left md:w-1/2">
            <p className="text-lg mb-4"><span className="font-extrabold">NOTE:</span> This is completely optional! A quick call or email from us will suffice.</p>
            <p className="text-lg mb-4">Here is our phone number: <span className="text-gradient font-semibold">201-469-1249</span></p>
            <p className="text-lg mb-4">
              If you prefer email: 
              <a href="mailto:fairycleanerstristate@gmail.com" className="ml-2 font-semibold text-gradient hover:text-pink-500 duration-200">fairycleanerstristate@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-lg mb-4">Please note that if you schedule ahead, the call is always 24 hours in advance and the complete service scheduling will always be between 24-48 hours in advance!</p>
          <p className="text-lg mb-4">We will always have full payment transparency with our patrons!</p>
          <h1 className="text-sm font-bold text-center">You make the <span className ="italic font-extrabold text-gradient3">Mess</span>, 
                    we do the <span className ="italic font-extrabold text-gradient">Magic!</span></h1>
        </div>
      </div>
      <div className="flex justify-center mt-0">
        <img src={logo} alt="Fairy Cleaners Logo" className="w-32 md:w-48" />
        
      </div>
    </>
  );
}

export default ContactUsPage;
