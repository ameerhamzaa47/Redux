import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReduser from './Services/Reducers/Index.jsx'
const store=createStore(rootReduser)
//

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
