// 17.3 리덕스 관련 코드 작성하기
// 17.3.1 counter 모듈 작성하기
// 17.3.1.1 액션 타입 정의하기
/**
 * modules/counter.js
 */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 17.3.1.2 액션 생성 함수 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 17.3.1.3 초기 상태 및 리듀서 함수 만들기
const initialState = {
    number: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default counter;