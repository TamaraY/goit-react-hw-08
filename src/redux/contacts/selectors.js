import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredContacts = createSelector(
  [(state) => state.contacts.items, (state) => state.filters.name],
  (contacts, filterName) => {
    if (!filterName) {
      return contacts;
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);

export const selectContacts = (state) => state;
