import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummaryCard from '../../Shared/NewSummaryCard/NewSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>Category New has: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewSummaryCard
                key={news._id}
                news={news}
                ></NewSummaryCard>)
            }
        </div>
    );
};

export default Category;