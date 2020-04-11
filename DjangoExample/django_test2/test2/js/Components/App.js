import TestForm from './TestForm'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core'
import * as Routes from '../Routes/Routes'
import { HashRouter, Link, Switch, Route } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import SignUpDialog from './SignUpDialog'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import signUpAndLoginAreaReducer, { openSignUpAndLogin } from '../Slices/signUpAndLoginSlice'
import userReducer, { logUserOut, accessProtected, promptLogin } from '../Slices/userSlice'
import imageReducer from '../Slices/imagesSlice'
import ProtectedPage from './ProtectedPage'
import axios from 'axios'
import Roboto from '../../static/test2/fonts/roboto/Roboto-Regular.ttf'
import Merriweather from '../../static/test2/fonts/merriweather/Merriweather-Regular.ttf'
import MerriweatherBold from '../../static/test2/fonts/merriweather/Merriweather-Bold.ttf'
import Images from './Images'

const roboto = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `url('${Roboto}')`
}

const merriweatherRegular = {
    fontFamily: 'Merriweather',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `url('${Merriweather}')`
}

const merriweatherBold = {
    fontFamily: 'Merriweather',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `url('${MerriweatherBold}')`
}


const useStyles = makeStyles(theme => ({
    '@global': {
        ':root': {
            boxSizing: 'border-box'
        },

        '*,::before,::after': {
            boxSizing: 'inherit'
        },

        body: {
            fontFamily: 'Helvetica, Arial, sans-serif',
            margin: 0
        },

        '@font-face': [roboto, merriweatherRegular, merriweatherBold],
    },

    toolBar: {
        justifyContent: 'space-between'
    },


    offSet: theme.mixins.toolbar,
})
)

/*
const initialState = {
    user: {
        isLoggedIn: false,
        fname: null,
        lname: null,
        email: null
    },
    signUpAndLoginAreaOpen: false,
}
*/

const reducer = combineReducers({
    user: userReducer,
    signUpAndLoginArea: signUpAndLoginAreaReducer,
    images: imageReducer
})

const store = configureStore({
    reducer: reducer,
})

axios.defaults.baseURL = 'https://noeltestfunc.azurewebsites.net/api/serverless/test2'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.headers['Content-Type'] = 'application/json'
axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    if (error.response.status == 401 && error.response.data.promptUserLogin == 'true') {
        store.dispatch(promptLogin())
    }
    return Promise.reject(error)
})

const theme = createMuiTheme({
})

const App = () => {
    const classes = useStyles()

    return (
        <Provider store={store}>
            <HashRouter>
                <ThemeProvider theme={theme}>
                    <AppBar position='fixed'>
                        <Toolbar className={classes.toolBar}>
                            <Link to={Routes.home}>Home</Link>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    store.dispatch(accessProtected())
                                }}
                            >
                                Protected
                            </Button>
                            <Button
                                variant='contained'
                                onClick={() => {
                                    store.dispatch(logUserOut())
                                }}
                            >
                                Logout
                            </Button>
                            <Button
                                variant='contained'
                                onClick={() => {
                                    store.dispatch(openSignUpAndLogin())
                                }}
                            >
                                Login
                        </Button>
                        </Toolbar>
                    </AppBar>

                    <div className={classes.offSet} />
                    <Switch>
                        <Route path={'/'}>
                            <TestForm />
                            <Images />
                        </Route>
                    </Switch>
                    <SignUpDialog />
                </ThemeProvider>
            </HashRouter>
        </Provider>
    )
}

export default App