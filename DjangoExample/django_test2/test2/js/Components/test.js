import { makeStyles } from '@material-ui/core/styles'
import { CSSTransition, TransitionGroup, SwitchTransition } from 'react-transition-group'
import { useState, useCallback } from 'react'
import { useClientRect } from '../utilities'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const item1duration = '200ms'

const useStyles = makeStyles({

    itemAppear: {
        transform: 'translateX(-100%)'
    },
    itemAppearActive: {
        transform: 'translateX(0)',
        transition: 'transform ' + item1duration
    },
    itemAppearDone: {
        color: 'red',
        transform: 'translateX(0)'
    },

    itemEnter: {
        transform: 'translateX(-100%)'
    },
    itemEnterActive: {
        transform: 'translateX(0)',
        transition: 'transform ' + item1duration
    },
    itemEnterDone: {
        //fontSize: '30px',
        transform: 'translateX(0)'
    },
    itemLeave: {

        transform: 'translateX(0)'
    },
    itemLeaveActive: {
        transform: 'translateX(100%)',
        transition: 'transform ' + item1duration
    },
    itemLeaveDone: {
        transform: 'translateX(100%)',
    },



    item2Appear: {
        transform: 'translateX(100%)'
    },
    item2AppearActive: {
        transform: 'translateX(0)',
        transition: 'transform ' + item1duration
    },

    item2AppearDone: {
        color: 'red'
    },

    item2Enter: {
        transform: 'translateX(100%)'
    },
    item2EnterActive: {
        transform: 'translateX(0)',
        transition: 'transform ' + item1duration
    },
    item2EnterDone: {
        //fontSize: '30px',
        transform: 'translateX(0)'
    },
    item2Leave: {
        transform: 'translateX(0)'
    },
    item2LeaveActive: {
        transform: 'translateX(100%)',
        transition: 'transform ' + item1duration
    },
    item2LeaveDone: {
        transform: 'translateX(100%)'
    }
})

const Test = () => {
    const classes = useStyles()

    const [show, setShow] = useState({ first: true, second: false })

    const [showItem, setShowItem] = useState(false)

    const [rect, ref] = useClientRect()
    const [rect2, ref2] = useClientRect()
    console.log(rect ? `width:${rect.width} height:${rect.height}` : null)
    //console.log(rect2 ? `width:${rect2.width} height:${rect2.height}` : null)
    //console.log(rect ? `width:${rect.offsetWidth} height:${rect.offsetHeight}` : null)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <div
                    style={{
                        overflow: 'hidden',
                        height: rect ? rect.height :'0',
                        //height: rect ? rect.offsetHeight : 'auto',
                        //width: show.first ? rect ? rect.width : 'auto' : rect2 ? rect2.width : 'auto',
                        //height: show.first ? rect ? rect.height : 'auto' : rect2 ? rect2.height : 'auto',
                        //width: rect ? rect.offsetWidth : 'initial'
                        width: rect ? rect.width : '0',
                        transition: 'height 500ms,width 500ms',
                        position:'relative'
                    }}
                >
                    <SwitchTransition
                        mode='out-in'
                    >
                        <CSSTransition
                            unmountOnExit
                            key={show.first}
                            appear={true}
                            timeout={200}
                            classNames={
                                show.first ?
                                    {
                                        appear: classes.itemAppear,
                                        appearActive: classes.itemAppearActive,
                                        appearDone: classes.itemAppearDone,
                                        enter: classes.itemEnter,
                                        enterActive: classes.itemEnterActive,
                                        enterDone: classes.itemEnterDone,
                                        exit: classes.itemLeave,
                                        exitActive: classes.itemLeaveActive,
                                        exitDone: classes.itemLeaveDone
                                    }
                                    :
                                    {
                                        appear: classes.item2Appear,
                                        appearActive: classes.item2AppearActive,
                                        appearDone: classes.item2AppearDone,
                                        enter: classes.item2Enter,
                                        enterActive: classes.item2EnterActive,
                                        enterDone: classes.item2EnterDone,
                                        exit: classes.item2Leave,
                                        exitActive: classes.item2LeaveActive,
                                        exitDone: classes.item2LeaveDone
                                    }
                            }
                        >
                            <div
                                ref={ref}
                                style={{
                                    position:'absolute',
                                    left:0,
                                    top:0,
                                }}
                            >
                                {show.first ?
                                    <div
                                    //ref={ref}
                                    >
                                        <DialogTitle>First</DialogTitle>
                                        <DialogContent
                                            style={{
                                                overflowX: 'hidden'
                                            }}
                                        >
                                            <p
                                                style={{
                                                    border: '1px solid red',
                                                }}
                                            >First</p>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => {
                                                setShow(state => ({
                                                    first: state.first ? false : true,
                                                    second: state.second ? false : true
                                                }))
                                            }}>
                                                show second
                            </Button>
                                            <Button onClick={handleClose} >
                                                Cancel
                                </Button>
                                        </DialogActions>
                                    </div>
                                    :
                                    <div
                                    //ref={ref2}
                                    >
                                        <DialogTitle >Second</DialogTitle>
                                        <DialogContent
                                            style={{
                                                overflowX: 'hidden'
                                            }}>
                                            <p
                                                style={{
                                                    border: '1px solid red',
                                                    height: '200px',
                                                    //width: '300px'
                                                }}
                                            >Second</p>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => {
                                                setShow(state => ({
                                                    first: state.first ? false : true,
                                                    second: state.second ? false : true
                                                }))
                                            }}>
                                                show first
                            </Button>
                                            <Button onClick={handleClose} >
                                                Cancel
                                </Button>
                                        </DialogActions>
                                    </div>
                                }
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </Dialog>
        </div>
    );

}

