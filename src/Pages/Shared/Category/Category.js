import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Category = () => {
    const category = useLoaderData();
    const { title, image_url, details } = category;
    return (
        <div className='m-10'>
            <div className='card-container'>
                <div className='row-span-4'><LeftSideNav></LeftSideNav></div>
                <div className='course-container mt-16'>
                    {
                        // allCourseCategories.map(courseCategory => <CourseDetailCard key={courseCategory.id}
                        //     courseCategory={courseCategory}
                        // ></CourseDetailCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;