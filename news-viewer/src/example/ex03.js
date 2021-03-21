// 14.6 카테고리 기능 구현하기
// 14.6.1 카테고리 선택 UI 만들기
/**
 * Categories.js
 */
// 14.6 카테고리 기능 구현하기
// 14.6.1 카테고리 선택 UI 만들기
/**
 * Categories.js
 */
 import React from 'react';
 import styled, { css } from 'styled-components';
 
 const categories = [
     {
         name: 'all',
         text: '전체보기'
     },
     {
         name: 'business',
         text: '비즈니스'
     },
     {
         name: 'entertainment',
         text: '엔터테인먼트'
     },
     {
         name: 'health',
         text: '건강'
     },
     {
         name: 'science',
         text: '과학'
     },
     {
         name: 'sports',
         text: '스포츠'
     },
     {
         name: 'technology',
         text: '기술'
     }
 ];
 
 const CategoriesBlock = styled.div`
     display: flex;
     padding: 1rem;
     width: 768px;
     margin: 0 auto;
     @media screen and (max-width: 768px) {
         width: 100%;
         overflow-x: auto;
     }
 `;
 
const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding:bottom: 0.25rem;

    &.hover {
        color: #495057;
    }

    ${props =>
        props.active && css`
            front-weight: 600;
            border-bottom: 2px solid #22b8cf;
            color: #22b8cf;
            &:hover {
                color: #3bc9db;
            }
        `}
        
    & + & {
        margin-left: 1rem;
    }
`;
const Categories = ({ onSelect, category }) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category
                    key={c.name}
                    active={cateogry === c.name }
                    onClick={() => onSelect(c.name)}
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};
 
export default Categories;

 /**
  * App.js
  */
// import React from 'react';
// 14.6.1 카테고리 선택 UI 만들기
import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
    const [category, setCategory] = useState('all'); 
    const onSelect = useCallback(category => setCategory(category), []);
    return (
        <>
        <Categories category={category} onSelect={onSelect} />
        <NewsList category={category} />
        </>
    );
};

export default App;

/**
 * NewsList.js
 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

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
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        // async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=',
                );
                setArticles(reasponse.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    // 아직 articles 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }

    // articles 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={articles.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;