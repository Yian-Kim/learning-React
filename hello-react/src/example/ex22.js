// 3.3.7 클래스형 컴포넌트에서 props 사용하기

/**
 * MyComponent.js
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 클래스형 컴포넌트로 변환
class MyComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props; // 비구조화 할당
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.PropTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};


// 클래스형 컴포넌트에서 defaultProps와 propTypes를 설정할 때 class 내부에서 지정
class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };
    static PropTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const { name, favoriteNumber, children } = this.props; // 비구조화 할당
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}

export default MyComponent;