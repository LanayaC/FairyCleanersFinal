import React from 'react';
import SeverityCard from "./SeverityCard";
import ServiceCard from "./ServiceCard";
import list from "../../public/list.json";

// Define descriptions directly within the Service component
const descriptions = {
    "WHOLE CASTLE CLEAN-UP": (
        <div className = "font-semithin">
    <p><strong>Dusting:</strong> Dusting of all surfaces including furniture, shelves, picture frames, and baseboards.</p>
    <p><strong>Vacuuming:</strong> Thorough vacuuming of carpets, rugs, and upholstery to remove dust, dirt, and debris.</p>
    <p><strong>Mopping:</strong> Mopping or cleaning of hard floors such as tile, hardwood, or laminate.</p>
    <p><strong>Kitchen Cleaning:</strong> Cleaning of kitchen surfaces, dishes, countertops, backsplashes, and appliances (exterior).</p>
    <p><strong>Bathroom Cleaning:</strong> Cleaning and disinfecting of sinks, countertops, toilets, showers, bathtubs, and tiles.</p>
    <p><strong>Trash Removal:</strong> Emptying and disposal of trash and recycling bins.</p>
    <p><strong>Surface Wiping:</strong> Wiping down surfaces in common areas such as tables, countertops, and desks.</p>
    <p><strong>Mirror Cleaning:</strong> Cleaning and polishing of mirrors and glass surfaces.</p>
    <p><strong>Light Fixture Cleanings:</strong> Dusting or wiping down of light fixtures and ceiling fans.</p>
    <p><strong>Door and Handle Cleaning:</strong> Cleaning of doors, handles, and switch plates.</p>
    <p><strong>Air Freshening (optional):</strong> Optional air freshening or deodorizing to leave the house smelling clean and fresh.</p>
     
            </div>
    ),
    "ONE-ROOM PICK UP (INCLUDES BASEMENT AND ATTIC)": (
      <div>
        <h1>It's just for that one room you just haven't found the time to organize yet! We will gladly take that out of your hands! </h1>
        <p className= "font-semibold italic">This is only for an organizational focused cleaning with light cases of cleaning (such as mopping/sweeping/dusting)  – NOT a deep clean </p>
      </div>
  
    ),
    "FAIRY DEEP CLEAN":(
      <div>
    <p>If you have a location that needs a little extra love compared to everything else, we will provide amazing deep cleaning at a flat rate – <span className="font-bold text-pink-500">FOR ONLY ONE ROOM/LOCATION! FOR TWO ROOMS WE CHARGE 44.50/hr!</span></p>
    <h3>HERE ARE OUR OFFERS (on top of our regular cleaning):</h3>
    <h4 className="text-pink-500 font-bold">FOR KITCHEN</h4>
    <ul>
        <p>Cleaning inside and outside of cabinets and drawers.</p>
        <p>Degreasing and cleaning the stove, oven, and range hood.</p>
        <li>Cleaning and disinfecting inside and around appliances (microwave, refrigerator, dishwasher).</li>
        <li>Removing grime and buildup from backsplashes and tiles.</li>
        <li>Cleaning small appliances like the toaster and coffee maker.</li>
        <li>Scrubbing and sanitizing sinks and faucets.</li>
        <li>Washing and polishing countertops.</li>
    </ul>
    <h4 className="text-pink-500 font-bold">FOR BATHROOM</h4>
    <ul>
        <li><>Cleaning and disinfecting shower doors, tiles, grout, and bathtub.</></li>
        <li><>Scrubbing and sanitizing the toilet, including around the base and behind it.</></li>
        <li><>Cleaning and descaling the showerhead and faucets.</></li>
        <li><>Removing soap scum and buildup from shower walls and doors.</></li>
        <li><>Cleaning and disinfecting the vanity, sink, and countertops.</></li>
        <li><>Washing and sanitizing the floors.</></li>
    </ul>
    <h4 className="text-pink-500 font-bold">FOR BATHROOM</h4>
    <ul>
        <li><>Dusting and wiping down all surfaces, including furniture, shelves, and electronics.</></li>
        <li><>Vacuuming upholstered furniture and under cushions.</></li>
        <li><>Cleaning and polishing mirrors and glass surfaces.</></li>
        <li><>Dusting and wiping down baseboards, door frames, and window sills.</></li>
        <li><>Vacuuming and mopping hard floors.</></li>
    </ul>
</div>

    ),
    "LAUNDRY": (
      <div className="font-semithin">
          <p><strong>Washing and Folding:</strong> We wash and fold your laundry at a rate of $1.25 per pound.</p>
          <p><strong>Pickup and Delivery:</strong> If you prefer, we offer pickup and delivery services for an additional $1.75 per pound.</p>
      </div>
    ),
    "INTERIOR CAR CLEANING": (
      <div className="font-normal text-base">
          <p><strong>Vacuuming:</strong> Remove dust, dirt, and debris from all interior surfaces including seats, carpets, floor mats, and trunk area.</p>
          <p><strong>Interior Wiping:</strong> Wipe down dashboard, center console, door panels, and steering wheel to remove dust, fingerprints, and stains.</p>
          <p><strong>Seat Cleaning:</strong> Clean and treat seats based on material type (fabric, leather, vinyl) to remove stains, spills, and odors.</p>
          <p><strong>Carpet Shampooing:</strong> Deep clean carpets to remove embedded dirt, stains, and odors.</p>
          <p><strong>Window Cleaning:</strong> Clean interior windows and mirrors for a streak-free finish.</p>
          <p><strong>Air Vent Cleaning:</strong> Remove dust and debris from air vents to improve air quality.</p>
          <p><strong>Odor Elimination:</strong> Use deodorizing techniques to eliminate any lingering odors and leave the car smelling fresh.</p>
      </div>
  ),
  "OFFICIAL OFFICE CLEANING!": (
    <div className="font-normal text-base">
        <p><strong>Dusting and Wiping Down Surfaces:</strong> Including desks, tables, and countertops.</p>
        <p><strong>Vacuuming:</strong> Carpets and rugs to remove dust, dirt, and debris.</p>
        <p><strong>Mopping or Cleaning Hard Floors:</strong> To maintain a polished appearance.</p>
        <p><strong>Emptying and Disposing of Trash and Recycling Bins.</strong></p>
        <p><strong>Cleaning and Disinfecting Common Areas:</strong> Such as kitchens and restrooms.</p>
        <p><strong>Wiping Down and Sanitizing High-Touch Surfaces:</strong> Such as door handles, light switches, etc.</p>
        <p><strong>Restocking Restroom Supplies:</strong> Such as toilet paper, hand soap, and paper towels.</p>
        <p className="text-pink-500"><strong>Flexible Pricing:</strong> While our starting rate is $29.50 per hour, please note that pricing may vary depending on the size and condition of your office space. For offices requiring more extensive cleaning due to factors such as size or accumulated dirt and grime, our rates may adjust accordingly, with a maximum rate of $43.50 per hour for more severe cases.</p>
    </div>
),
"ORGANIC/ECO/PET FRIENDLY CLEAN": (
  <div className="font-normal text-base">
      <p><strong>Organic/Eco/Pet Friendly Clean:</strong> Our cleaning products are organic, eco-friendly, and safe for pets.</p>
      <p><strong>Additional Cost:</strong> $1.75 per hour on top of the regular cleaning service.</p>
  </div>
),
"RETURNING PLAN!": (
  <div className="font-normal text-base">
      <p><strong>Returning Plan:</strong> Returning patrons get 25% off their cleans. (Must be at least twice per month of cleaning for more than 4 hours) – if less than 4 hrs, it is 15%!</p>
  </div>
),
"REFERRAL PROGRAM!": (
  <div className="font-normal text-base">
      <p><strong>Referral Program:</strong> If you refer us to another person, you will receive a 15% discount on your next two cleans. For recurring referrals, you get 45% off your next two cleans!</p>
  </div>
),
};

function Service() {
    const severityItems = list.filter(item => item.severityLevel);
    const serviceItems = list.filter(item => !item.severityLevel);

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-24 items-center justify-center text-center">
                <h1 className="text-2xl md:text-4xl font-semibold text-center">
                    Our amazing services for our amazing customers.
                </h1>
                <h2 className="text-2xl text-center font-semithin text-gradient5">
                    Thank you so much for your support.
                </h2>
                <p>
                    Before we Begin! -- Here are our severity levels.
                    This will determine the kind of products we are needing to bring for your specific situation
                </p>
            </div>

            {/* Display Severity Cards */}
            {severityItems.map(item => (
                <SeverityCard key={item.id} item={item} />
            ))}

            <div className="text-center my-8 font-semibold">
                <p>⭐ NOTE: we guarantee 100% trust safety – you will never have to worry whether or not your items will be stolen, we promise to integrate that magical trust in every home, every time.</p>
            </div>

            {/* Display Service Cards */}
            {serviceItems.map(item => (
                <div key={item.id} className="mb-8">
                    <h2 className="text-3xl font-semibold text-center text-gradient5">{item.name}</h2>
                    <ServiceCard item={item} description={descriptions[item.name]} />
                </div>
            ))}
        </div>
    );
}

export default Service;
