import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: null,
  email: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFuel(state, action) {
      state.id = action.payload.date;
      state.email = action.payload.volume;
      state.token = action.payload.price;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.token = null;
    },
  },
});

export const { setFuel , removeUser} = userSlice.actions;

export default userSlice.reducer;