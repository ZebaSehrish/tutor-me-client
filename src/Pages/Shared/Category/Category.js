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
            </div>
        </div>
    );
};

export default Category;