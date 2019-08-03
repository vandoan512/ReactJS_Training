import React from 'react';
import './login.css';
import { stringLiteral } from '@babel/types';

//class Login extends ReactComponent

// export default function funcTrangLogin ()
// {
//     return <div>
//         <h1>Login</h1>
//         <span>Username:</span> <input type="text"></input>
//         <br/><br/><br/><br/><br/>
//         <span>Password:</span> <input type="text"></input>
//     </div>
// }

export default class TrangLogin extends React.Component
{
    constructor(props) {
        console.log('constructor')
        super(props)
        this.refUsername = null
        this.state = {
            username_is_valid: true
        }
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    render() {
        console.log('render')
        return <div>
            <h1>Login</h1>
            <span>Username:</span>
            <input ref={component => this.refUsername = component} type="text"></input>
            <span Style={"color:red; display:" + (this.state.username_is_valid ? "none" : "block")}>Username not valid (have special character)</span>
            <br/><br/><br/>
            <span>Password:</span> <input type="text"></input>
            <br/><br/><br/>
            <input type="button" value="Log in" onClick={() => this.validate(this.refUsername.value)}/>
        </div>
    }

    validate(text) {
        
        let specialString = "~!@#$%^&*()_+-=;':\"[]{},.<>/?"
        for(let i in specialString) {
            debugger
            if (text.indexOf(specialString[i]) >= 0) {
                this.setState({
                    username_is_valid: false
                })
                return
            }
        }
    }
}


