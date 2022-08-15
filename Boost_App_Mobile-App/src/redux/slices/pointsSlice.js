import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  points: 125,
  status: 'idle',
  error: null,
};
const pointSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    increasePoints(state, action) {
      state.points = state.points + action.payload;
    },
    decreasePoints(state, action) {
      state.points = state.points - action.payload;
    },
  },
});

const {reducer, actions} = pointSlice;
export const {increasePoints, decreasePoints} = actions;
export default reducer;
