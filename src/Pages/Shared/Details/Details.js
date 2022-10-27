import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileDownload } from 'react-icons/fa';
// import { Pdf } from "react-to-pdf";

const Details = ({ categoryDetails }) => {

    const { _id, title, details, image_url } = categoryDetails;

    const handleDownload = () => {

    }

    return (
        <div className='m-0 mb-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-2">
                    <img src={image_url} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <button onClick={handleDownload} className='w-60 flex justify-center btn bg-gray-300 text-black'>
                        <p className='text-blue-
                        
                        700 mr-2 mt-2 flex align-middle'>Click to download</p>
                        <div>
                            <FaFileDownload className=' h-10'></FaFileDownload>
                        </div>

                    </button>
                    <div className="card-actions">
                        <Link to={`../course-details/${_id}`}><button className="btn btn-primary">Get Premium Access</button></Link>
                    </div>

                </div>
                <div className='flex justify-center'>

                </div>
            </div>

        </div >
    );
};

export default Details;