import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    '@keyframes spin': {
        '0%': {
            transform: 'rotate(0deg)'
        },
        '100%': {
            transform: 'rotate(360deg)'
        }
    },

    spinner:
        `
        position: absolute;
        content: "";
        display: block;
        width: 1.4em;
        height: 1.4em;
        top: 50%;
        left: 50%;
        margin-left: -0.7em;
        margin-top: -0.7em;
        border-top: 2px solid black;
        border-radius: 50%;
         animation:$spin 0.5s linear infinite;
        `,
})

const Spinner = () => {
    const classes = useStyles()

    return(
        <div className={classes.spinner}>

        </div>
    )
}

export default Spinner