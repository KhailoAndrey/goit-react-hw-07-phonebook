import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, fetchDelContacts, fetchAdContacts } from './option';

const AddContactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    addContact: (state, action) => [...state, action.payload],
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchDelContacts.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
        state.error = null;
      })
      .addCase(fetchDelContacts.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchAdContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(fetchAdContacts.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { addContact } = AddContactsSlice.actions;
export const contactsReducer = AddContactsSlice.reducer;
