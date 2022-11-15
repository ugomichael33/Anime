import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    animeList: [],
}

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        incrementCounter: (state, action) => {
            state.animeList
        }
    }
})

export const {  } = HomePageSlice.actions
export default HomePageSlice.reducer