import {configureStore} from '@reduxjs/toolkit';
import {pointReducer} from './slices';
// create root reducer
const rootReducer = {
  points: pointReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
