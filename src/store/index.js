import { createSlice , configureStore } from '@reduxjs/toolkit'

const initialState = ({linkData : [] });

const linkSlice = createSlice({
    name:'linkData',
    initialState,
    reducers:{
        addLinkData(state,action){
            state.linkData = state.linkData.concat(action.payload);
        },
       
    }
})

export const linkAction = linkSlice.actions;

const store = configureStore({
    reducer : {linksData : linkSlice.reducer, }
})

export default store;