import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = createSelector(state => state.contacts.filters);

export const selectContacts = createSelector(state => state.contacts.contacts.items);

export const selectVisibleContacts = createSelector(
  [ selectContacts, selectFilter],
  (contacts, filter) => {
   return contacts.filter(contact => contact.name.toLowerCase()
          .includes(filter.toLowerCase()))
  }
)