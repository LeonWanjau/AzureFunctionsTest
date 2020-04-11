import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import LoginSection from './LoginSection'
import SignUpSection from './SignUpSection'
import { useState, useCallback } from 'react'
import clsx from 'clsx'
import { connect } from 'react-redux'
import { closeSignUpAndLogin, showSignUpSection, showLoginSection } from '../Slices/signUpAndLoginSlice'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const duration1='200ms'

const useStyles = makeStyles({
    signUpAndLoginContainer: {
        //overflow: 'hidden',
        //position: 'relative',
    },

    showSignUpOverflow: {
        //overflowY: 'visible'
    },

    loginEnter: {
        opacity: 0.01,
    },

    loginEnterActive: {
        opacity: 1,
        transition: 'opacity 300ms ease-in'
    },

    loginEnterDone: {
        opacity: 1
    },

    loginExit: {
        opacity: 1,
    },

    loginExitActive: {
        opacity: 0.01,
        transition: 'opacity 300ms ease-in'
    },

    loginExitDone: {
        opacity: 0.01
    },

    signUp:{

        '&-appear':{
            opacity:'0.01'
        },

        '&-appear-active':{
            opacity:'1',
            transition:'opacity 300ms'
        },
        
        '&-appear-done':{
            opacity:'1'
        },

        '&-enter':{
            opacity:'0.01'
        },

        '&-enter-active':{
            opacity:'1',
            transition:'opacity 300ms'
        },

        '&-enter-done':{
            opacity:'1'
        },

        '&-exit':{
            opacity:'1'
        },

        '&-exit-active':{
            opacity:'0.01',
            transition:'opacity 300ms'
        },
        
        '&-exit-done':{
            opacity:'0.01'
        },
    }
})

const SignUpDialog = ({ closeSignUpAndLogin, open, showLogin, showSignUp, current, previous,
    showLoginSection, showSignUpSection }) => {
    const classes = useStyles()

    const [showSection, setShowSection] = useState({
        initialPosition: true,
        showLogin: false,
    })

    const [loginSize, setLoginSize] = useState({ width: null, height: null })
    const measuredLoginRef = useCallback(node => {
        if (node !== null) {
            setLoginSize({
                width: node.getBoundingClientRect().width,
                height: node.getBoundingClientRect().height
            })
        }
    }, [])

    const [signUpSize, setSignUpSize] = useState({ width: null, height: null })
    const measuredSignUpRef = useCallback(node => {
        if (node !== null) {
            setSignUpSize({
                width: node.getBoundingClientRect().width,
                height: node.getBoundingClientRect().height
            })
        }
    }, [])

    /*
    const [size,setSize]=React.useState({width:null,height:null})

    const measuredRef=React.useCallback(node => {
        if(node != null){
            setSize({
                width:node.getBoundingClientRect().width,
                height:node.getBoundingClientRect().height
            })
        }
    })
    */

    //const [openSignUp, setOpenSignUp] = React.useState(false);

    const handleSignUpClickOpen = () => {
        setOpenSignUp(true)
    }

    const handleSignUpClose = () => {
        //setOpenSignUp(false)
        closeSignUpAndLogin()
    }


    return (

        <div>

            <Dialog open={open} onClose={handleSignUpClose}>
                <div
                    className={clsx(
                        classes.signUpAndLoginContainer,
                        { [classes.showSignUpOverflow]: showSection.initialPosition == true ? false : showSection.showLogin ? false : true }
                    )}



                /*
                style={{
                    width: showSection.initialPosition ? loginSize.width : showSection.showLogin ? loginSize.width : signUpSize.width,
                    height: showSection.initialPosition ? loginSize.height : showSection.showLogin ? loginSize.height : signUpSize.height
                }}
                */


                >

                    <SwitchTransition
                        mode='out-in'
                    >
                        <CSSTransition
                            key={showLogin}
                            appear={(previous == current) == false}
                            enter={(previous == current) == false}
                            timeout={300}
                            classNames={
                                showLogin ?
                                {
                                appear: classes.loginEnter,
                                appearActive: classes.loginEnterActive,
                                appearDone: classes.loginEnterDone,
                                enter: classes.loginEnter,
                                enterActive: classes.loginEnterActive,
                                enterDone: classes.loginEnterDone,
                                exit: classes.loginExit,
                                exitActive: classes.loginExitActive,
                                exitDone: classes.loginExitDone
                            }
                            :
                            classes.signUp
                        }
                        >
                            {showLogin == true ?
                                <LoginSection
                                    handleSignUpClose={handleSignUpClose}
                                    showSignUpSection={showSignUpSection}
                                />
                                :
                                <SignUpSection
                                    handleSignUpClose={handleSignUpClose}
                                    showLoginSection={showLoginSection}
                                />

                            }
                        </CSSTransition>
                    </SwitchTransition>

                </div>
            </Dialog>




        </div>
    )
}

const mapStateToProps = ({ signUpAndLoginArea: { open, showLogin, showSignUp, current, previous } }) => ({
    open, showLogin, showSignUp, current, previous
})

export default connect(mapStateToProps, { closeSignUpAndLogin, showLoginSection, showSignUpSection })(SignUpDialog)