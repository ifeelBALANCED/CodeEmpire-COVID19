import React, {StrictMode} from 'react'
import {App} from "./components/App";
import {render} from 'react-dom'
import './index.css'

render(
    <StrictMode>
        <App/>
    </StrictMode>,
    document.getElementById('root')
)
