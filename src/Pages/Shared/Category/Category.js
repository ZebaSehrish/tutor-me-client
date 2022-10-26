import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Category = () => {
    const category = useLoaderData();
    const { title, image_url, details } = category;
    return (
        <div className='m-10'>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="mt-16 row-span-6 col-span-6 ...">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src={image_url} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Enroll now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Category;