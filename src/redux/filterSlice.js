import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: '',
  },

  reducers: {
    changeFilters(state, action) {
      state.value = action.payload;
    },

    resetFilters(state, action) {
      state.value = '';
    },
  },
});

export const filtersReducer = filtersSlice.reducer;

export const { changeFilters, resetFilters } = filtersSlice.actions;
