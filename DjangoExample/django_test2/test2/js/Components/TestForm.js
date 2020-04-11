import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { useFormik } from 'formik'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText'
import * as Yup from 'yup'
import axios from 'axios'

const useStyles = makeStyles({

    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5em',
        alignItems: 'center',

        '& > * + *': {
            marginTop: '2%',
        }
    },

    paperContainer: {
        margin: '2% 10%'
    },

    formControl: {
        minWidth: '80%'
    }
})



const TestForm = () => {
    const classes = useStyles()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),

        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2))
            /*
            axios.defaults.xsrfCookieName = 'csrftoken'
            axios.defaults.xsrfHeaderName = 'X-CSRFToken'
            */

            axios.post('/test_form_validate',
                {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email
                }
            )
                .then(response => {
                    console.log(response)
                })
        }
    })

    return (
        <Paper elevation={3} className={classes.paperContainer}>
            <form onSubmit={formik.handleSubmit} className={classes.formContainer}>

                <FormControl
                    error={formik.touched.firstName && formik.errors.firstName ? true : false}
                    variant="outlined"
                    className={classes.formControl}>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <OutlinedInput
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        label="First Name"
                        aria-describedby="firstName-text"
                    />
                    <FormHelperText>{formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ' '}</FormHelperText>

                </FormControl>


                <FormControl
                    error={formik.touched.lastName && formik.errors.lastName ? true : false}
                    variant="outlined"
                    className={classes.formControl}>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <OutlinedInput
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        onBlur={formik.handleBlur}
                        label="Last Name"
                    />
                    <FormHelperText>{formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ' '}</FormHelperText>
                </FormControl>

                <FormControl
                    error={formik.touched.email && formik.errors.email ? true : false}
                    variant="outlined"
                    className={classes.formControl}
                >
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        label="Email"
                    />
                    <FormHelperText>{formik.touched.email && formik.errors.email ? formik.errors.email : ' '}</FormHelperText>
                </FormControl>

                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </Paper>
    )
}

export default TestForm