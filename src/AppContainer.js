import React from 'react'
import './App.css';
function AppContainer({children}) {
    return (
        <div className="App">
            {children}
        </div>
    )
}

export default AppContainer
