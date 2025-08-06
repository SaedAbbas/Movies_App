import { applyMiddleware, createStore } from 'redux' 
import { movieReducer } from '../reducers/movieReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk}  from 'redux-thunk';

export const store = createStore(movieReducer , applyMiddleware(thunk));
// npm i redux-thunk

// ابلايمدلوير عشان افهمه اني حستخدم المدلوير وبتقبل ثنك