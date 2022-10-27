import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Category = () => {
    const allCategoryDetails = useLoaderData();
    console.log(allCategoryDetails);

    return (
        <div className=''>
            <div className='card-container'>
                <div className='row-span-4'><LeftSideNav></LeftSideNav></div>
                <div className='course-container mt-16'>

                    {
                        allCategoryDetails.map(categoryDetails => <Details key={categoryDetails._id}
                            categoryDetails={categoryDetails}
                        ></Details>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;