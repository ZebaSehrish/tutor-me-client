import React from 'react';
import './Courses.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetailCard from '../CourseDetailsCard/CourseDetailCard';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
const Courses = () => {
    const allCourseCategories = useLoaderData();
    return (
        <div>
            <div className='card-container'>
                <div className='row-span-4'><LeftSideNav></LeftSideNav></div>
                <div className='course-container mt-16'>
                    {
                        allCourseCategories.map(courseCategory => <CourseDetailCard key={courseCategory.category_id}
                            courseCategory={courseCategory}
                        ></CourseDetailCard>)
                    }
                </div>
            </div>
        </div>


    );
};

export default Courses;