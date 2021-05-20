import { combineReducers } from 'redux';
import questionAnswerReducer from './questionAnswerReducer';

const rootReducer = combineReducers({
  answers: questionAnswerReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;