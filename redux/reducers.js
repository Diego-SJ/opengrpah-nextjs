import { combineReducers } from '@reduxjs/toolkit';
import covidReducer from './features/covidSlice';
import appReducer from './features/appSlice';
import businessReducer from './features/businessSlice';
import blogReducer from './features/blogSlice';

const rootReducer = combineReducers({
  covid: covidReducer,
  app: appReducer,
  business: businessReducer,
  blog: blogReducer
});

export default rootReducer;
