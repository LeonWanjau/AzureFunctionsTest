import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { makeStyles } from '@material-ui/core/styles'
import LoginSection from './LoginSection'
import SignUpSection from './SignUpSection'

const useStyles = makeStyles({
    signUpEnter: {
        transform: 'translateX(100%)',
    },

    signUpEnterActive: {
        transform: 'translateX(0%)',
        transition: 'transform 300ms ease-in'
    },

    signUpEnterDone: {
        transform: 'translateX(0%)'
    },

    signUpExit: {
        transform: 'translateX(0%)',
    },

    signUpExitActive: {
        transform: 'translateX(100%)',
        transition: 'transform 300ms ease-in'
    },

    signUpExitDone: {
        transform: 'translateX(100%)'
    },


    loginEnter: {
        transform: 'translateX(-100%)',
    },

    loginEnterActive: {
        transform: 'translateX(0%)',
        transition: 'transform 300ms ease-in'
    },

    loginEnterDone: {
        transform: 'translateX(0%)'
    },

    loginExit: {
        transform: 'translateX(0%)',
    },

    loginExitActive: {
        transform: 'translateX(-100%)',
        transition: 'transform 300ms ease-in'
    },

    loginExitDone: {
        transform: 'translateX(-100%)'
    }
})

const SignUpAndLoginSection = ({ showLogin, showSignUp, showLoginEnterAnimation, 
    showSignUpEnterAnimation, handleSignUpClose, showSignUpSection, showLoginSection}) => {
    const classes = useStyles()

    return (
        <TransitionGroup>
            {showLogin == true &&
                <CSSTransition
                    appear={showLoginEnterAnimation}
                    timeout={300}
                    enter={showLoginEnterAnimation}
                    exit={true}
                    classNames={{
                        appear: classes.loginEnter,
                        appearActive: classes.loginEnterActive,
                        appearDone: classes.loginEnterDone,
                        enter: classes.loginEnter,
                        enterActive: classes.loginEnterActive,
                        enterDone: classes.loginEnterDone,
                        exit: classes.loginExit,
                        exitActive: classes.loginExitActive,
                        exitDone: classes.loginExitDone
                    }}
                >
                    <LoginSection
                        handleSignUpClose={handleSignUpClose}
                        showSignUpSection={showSignUpSection}
                    />
                </CSSTransition>
            }

            {
                showSignUp == true &&

                <CSSTransition
                    appear={showSignUpEnterAnimation}
                    timeout={300}
                    enter={showSignUpEnterAnimation}
                    exit={true}
                    classNames={{
                        appear: classes.signUpEnter,
                        appearActive: classes.signUpEnterActive,
                        appearDone: classes.signUpEnterDone,
                        enter: classes.signUpEnter,
                        enterActive: classes.signUpEnterActive,
                        enterDone: classes.signUpEnterDone,
                        exit: classes.signUpExit,
                        exitActive: classes.signUpExitActive,
                        exitDone: classes.signUpExitDone
                    }}
                >
                    <SignUpSection
                        handleSignUpClose={handleSignUpClose}
                        showLoginSection={showLoginSection}
                    />
                </CSSTransition>
                 }
        </TransitionGroup >
    )
}

export default SignUpAndLoginSection