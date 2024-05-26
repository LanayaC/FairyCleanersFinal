import React from 'react';
import logo from "../../public/Assets/logo.png"

function Banner() {
  return (
    <>
    <div className = "max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
            <div className = "space-y-6">
                <h1 className="text-4xl font-bold text-center">You make the <span className ="italic font-extrabold text-gradient3">Mess</span>, 
                    we do the <span className ="italic font-extrabold text-gradient">Magic!</span>
                </h1>
                <p className = "italic font-bold text-gradient4  text-xl text-center">✩ 100% Trust Guarentee ✩
                <span className = "text-gradient"> Call Now! (201)-469-1249 </span> ✩</p>

                <p className="text-left font-light"
                > ⭐ Welcome to Fairy Cleaners! With an owner of over 15 years of experience in maintenance, including roles as Janitorial Manager and Supervisor, we pride ourselves on trust, community, care, and delivering fantastic results at unbeatable prices. Discover the magic of a sparkling clean home or office—experience the difference with Fairy Cleaners today!
                </p>
                <p><span className = "font-bold">¡Hablamos Español! Türkçe biliyoruz.</span></p>
                <p className = "italic font-bold text-gradient4 text-center"> Please put your email so you can be the first to know about our sales!</p>
            </div>


            <label class="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="text" class="grow" placeholder="Email" />
            </label>
            <button className="btn mt-6 bg-indigo-200 text-white p-2 rounded-md hover:bg-pink-400 duration-500 cursor-pointer">
                Sign Up!</button>


        </div> {/* Left side */}
        {/* Right side */}
        <div className= "order-1 w-full md:w-1/2">
            <img src={logo} className="w-92 h-92" alt="" />
        </div>

    </div>
    </>
  )
}

export default Banner
