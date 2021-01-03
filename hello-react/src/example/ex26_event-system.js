// 4.1 리액트의 이벤트 시스템
// 
/**
 * 4.1.1 이벤트를 사용할 때 주의 사항
 * 
 * 1. 이벤트 이름은 카멜 표기법으로 작성
 * - 예를 들어 HTML의 onclick은 리액트에서는 ONClick으로 작성해야 함
 * - onkeyup은 onKeyUp으로 작성
 * 
 * 2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값 전달
 * - HTML에서 이벤트를 설정할 때는 큰따옴표 안에 실행한 코드를 넣었지만, 리액트에서는 함수 형태의 객체를 전달
 * - 화살표 함수 문법으로 함수를 만들어서 전달하거나 렌더링 부분 외부에 미리 만들어서 전달해도 됨.
 * 
 * 3. DOM 요소에만 이벤트를 설정할 수 있음
 * - div, button, input, from, span 등의 DOM 요소에는 이벤트를 설정할 수 있지만,
 * 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없음
 * - MyComponent에 onClick값을 설정한다면 MyComponent를 클릭할 때 doSomething 함수를 실행하지 않고
 * 그냥 이름이 onClick인 props를 MyComponent에게 전달해 줄 뿐임.
 */ 

<MyComponent onClick={doSomething}/>

/** 
 * - 따라서 컴포넌트에 자체적으로 이벤트를 설정할 수 없음.
 * - 하지만 전달받은 props를 컴포넌트 내부의 DOM이벤트로 설정할 수 있음
 * 
 * <div onClick={this.prop.onClick}>
 * {/*(...)*/ /*}
 * </div>
 */

 /**
  * // 4.1.2 이벤트 종류
  * 
  * 리액트에서 지원하는 이벤트 종류
  * - Clipboard
  * - Composition
  * - Keyboard
  * - Focus
  * - Form
  * - Mouse
  * - Selection
  * - Touch
  * - UI
  * - Wheel
  * - Media
  * - Image
  * - Animation
  * - Transition
  * 
  * 나머지 이벤트는 리액트 메뉴얼(https://facebook.github.io/react/docs/events.html) 참고
  */