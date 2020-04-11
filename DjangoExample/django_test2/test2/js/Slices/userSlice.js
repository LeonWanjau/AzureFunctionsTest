import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const signUserUp=createAsyncThunk(
    'user/signUserUp',(arg,thunkAPI)=>{
       return axios.post('/create_new_user',{
            ...arg
        }).then((response)=>{
            return response.data
        })

        
    }
)

export const logUserIn=createAsyncThunk(
    'user/logUserIn',(arg,thunkAPI)=>{
        return axios.post('/log_user_in',{
            ...arg
        }).then((response)=>{
            return response.data
        })
    }
)

export const logUserOut=createAsyncThunk(
    'user/logUserOut',(arg,thunkAPI)=>{
        return axios.post('/log_user_out')
        .then((response)=>{
            return response.data
        })
    }
)

export const accessProtected=createAsyncThunk(
    'user/accessProtected',(arg,thunkAPI)=>{
        return axios.post('/protected_route')
        .then((response)=>{
            return response.data
        })
    }
)

const userSlice=createSlice({
    name:'user',
    initialState:{
        isLoggedIn: false,
        fname: null,
        lname: null,
        email: null
    },
    reducers:{
        promptLogin(state,action){
            console.log('prompt login')
            return state
        }
    },
    extraReducers:{
        [signUserUp.fulfilled]:(state,action)=>{
            console.log(action)
            return state
        },
        [signUserUp.rejected]:(state,action)=>{
            console.log(action)
            return state
        },
        [logUserIn.fulfilled]:(state,action)=>{
            console.log(action)
            return state
        },
        [logUserIn.rejected]:(state,action)=>{
            console.log(action)
            return state
        },
        [logUserOut.fulfilled]:(state,action)=>{
            console.log(action)
            return state
        },
        [logUserOut.rejected]:(state,action)=>{
            console.log(action)
            return state
        },
        [accessProtected.fulfilled]:(state,action)=>{
            console.log(action)
            return state
        },
        [accessProtected.rejected]:(state,action)=>{
            console.log(action)
            return state
        }
    }
})

export const {promptLogin}=userSlice.actions

export default userSlice.reducer