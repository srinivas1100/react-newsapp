import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsCard from './NewsCard';

const Container = styled.div`
    height: 90vh;
    overflow-y: scroll;
`;

const News = () => {
    const [newsarray, setNewsarray] = useState([]);
    const [newsResults, setNewsResults] = useState();

    const newsApi = async () => {
        try {
            const news = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-11-11&sortBy=publishedAt&apiKey=34c9e9c2867b4bf9bca0f78cbc7dc7aa`);
            console.log(news)
            setNewsarray(news.data.articles);
            setNewsResults(news.data.totalResults);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        newsApi();
    }, [newsarray])

    console.log(newsResults)

    return (
        <Container>
            {newsarray.map((news) => (
                <NewsCard news={news} key={news.title} />
            ))
            }
        </Container>
    )
}

export default News
