import { HomePageStateInterface } from './types';
import { GetAnimePage } from './../../services/animeService/__generated__/GetAnimePage';
import { createSlice } from "@reduxjs/toolkit";

const initialState: HomePageStateInterface = {
    animePage: null
}

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setAnimePage(state, action) {
            state.animePage = action.payload
        }
    }
})

export const { setAnimePage } = HomePageSlice.actions
export default HomePageSlice.reducer