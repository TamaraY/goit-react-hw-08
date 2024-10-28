import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      toast.success("Contacts fetched successfully!");
      return data;
    } catch (error) {
      toast.error(error.message || "Failed to fetch contacts!");
      return thunkAPI.rejectWithValue("Failed to fetch contacts");
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      toast.success("Contact added successfully!");
      return data;
    } catch (error) {
      toast.error(error.message || "Failed to add contact!");
      return thunkAPI.rejectWithValue("Failed to add contact");
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      toast.success("Contact deleted successfully!");
      return contactId;
    } catch (error) {
      toast.error(error.message || "Failed to delete contact!");
      return thunkAPI.rejectWithValue("Failed to delete contact");
    }
  }
);
