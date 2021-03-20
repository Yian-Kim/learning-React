// 14.4 뉴스 뷰어 UI 만들기
// 14.4.1 NewsItem 만들기
/**
 * components/NewsItem.js
 */
 import React from 'react';
 import styled from 'styled-components';
 
 const NewsItemBlock = styled.div`
     display: flex;
 
     .thumnail {
         margin-right: 1rem;
         img {
             display: block;
             width: 160px;
             height: 100px;
             object-fit: cover;
         }
     }
     .contens {
         h2 {
             margin: 0;
             a {
                 color: black;
             }
         }
         p {
             margin: 0;
             line-height: 1.5;
             margin-top: 0.5rem;
             white-space: normal;
         }
     }
     & + & {
         margin-top: 3rem;
     }
 `;
 const NewsItem = ({ article }) => {
     const { title, description, url, urlToImage } = article;
     return (
         <NewsItemBlock>
             {urlToImage && (
                 <div className="thumnail">
                     <a href={url} target="_blank" rel="noopener noreferrer">
                         <img src={urlToImage} alt="thumnail" />
                     </a>
                 </div>
             )}
             <div className="contents">
                 <h2>
                     <a href={url} target="_blank" rel="noopener noreferrer">
                         {title}
                     </a>
                 </h2>
                 <p>{description}</p>
             </div>
         </NewsItemBlock>
     );
 };
 
 export default NewsItem;

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
  
//   const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160',
//   };

  const NewsList = () => {
      const [articles, setArticles] = useState(null);
      const [loading, setLoading] = useState(false);
      
      useEffect(() => {
          // async를 사용하는 함수 따로 선언
          const fetchData = async () => {
              setLoading(true);
              try {
                  const response = await axios.get(
                      'https://newsapi.org/v2/top-headlines?country=kr&apiKey=',
                  );
                  setArticles(reasponse.data.articles);
              } catch (e) {
                  console.log(e);
              }
              setLoading(false);
          };
          fetchData();
      }, []);
  
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
              {/* <NewsItem article={sampleArticle} />
              <NewsItem article={sampleArticle} />
              <NewsItem article={sampleArticle} />
              <NewsItem article={sampleArticle} />
              <NewsItem article={sampleArticle} />
              <NewsItem article={sampleArticle} */}
              {/* // 14.5 데이터 연동하기 */}
              {articles.map(article => (
                  <NewsItem key={articles.url} article={article} />
              ))}
          </NewsListBlock>
      );
  };
  
  export default NewsList;

 /**
  * App.js
  */
  import React from 'react';
  import NewsList from './components/NewsList';
  
  const App = () => {
    return <NewsList />;
  };
  
  export default App;