import { combineReducers } from 'redux';
import surveyFormReducer from './surveyFormReducer';

const rootReducer = combineReducers({
  answers: surveyFormReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;