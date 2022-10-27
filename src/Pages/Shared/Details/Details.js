import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({ categoryDetails }) => {
    // console.log(categoryDetails);
    const { _id, title, details, image_url } = categoryDetails;
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image_url} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions">
                        <Link to={`../course-details/${_id}`}><button className="btn btn-primary">Get Premium Access</button></Link>
                    </div>
                </div>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary"></button>
                </div> */}
            </div>

        </div >
    );
};

export default Details;