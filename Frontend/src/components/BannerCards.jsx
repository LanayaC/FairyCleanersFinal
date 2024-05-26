import React from 'react';

function BannerCards({ item }) {
    return (
        <div className="mt-4 my-1 p-2">
            <div className="card w-full md:w-85 bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white">
                <figure>
                    <img src={item.image} alt={item.name} className="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge text-center text-white bg-indigo-200">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        {item.price !== 0 && (
                            <div className="badge badge-outline">
                                ${item.price.toFixed(2)} {item.id === 4 ? 'per pound' : 'per hour'}
                            </div>
                        )}
                        <a href="/contact-us"><div className="text-center cursor-pointer px-2 py-1 rounded-md text-indigo-400 hover:bg-pink-500 hover:text-white p-2">Schedule with us!</div></a>
                    </div>
                    <p className="text-xs underline italic font-semithin mt-2">* Prices are starting rates and subject to change.</p>
                </div>
            </div>
        </div>
    );
}

export default BannerCards;
