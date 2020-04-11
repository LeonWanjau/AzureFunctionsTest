import { makeStyles } from '@material-ui/core/styles'
import { Formik, Form, useField, Field } from 'formik'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import OutlinedTextField from './OutlinedTextField'
import DateField from './DateField'
import clsx from 'clsx'
import React from 'react'
import { connect } from 'react-redux'
import { signUserUp } from '../Slices/userSlice'
import { Persist } from 'formik-persist'
import * as Yup from 'yup'
import moment from 'moment'

const useStyles = makeStyles({
    signUpForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1em',

        '& > * + *': {
            marginTop: '2%'
        }
    },

    signUpFormDateField: {
        marginBottom: '8%'
    },

    signUpFormElement: {
        minWidth: '30vw',
    },

    signUpAnimationContainer: {
        //transform: 'translateX(100%)',
        //position: 'absolute',
        //top:0,
        //left:0,
    },

    signUpSlideLeft: {
        animationFillMode: 'both',
        animation: '$slideLeft 200ms ease-in'
    },

    signUpSlideRight: {
        animationFillMode: 'both',
        animation: '$slideRight 200ms ease-in'
    },

    '@keyframes slideLeft': {
        '0%': {
            transform: 'translateX(100%)'
        },
        '100%': {
            transform: 'translateX(0)'
        }
    },

    '@keyframes slideRight': {
        '0%': {
            transform: 'translateX(0)'
        },
        '100%': {
            transform: 'translateX(100%)'
        }
    },
})



const SignUpSection = ({ handleSignUpClose, showLoginSection, signUserUp }) => {
    const classes = useStyles()

    return (
        <div
            className={clsx(
                classes.signUpAnimationContainer
            )}>
            <DialogTitle>Sign Up</DialogTitle>

            <DialogContent>
                <Formik
                    initialValues={{
                        firstName: '',
                        dateOfBirth: null,
                        lastName: '',
                        email: '',
                        password: '',
                    }}


                    validationSchema={
                        Yup.object({
                            firstName: Yup.string()
                                .required('Required'),

                            dateOfBirth: Yup.date()
                                .nullable()
                                .typeError('Please enter a valid date')
                                .required('Required'),
                            lastName: Yup.string()
                                .required('Required'),
                            email: Yup.string()
                                .email('Invalid Email Address')
                                .required('Required'),
                            password: Yup.string()
                                .required('Required')

                        })
                    }


                    onSubmit={values => {
                        //alert(JSON.stringify(values, null, 2))
                        
                        signUserUp({
                            firstName:values.firstName,
                            lastName:values.lastName,
                            dateOfBirth:moment(values.dateOfBirth).format('YYYY-MM-DD'),
                            email:values.email,
                            password:values.password
                        })
                        
                    }}
                >
                    <Form className={classes.signUpForm}>
                        <OutlinedTextField
                            className={classes.signUpFormElement}
                            name='firstName'
                            label='First Name'
                            type='text'
                        />

                        <OutlinedTextField
                            className={classes.signUpFormElement}
                            name='lastName'
                            label='Last Name'
                            type='text'
                        />

                        <Field
                            className={clsx(classes.signUpFormElement, classes.signUpFormDateField)}
                            name='dateOfBirth'
                            component={DateField}
                            label='Date of Birth'
                        />

                        <OutlinedTextField
                            className={classes.signUpFormElement}
                            name='email'
                            label='Email'
                            type='text'
                        />

                        <OutlinedTextField
                            className={classes.signUpFormElement}
                            name='password'
                            label='Password'
                            type='password'
                        />

                        <Button color="secondary" variant="outlined" type="submit"
                        >
                            Create Account
                </Button>
                        {/* <Persist name="signUpForm" /> */}
                    </Form>


                </Formik>
            </DialogContent>

            <DialogActions>
                <Button color="primary"
                    onClick={() => {
                        showLoginSection()
                    }}
                >
                    Login
                </Button>
                <Button onClick={handleSignUpClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </div>
    )
}


export default connect(null, { signUserUp })(SignUpSection)