import React from 'react';

const CourseDetailCard = ({ courseCategory }) => {
    const { name, info, image_url } = courseCategory;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{info}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailCard;