import React from 'react'
import { render } from 'react-dom'
import App from './Components/App'
//import Test from './Components/test.js'

window.React = React

render(
    <App />,
    //<Test />,
    document.getElementById('react-container')
)
