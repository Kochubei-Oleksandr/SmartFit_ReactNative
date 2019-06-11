import React from 'react'
import AppRouter from './src/routing/router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'

const store =  createStore(reducers, applyMiddleware(ReduxThunk))

export default () => {
    return <Provider store={store}><AppRouter /></Provider>
    // return <AppRouter />
    // render() { return <AppRouter /> }
}
