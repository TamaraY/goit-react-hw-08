import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    const { data } = await axios.post("/users/signup", credentials);
    setAuthHeader(data.token);
    return data;
  }
);

// export const login = createAsyncThunk("auth/login", async (credentials) => {
//   const { data } = await axios.post("/users/login", credentials);
//   setAuthHeader(data.token);
//   return data;
// });

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data); // Повертаємо детальне повідомлення про помилку
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
  axios.defaults.headers.common.Authorization = "";
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    setAuthHeader(token);
    const { data } = await axios.get("/users/current");
    return data;
  }
);

export const registerf = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data); // Повертаємо детальне повідомлення про помилку
    }
  }
);
