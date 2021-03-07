// 13.5 서브 라우트

/**
 * Profiles.js
 */
import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/veloper">velopert</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>

            <Route path="/profiles" exact render={() => <div>사용자를 선택해 주세요. </div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};

export default Profiles;

/**
 * App.js
 */
 import React from 'react';
 import { Route, Link } from 'react-router-dom';
 import About from './About';
 import Home from './Home';
 import Profiles from './Profiles';
 
 function App() {
   return (
     <div>
       <ul>
         <li>
           <Link to="/">홈</Link>
         </li>
         <li>
           <Link to="/about">소개</Link>
         </li>
         <li>
           <Link to="/profiles">프로필</Link>
         </li>
       </ul>
       <hr />
       <Route path="/" component={Home} exact={true} />
       <Route path={['/about', '/info']} component={About} />
       <Route path="/profiles" component={Profiles} />
     </div>
   );
 };
 
 export default App;