import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isFetchPending: false,
  isFetchSuccess: false,
  entitiesFetch: [],
  entitiesSaved: [],
};

export const fetchArticle = createAsyncThunk("article/fetchArticle", async (location) => {
  let datenow = new Date();
  let lastMonth = `${datenow.getFullYear()}-${datenow.getMonth()}-${datenow.getDate()}`;
  const apiKey = "42519f8a87e749988e936b88d083e96b";
  let response = {};
  switch (location) {
    case "/" || "/indonesia":
      response = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&page=0&pageSize=8&apiKey=${apiKey}`);
      return response.data.articles;
    case "/programming":
      response = await axios.get(`https://newsapi.org/v2/everything?q=programming&from=${lastMonth}&page=1&pageSize=8&apiKey=${apiKey}`);
      return response.data.articles;
    case "/covid":
      response = await axios.get(`https://newsapi.org/v2/everything?q=covid-19&from=${lastMonth}&page=1&pageSize=8&apiKey=${apiKey}`);
      return response.data.articles;
    default:
      response = await axios.get(`https://newsapi.org/v2/everything?q=${location.substring(1)}&from=${lastMonth}&page=1&pageSize=8&apiKey=${apiKey}`);
      return response.data.articles;
  }
});

const articleSavedPromise = (articleFetch) => {
  return new Promise((resolve, reject) => {
    if (articleFetch) {
      resolve({ articleFetch });
    } else {
      reject("No articles have been saved yet.");
    }
  });
};

export const articleSaved = createAsyncThunk("article/articleSaved", async ({ articleFetch }) => {
  try {
    const response = await articleSavedPromise(articleFetch);
    return response;
  } catch (err) {
    throw err;
  }
});

export const articleUnSaved = createAsyncThunk("article/articleUnSaved", async ({ filteredUnSave }) => {
  try {
    const response = await articleSavedPromise(filteredUnSave);
    return response;
  } catch (err) {
    throw err;
  }
});

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticle.pending, (state, action) => {
        state.isFetchPending = true;
        state.entitiesFetch = [];
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.isFetchPending = false;
        state.isFetchSuccess = true;
        state.entitiesFetch.push(...action.payload);
      })

      .addCase(articleSaved.fulfilled, (state, action) => {
        state.isFetchPending = false;
        state.isFetchSuccess = true;
        const { articleFetch } = action.payload;

        if (!state.entitiesSaved.includes(articleFetch)) {
          const wrapArticle = [articleFetch];
          state.entitiesSaved.push(...wrapArticle);
        }
      })

      .addCase(articleUnSaved.pending, (state, action) => {
        state.isFetchPending = true;
        state.entitiesSaved = [];
      })
      .addCase(articleUnSaved.fulfilled, (state, action) => {
        state.isFetchPending = false;
        state.isFetchSuccess = true;
        state.entitiesSaved.push(...action.payload.articleFetch);
      });
  },
});

export default articleSlice.reducer;
