import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },

  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const contactReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
