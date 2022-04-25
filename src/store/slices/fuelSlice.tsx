import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: null,
  date: "",
  volume: null,
  price: null,
  other: "",
};

const fuelSlice = createSlice({
  name: "fuel",
  initialState,
  reducers: {
    setFuel(state, action) {
      state.id = action.payload.id;
      state.date = action.payload.date;
      state.volume = action.payload.volume;
      state.price = action.payload.price;
      state.other = action.payload.other;
    },
    removeFuel(state) {
      state.id = null;
      state.date = "";
      state.volume = null;
      state.price = null;
      state.other = "";
    },
  },
});