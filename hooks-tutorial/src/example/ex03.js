// 8.6.1 로컬 변수 사용하기
import React, { Component } from 'react';

// class MyComponent extends Component {
const RefSample = () => {
    // id = 1
    // setId = (n) => {
    //     // this.id = n;
    //     id.current = n;
    // }
    // printId = () => {
    //     // console.log(this.id);
    //     console.log(id.current);
    // }
    const id = useRef(1);
    const setId = (n) => {
        id.current = n;
    }
    const printId = () => {
        console.log(id.current);
    }
    render() {
        return (
            <div>
                {/* MyComponent */}
                refsample
            </div>
        );
    }
}

// export default MyComponent;
export default RefSample;