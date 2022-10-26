import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailCard from '../CourseDetailsCard/CourseDetailCard';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
const Courses = () => {
    const allCourseDetails = useLoaderData();
    console.log(allCourseDetails);
    return (
        <div>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div><LeftSideNav></LeftSideNav></div>
                {/* <div className="col-span-2 ...">02</div> */}
                <div className="row-span-3 col-span-3 ...">03</div>
                <h2>home:{allCourseDetails.length}</h2>
                {
                    allCourseDetails.map(courseDetails => <CourseDetailCard key={courseDetails.category_id}
                        courseDetails={courseDetails}
                    ></CourseDetailCard>)
                }
            </div>
        </div>
    );
};

export default Courses;