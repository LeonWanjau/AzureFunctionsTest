import { makeStyles } from '@material-ui/core/styles'
import { Formik, Form } from 'formik'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import OutlinedTextField from './OutlinedTextField'
import * as Yup from 'yup'
import clsx from 'clsx'
import React from 'react'
import {logUserIn} from '../Slices/userSlice'
import { connect } from 'react-redux'

const useStyles = makeStyles({
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1em',

        '& > * + *': {
            marginTop: '2%'
        }
    },

    loginFormElement: {
        minWidth: '30vw',
    },

    loginAnimationContainer: {
        //animationFillMode: 'both',
        //position: 'absolute',
        //top:0,
        //left:0,
    },
   
})

const LoginSection = ({ handleSignUpClose, showSignUpSection,logUserIn,
    initialPosition, showLogin, setShowSection, }) => {
    const classes = useStyles()

    return (

        <div
            className={clsx(
                classes.loginAnimationContainer,
                //{ [classes.loginSlideRight]: initialPosition == false && showLogin == true },
                //{ [classes.loginSlideLeft]: initialPosition == false && showLogin == false }
            )}>
            <DialogTitle>Login</DialogTitle>

            <DialogContent>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}

                    validationSchema={
                        Yup.object({
                            email: Yup.string()
                                .email('Invalid Email Address')
                                .required('Required'),
                            password: Yup.string()
                                .required('Required')
                        })
                    }

                    onSubmit={
                        values => {
                            //alert(JSON.stringify(values, null, 2))
                            logUserIn({...values})
                        }
                    }
                >
                    <Form className={classes.loginForm}>
                        <OutlinedTextField
                            className={classes.loginFormElement}
                            name='email'
                            type='email'
                            label='Email'
                        />

                        <OutlinedTextField
                            className={classes.loginFormElement}
                            name='password'
                            type='password'
                            label='Password'
                        />

                        <Button color="primary" variant="outlined" type="submit">
                            Login
                        </Button>
                    </Form>
                </Formik>
            </DialogContent>

            <DialogActions>
                <Button
                    color="primary"
                    onClick={
                        () => {
                            /*
                            setShowSection({
                                initialPosition: false,
                                showLogin: false
                            })
                            */
                            showSignUpSection()
                        }
                    }
                >
                    Create Account
                </Button>

                <Button onClick={handleSignUpClose} color="primary">
                    Cancel
                            </Button>
            </DialogActions>
        </div>
    )
}

export default connect(null,{logUserIn})(LoginSection)