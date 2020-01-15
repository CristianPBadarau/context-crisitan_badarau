import React, { Component, createContext } from 'react'

// we create our context (import createContext)
export const AuthContext = createContext();

// we create the class wich will contain our global data and functions
export class AuthContextProvider extends Component {

    // shared data
    state = {
        isAuthenticated: false
    }
    //shared function
    toggleAuth = () => {
        this.setState({
            isAuthenticated: !this.state.isAuthenticated
        })
    }

    render() {
        return (
            // we pass this to our provider
            <AuthContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider
