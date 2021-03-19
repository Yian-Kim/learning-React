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
  import React from 'react';
  import styled from 'styled-components';
  import NewsItem from './NewsItem';
  
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
  
  const sampleArticle = {
      title: '제목',
      description: '내용',
      url: 'https://google.com',
      urlToImage: 'https://via.placeholder.com/160',
  };
  
  const NewsList = () => {
      return (
          <NewsListBlock>
              <NewsItem article={sampleArticle} />
              <NewsItem article={sampleArticle} />
              <NewsItem article={sampleArticle} />
              <NewsItem article={sampleArticle} />
              <NewsItem article={sampleArticle} />
              <NewsItem article={sampleArticle} />
          </NewsListBlock>
      )
  }
  
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