import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummaryCard from '../../Shared/NewSummaryCard/NewSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h1>All News {allNews.length}</h1>
            {
                allNews.map(news => <NewSummaryCard
                key={news._id}
                news={news}
                >

                </NewSummaryCard>)
            }
        </div>
    );
};

export default Home;