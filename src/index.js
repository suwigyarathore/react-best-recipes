import App from './component/App'
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'

window.React = React

const MOUNT_ELEMENT = document.getElementById('root')
ReactDOM.render(<App />, MOUNT_ELEMENT)

