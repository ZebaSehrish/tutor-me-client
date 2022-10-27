import React from 'react';
//import { FaceFrownIcon } from '@heroicons/react/24/solid';
import { FaFrown } from 'react-icons/fa';

const UndefinedRoute = () => {
    return (
        <div className=''>
            <p className='flex justify-center text-blue-700'><FaFrown className=' w-32 h-32 '></FaFrown></p>
            <p className=' flex justify-center font-bold text-3xl text-blue-700'>404 | Page Not Found!!</p>
        </div>
    );
};

export default UndefinedRoute;