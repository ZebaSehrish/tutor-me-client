import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://tutor-me-server.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='font-semibold'>
            <h2 className='p-4 text-center lg:visible md:visible sm:invisible'>All categories</h2>
            <div className="bg-black text-white text-center p-2 m-10 mt-0 border-none rounded-2xl">
                <div className=''>
                    {
                        categories.map(category => <p className='p-7 px-0 hover:bg-sky-700 ' key={category.category_id}>
                            <Link to={`/category/${category.category_id}`}>{category.name}</Link>
                        </p>)
                    }
                </div>
            </div>
        </div>

    );
};

export default LeftSideNav;