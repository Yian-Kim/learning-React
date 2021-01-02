// 3.5 state를 사용할 때 주의사항

/**
 * 클래스형 컴포넌트든 함수형 컴포넌트든 state를 사용할 때는 주의해야 할 사항
 * - state 값을 바꾸어야 할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용
 */

 // 잘못된 코드
 // 클래스형 컴포넌트에서...
 this.state.number = this.state.number + 1;
 this.state.array = this.array.push(3);
 this.state.object.value = 5;

 // 함수형 컴포넌트에서...
 const [object, setObject] = useState({ a: 1, b: 1});
 object.b = 2;

 /**
  * 배열이나 객체를 업데이트해야 할 때는
  * 사본을 만들고 그 사본에 값을 업데이트한 후,
  * 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트
  */

// 객체 다루기
const object = { a: 1, b: 2, c: 3};
const nextObject = { ...object, b: 2}; // 사본을 만들어서 b 값만 덮어쓰기

// 배열 다루기
const array = {
    { id: 1, value: true},
    { id: 2, value: true},
    { id: 3, value: false}
};
let nextArray = array.concat({ id: 4}); // 새 항목 추가
nextArray.filter(item => item.id != = 2); // id가 2인 항목 제거
nextArray.map(item => (item.id === 1 ? ( ...item, value: false) : item)); // id가 1인 항목의 value를 false로 설정