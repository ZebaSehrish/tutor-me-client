import React from 'react';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <div className="grid grid-rows-2 grid-flow-col gap-4">
            <div><LeftSideNav></LeftSideNav></div>
            {/* <div className="col-span-2 ...">02</div> */}
            <div className="row-span-6 col-span-6 ...">03</div>
        </div>
    );
};

export default Courses;