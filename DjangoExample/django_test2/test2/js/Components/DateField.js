import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns'

const DateField = ({ field, form, meta, ...other }) => {

    const currentError = form.errors[field.name]
    const touched=form.touched[field.name]

    return (

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                clearable
                name={field.name}
                value={field.value}
                format="dd/MM/yyyy"
                helperText={Boolean(currentError) && Boolean(touched) ? currentError : ' '}
                //error={Boolean(currentError)}
                error={Boolean(touched) && Boolean(currentError)}
                /*
                onError={error => {
                    // handle as a side effect
                    if (error !== currentError) {
                        form.setFieldError(field.name, error);
                    }
                }}
                */
                
                // if you are using custom validation schema you probably want to pass `true` as third argument
                onChange={date => {
                    return form.setFieldValue(field.name, date, true)}}
                {...other}

                onBlur={field.onBlur}
            />
        </MuiPickersUtilsProvider>

    )
}

export default DateField