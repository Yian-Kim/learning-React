// 18.3.1.4 웹 요청 비동기 작업 처리하기
/**
 * lib/api.js
 */
import axios from 'axios';

export const getPost = id =>
    axios.get('https://jsonplaceholder.typicode.com/posts/${id}');

export const getUsers = id =>
    axios.get('https://jsonplaceholder.typicode.com/users');

/**
 * modules/sample.js
 */
import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
// 18.3.1.5 리팩토링
import createRequestThunk from '../lib/createRequestThunk';

// 액션 타입을 선언합니다.
// 한 요청당 세 개를 만들어야 합니다.

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// thunk 함수를 생성합니다.
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치합니다.

// export const getPost = id => async dispatch => {
//     dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
//     try {
//         const response = await api.getPost(id);
//         dispatch({
//             type: GET_POST_SUCCESS,
//             payload: response.data
//         }); // 요청 성공
//     } catch (e) {
//         dispatch({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true
//         }); // 에러 발생
//         throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
//     }
// };

// export const getUsers = () => async dispatch => {
//     dispatch({ type: GET_USERS }); // 요청을 시작한 것을 알림
//     try {
//         const response = await api.getUsers();
//         dispatch({
//             type: GET_USERS_SUCCESS,
//             payload: response.data
//         }); // 요청 성공
//     } catch (e) {
//         dispatch({
//             type: GET_USERS_FAILURE,
//             payload: e,
//             error: true
//         }); // 에러 발생
//         throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
//     }
// };
// 18.3.1.5 리팩토링
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// 초기 상태를 선언합니다.
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리합니다.

const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false
    },
    post: null,
    users: null
};

const sample = handleActions(
    {
        // [GET_POST]: state => ({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_POST: true // 요청 시작
        //     }
        // }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            // loading: {
            //     ...state.loading,
            //     GET_POST: false // 요청 완료
            // },
            post: action.payload
        }),
        // [GET_POST_FAILURE]: (state, action) => ({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_POST: false // 요청 완료
        //     }
        // }),
        // [GET_USERS]: state => ({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_USERS: true // 요청 시작
        //     }
        // }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            // loading: {
            //     ...state.loading,
            //     GET_USERS: false // 요청 완료
            // },
            users: action.payload
        })
        // [GET_USERS_FAILURE]: (state, action) => ({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_USERS: false // 요청 완료
        //     }
        // })
    },
    initialState
);

export default sample;

/**
 * modules/index.js
 */
import { combineReducers } from 'redux';
import counter from './counter';
import sample from './sample';
// 18.3.1.5 리팩토링
import loading from './loading';

const rootReducer = combineReducers({
    counter,
    sample,
    loading
});

export default rootReducer;

/**
 * components/Sample.js
 */
import React from 'react';

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && '로딩 중...'}
                {!loadingPost && post && (
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr />
            <section>
                <h1>사용자 목록</h1>
                {loadingUsers && '로딩 중...'}
                {!loadingUsers && users && (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                {user.username} ({user.email})
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default Sample;

/**
 * containers/SampleContainer.js
 */
import React from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const { useEffect } = React;
const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    //클래스 형태 컴포넌트였다면 componentDidMount
    useEffect(() => {
        // 18.3.1.5 리팩토링
        // getPost(1);
        // getUsers(1);
        // useEffect에 파라미터로 넣는 함수는 async로 할 수 없기 때문에
        // 그 내부에서 async 함수를 선언하고 호출해 줍니다.
        const fn = async () => {
            try {
                await getPost(1);
                await getUsers(1);
            } catch (e) {
                console.log(e); // 에러 조회
            }
        };
        fn();
    }, [getPost, getUsers]);
    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    );
};

// 18.3.1.5 리팩토링
export default connect(
    ({ sample, loading }) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_POST']
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);

/**
 * App.js
 */
import React from 'react';
import SampleContainer from './containers/SampleContainer';

const App = () => {
return (
    <div>
    <SampleContainer />
    </div>
);
};

export default App;

// 18.3.1.5 리팩토링
/**
 * lib/createRequestThunk.js
 */
import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestThunk(type, request) {
// 성공 및 실패 액션 타입을 정의합니다.
const SUCCESS = `${type}_SUCCESS`;
const FAILURE = `${type}_FAILURE`;
return params => async dispatch => {
    dispatch({ type }); // 시작됩
    try {
        const response = await request(params);
        dispatch({
            type: SUCCESS,
            payload: response.data
        }); // 성공
    } catch (e) {
        dispatch({
            type: FAILURE,
            payload: e,
            error: true
        }); // 에러 발생
        throw e;
    }
};
}

// 사용법: createRequestThunk('GET_USERS', api.getUsers);

/**
 * modules/loading.js
 */
import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

/*
요청을 위한 액션 타입을 payload로 설정합니다(예: "sample/GET_POST").
*/

export const startLoading = createAction(
    START_LOADING,
    requestType => requestType
);

export const finishLoading = createAction(
    FINISH_LOADING,
    requestType => requestType
);

const initialState = {};

const loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: true
        }),
        [FINISH_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false
        })
    },
    initialState
);

export default loading;

