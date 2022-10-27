import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const CheckOut = () => {
    const checkOut = useLoaderData();
    const { _id, title } = checkOut;
    return (
        <div>
            <div className='card-container'>
                <div className='row-span-4'><LeftSideNav></LeftSideNav></div>
                <div className='mt-16'>
                    <div className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <p>Course-id: {_id}</p>
                            <h2 className="card-title">{title}</h2>
                            <p>Click Here to Get Subscription</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Accept</button>
                                <button className="btn btn-ghost">Deny</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;