export default Test

{/*
        <div
            className={classes.test}
            style={{
                overflowX: 'hidden',
                //position: 'relative',
                border: '1px solid black',
                //height: rect ? rect.height : 'auto'
                //minWidth: '40vw',
                //minHeight: '40vh'
            }}
        >
            <SwitchTransition
                mode='out-in'
            >
                <CSSTransition
                    key={show.first}
                    appear={true}
                    timeout={500}
                    classNames={
                        show.first ?
                            {
                                appear: classes.itemAppear,
                                appearActive: classes.itemAppearActive,
                                appearDone: classes.itemAppearDone,
                                enter: classes.itemEnter,
                                enterActive: classes.itemEnterActive,
                                enterDone: classes.itemEnterDone,
                                exit: classes.itemLeave,
                                exitActive: classes.itemLeaveActive,
                                exitDone: classes.itemLeaveDone
                            }
                            :
                            {
                                appear: classes.item2Appear,
                                appearActive: classes.item2AppearActive,
                                appearDone: classes.item2AppearDone,
                                enter: classes.item2Enter,
                                enterActive: classes.item2EnterActive,
                                enterDone: classes.item2EnterDone,
                                exit: classes.item2Leave,
                                exitActive: classes.item2LeaveActive,
                                exitDone: classes.item2LeaveDone
                            }
                    }
                >
                    <div
                    style={{overflowX:'hidden'}}
                    ref={ref}
                    >
                        {show.first ?
                            <p
                                style={{
                                    //position: 'absolute',
                                    border: '1px solid red',
                                    //width: '100%'
                                }}
                            >First</p>
                            :
                            <p
                                style={{
                                    //position: 'absolute',
                                    border: '1px solid red',
                                    height: '50px'
                                    //width: '100%'
                                }}
                            >Second</p>

                        }
                        <button
                            onClick={() => {
                                setShow(state => ({
                                    first: state.first ? false : true,
                                    second: state.second ? false : true
                                }))
                            }}
                        >Click</button>
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
        */}
