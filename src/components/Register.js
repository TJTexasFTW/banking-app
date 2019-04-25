import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from  'react-router-dom';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email: '',
            redirect: false
        }
    }
        handleUsername = (e) => {
            this.setState({username: e.target.value})
        }
    
        handlePassword = (e) => {
            this.setState({password: e.target.value})
        }    

        handleEmail = (e) => {
            this.setState({email: e.target.value})
        }

        handleClick = () => {
            axios.post('/api/register', {
                username: this.state.username, 
                password: this.state.password, 
                email: this.state.email
            }).then (response => {
                    this.setState({redirect: true})
                })
                // console.log("Register: ", this.state.username, this.state.password, this.state.email)
        }

    render() {

        if (this.state.redirect) {
            return <Redirect to = '/' />
        }

        return (
            <div>
                <h1>WELCOME TO MONEY-R-US</h1>
                <br />
                    <input placeholder="Username"
                    onChange={this.handleUsername}/>
                <br />    
                    <input placeholder="Password" type='password' 
                    onChange={this.handlePassword}/>
                <br />
                    <input placeholder="Email" 
                    onChange={this.handleEmail}/>
                <br />
                    <button
                    onClick={this.handleClick}>
                        REGISTER
                    </button>

            </div>
        )
    }

}

export default Register