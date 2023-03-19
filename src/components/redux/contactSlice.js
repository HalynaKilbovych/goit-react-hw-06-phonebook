import { createSlice } from "@reduxjs/toolkit";
import data from '../Data/data.json'

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { data },
    reducers: {
      addContact(state, action) {
        state.contacts.push(action.payload);
      },
      deleteContact(state, action) {
        return {
          contacts: state.contacts.filter(item => item.id !== action.payload),
        };
      },
    },
  });

export const { addContact, deleteContact } = contactsSlice.actions;


