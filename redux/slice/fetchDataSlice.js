import {
    createSlice,
    PayloadAction,
    createAsyncThunk
  } from '@reduxjs/toolkit';
import axios, { Axios } from 'axios';

const initialState = { 
    fetchData:[]
}

// First, create the thunk
export const fetchDataUser= createAsyncThunk(
    'https://jsonplaceholder.typicode.com/posts',
    async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data;
    }
  )


export const fetchDataSlice = createSlice({
    name: "fetchdata",
    initialState: initialState,
    extraReducers: {
        [fetchDataUser.fulfilled]: (state, action) => {
            state.fetchData = action.payload
        },
        [fetchDataUser.rejected]: (state, action) => {
            state.status = "failed";
        },
    },
    
})


export default fetchDataSlice.reducer;
