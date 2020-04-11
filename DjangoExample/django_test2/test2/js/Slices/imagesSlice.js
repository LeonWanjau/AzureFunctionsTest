import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchImages = createAsyncThunk(
    'images/fetch', (arg, thunkAPI) => {
        return axios.post('/return_all_images')
            .then((response) => {
                return response.data
            })
    }
)

const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        showImages: false,
        imageList: {
        }
    },
    extraReducers: {
        [fetchImages.fulfilled]: (state, action) => {
            state.showImages=true
            state.imageList=action.payload.images
        }
    }
})

export default imagesSlice.reducer