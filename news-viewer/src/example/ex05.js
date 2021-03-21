// 14.8 usePromise 커스텀 Hook 만들기
/**
 * lib/usePromise.js
 */
import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
    // 대기 중/완료/실패에 대한 상태 관리
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const process = async () => {
            setLoading(true);
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        process();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return [loading, resolved, error];
}

/**
 * components/NewsList.js
 */
 import React from 'react';
 import styled from 'styled-components';
 import NewsItem from './NewsItem';
 import axios from 'axios';
 import usePromise from '../lib/usePromise';
 
 const NewsListBlock = styled.div`
     box-sizing: border-box;
     padding-bottom: 3rem;
     width: 768px;
     margin: 0 auto;
     margin-top: 2rem;
     @media screen and (max-width: 768px) {
         width: 100%;
         padding-left: 1rem;
         padding-right: 1rem;
     }
 `;
 
 const NewsList = ({ category }) => {
     const [loading, response, error] = usePromise(() => {
         const query = category === 'all' ? '' : `&category=${category}`;
         return axios.get(
             `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=`,
         );
     }, [category]);
 
     // 대기 중일 때
     if (loading) {
         return <NewsListBlock>대기 중...</NewsListBlock>;
     }
     // 아직 articles 값이 설정되지 않았을 때
     if (!response) {
         return null;
     }
 
     // 에러가 발생했을 때
     if (error) {
         return <NewsListBlock>에러 발생!</NewsListBlock>;
     }
 
     // response 값이 유효할 때
     const { articles } = response.data;
     return (
         <NewsListBlock>
             {articles.map(article => (
                 <NewsItem key={articles.url} article={article} />
             ))}
         </NewsListBlock>
     );
 };
 
 export default NewsList;