import React from 'react';

function ServiceCard({ item, description }) {
    return (
        <div className="mt-4 my-1 p-2">
            <div className="card w-full md:w-85 bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
                <figure>
                    <img src={item.image2} alt={item.name} className="" />
                </figure>
                <div className="card-body">
                    {description} {/* Render the description here */}
                    <div className="card-actions justify-between">
                        {item.price !== 0 && (
                            <div className="badge badge-outline ">
                                ${item.price.toFixed(2)} {item.priceType ? item.priceType : 'per hour'}
                            </div>
                        )}
                        <a href="/contact-us"><div className="text-center cursor-pointer px-2 py-1 rounded-md text-indigo-400 hover:bg-pink-500 hover:text-white p-2">Schedule with us!</div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
