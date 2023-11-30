import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch(`https://dragon-news-server-six-gamma.vercel.app/category-news`)
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            setCategories(data)})
    }, [])

    return (
        <div>
            <h3>All Categories: {categories.length}</h3>
            {
                categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );

        };
export default LeftSideNav;