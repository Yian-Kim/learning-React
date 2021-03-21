// 14.7 리액트 라우터 적용하기
// 14.7.1 리액트 라우터의 설치 및 적용
// 14.7.2 NewsPage 생성
/**
 * pages/NewsPage.js
 */
 import React from 'react';
 import Categories from '../components/Categories';
 import NewsList from '../components/NewsList';
 
 const NewsPage = ({ match }) => {
     // 카테고리가 선택되지 않았으면 기본값 all로 사용
     const category = match.params.category || 'all';
 
     return (
         <>
             <Categories />
             <NewsList category={category} />
         </>
     );
 };
 
 export default NewsPage;

 /**
  * App.js
  */
import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
return <Route path="/:category?" component={NewsPage} />;
};

export default App;