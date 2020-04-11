import { useField } from 'formik'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

const OutlinedTextField = ({ label, ...props }) => {

    const [field, meta, helpers] = useField(props)

    return (
        <FormControl
            error={meta.error && meta.touched ? true : false}
            variant="outlined"
        >
            <InputLabel>{label}</InputLabel>
            <OutlinedInput {...field} {...props} label={label} />
            <FormHelperText>{meta.error && meta.touched ? meta.error : ' '}</FormHelperText>
        </FormControl>
    )
}

export default OutlinedTextField
