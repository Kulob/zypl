import { createSlice } from "@reduxjs/toolkit"
import { IDebounce } from "../../types"


const initialState: IDebounce = {
    debounce: '',
    trottling: ''
}

export const debounceSlice = createSlice({
    name:'debounce',
    initialState,
    reducers: {
        setDebounce: (state,action) => {
            state.debounce = action.payload
        },
        setTrottling: (state,action) => {
            state.trottling = action.payload
        }
    }
})

export const {setDebounce, setTrottling} = debounceSlice.actions

export default debounceSlice.reducer