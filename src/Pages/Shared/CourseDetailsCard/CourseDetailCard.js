import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetailCard = ({ courseCategory }) => {
    const { category_id, name, info, image_url } = courseCategory;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{info}</p>
                    <div className="card-actions justify-end">
                        <Link to={`category/${category_id}`}><button className="btn btn-primary">Get More details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailCard;