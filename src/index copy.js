import React from 'react'
import {render} from 'react-dom'

import App from './App'
import rootReducer from './reducers'

import './index.css'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
)