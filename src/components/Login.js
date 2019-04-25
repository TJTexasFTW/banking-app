import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = (e) => {
        this.setState({username: e.target.value})
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }


    render() {
        return (
            <div className="Login">
                Login
                <br />
                <br />
                    <input placeholder="Username"
                    onChange={this.handleUsername}/>
                <br />
                <br />    
                    <input placeholder="Password" type='password' 
                    onChange={this.handlePassword}/>
                    
                <h3>Don't have an account? <Link to='/register'>Register</Link> today!</h3>

            </div>
        )
    }
}


export default Login;
