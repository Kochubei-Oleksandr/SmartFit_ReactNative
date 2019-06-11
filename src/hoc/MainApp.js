import React, {Component} from 'react'

function MainApp(Component) {
    // class App extends React {
    //
    //     render() {
    //         return <Component {...this.props} />
    //     }
    // }

    // App.displayName = `App(${Component.displayName || Component.name || 'Component'})`

    return Component
}

export default MainApp