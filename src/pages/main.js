import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Main extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
        };
    }
    render() {
        return (
        <div className="logOrReg">
            {!this.state.login ? 
                (<div>
                    <button className="register">
                        <Link to="/register">Register</Link>
                    </button>
                    <div className="login">
                        <div className="question">Already registered?</div>
                        <button 
                            className="loginButton" 
                            onClick={()=> this.setState({login: !this.state.login})}
                        >
                            Login
                        </button>
                    </div>
                </div>) : (
                    <div>
                        <button onClick={() => this.setState({login: !this.state.login})}>Back</button>
                    </div>
                )
            }
            {this.state.login ? 
                (<div className="loginInputs">
                    <div className="usernameInput">
                        <div className="username">Username</div>
                        <input ></input>
                    </div>
                    <div className="passwordInput">
                        <div className="password">Password</div>
                        <input type="password"></input>
                    </div>
                    <button >
                        <Link to="/cart">Login</Link>
                    </button>
                </div>) : (<div/>)
            }
        </div>
        );
    }
}

export default Main;