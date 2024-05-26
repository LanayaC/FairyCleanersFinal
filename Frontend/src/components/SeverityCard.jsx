import React from 'react';

function SeverityCard({ item }) {
  return (
    <div className="my-4 p-2">
            <div className="card w-full md:w-85 bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white">
        <figure>
          <img src={item.image} alt={item.severityLevel} className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-gradient3 text-center">{item.severityLevel}</h2>
          <p>{item.descr}</p>
          <div className="card-actions justify-between">
            {item.price !== 0 && (
              <div className="badge badge-outline">
                Additional pay per hour: ${item.price.toFixed(2)}
              </div>
            )}
            {item.price === 0 && (
              <div className="badge badge-outline">Base Pay</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeverityCard;
