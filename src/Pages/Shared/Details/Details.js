import React from 'react';

const Details = ({ categoryDetails }) => {
    const { title, details, image_url } = categoryDetails;
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image_url} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                </div>
            </div>

        </div>
    );
};

export default Details;