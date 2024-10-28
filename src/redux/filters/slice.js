// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: "",
// };

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState,
//   reducers: {
//     changeFilter: (state, action) => {
//       state.name = action.payload;
//     },
//   },
// });

// export const { changeFilter } = filtersSlice.actions;
// export const selectNameFilter = (state) => state.filters.name;
// export default filtersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Ініціалізація початкового стану
const initialState = {
  // стан фільтрів
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // твої редюсери
  },
});

export const filtersReducer = filtersSlice.reducer;
