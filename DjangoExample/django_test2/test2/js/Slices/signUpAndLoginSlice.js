import { createSlice } from '@reduxjs/toolkit'

const signUpAndLoginAreaSlice = createSlice({
    name: 'signUpAndLoginArea',
    initialState: {
        open: false,
        showLogin: true,
        showSignUp: false,
        current: 'login',
        previous: 'login'
    },
    reducers: {
        openSignUpAndLogin(state, action) {
            state.open = true
            return state
        },
        closeSignUpAndLogin(state, action) {
            state.open = false
            state.previous=state.current
            return state
        },
        showLoginSection(state,action){
            state.showLogin=true
            state.showSignUp=false
            state.previous=state.current
            state.current='login'
        },
        showSignUpSection(state,action){
            state.showLogin=false
            state.showSignUp=true
            state.previous=state.current
            state.current='signUp'
        },
    }
})

export const { openSignUpAndLogin, closeSignUpAndLogin,showLoginSection,showSignUpSection } = signUpAndLoginAreaSlice.actions
export default signUpAndLoginAreaSlice.reducer