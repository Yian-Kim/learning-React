// 9.3 CSS Module

/**
 * CSSModule.module.css
 */
/* 
 * 자동으로 고유해질 것이므로 
 * 흔히 사용되는 단어를 
  * 클래스 이름으로 마음대로 사용 가능
*/

.wrapper {
    background: black;
    padding: 1rem;
    color: white;
    font-size: 2rem;
}

.inverted {
    color: black;
    background: white;
    border: 1px solie black;
}

/* 글로벌 CSS를 작성하고 싶다면 */

:global .something {
    font-weight: 800;
    color: aqua;
}


/**
 * CSSModule.js
 */
import React from 'react';
import styles from './CSSModule.module.css';
const CSSModule = () => {
    return (
        // <div className={styles.wrapper}>
        // <div className={`${styles.wrapper} ${styles.inverted}`}>
        <div className={[styles.wrapper, styles.inverted].join(' ')}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    );
};

export default CSSModule;

/**
 * App.js
 */
import React, { Component } from 'react';
import CSSModule from './CSSModule';

class App extends Component {
  render() {
    return (
      <div>
        <CSSModule />
      </div>
    );
  }
}

export default App;