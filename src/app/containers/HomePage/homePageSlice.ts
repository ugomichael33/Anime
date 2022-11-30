import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    animePage: [],
}

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        incrementCounter: (state, action) => {
            state.animePage
        }
    }
})

export const {  } = HomePageSlice.actions
export default HomePageSlice.reducer