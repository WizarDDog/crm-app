import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Users } from '../fakeDB/users';


class Register extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            type: "password",
            name: ""
        };
    }

    showPassword = () => {
        const { type } = this.state;
        if (type === "password") {
            this.setState({ type: "text"})
        } else {
            this.setState({ type: "password"})
        }
    }

    saveValue = (save, ev) => {
        this.setState({
            [save]: ev.target.value,
        })
    }

    addUser = () => {
        const { name, surname, email, password } = this.state;
        if (
            typeof name === "string" & 
            typeof surname === "string" & 
            typeof email === "string" & 
            typeof password === "string" 
        ) {
            // get new user ID fetch from DB
            const user = {
                fetchedID: {
                    name,
                    surname,
                    email,
                    password 
                }
            };
            // Users = Object.assign(...Users, user)
            Users.push(user)
            console.log(Users)
        } else {
            if (!this.state.notFilled) {
                this.setState({ notFilled: true})
            }
        }
    }
    render() {
        const name = "name";
        const surname = "surname";
        const email = "email";
        const password = "password";
        return (
            <div className="register">
                <div className="name">
                    <div className="nameDiv">Name: </div>
                    <input className="nameInput" onChange={ev => this.saveValue(name, ev)}></input>
                </div>
                <div className="surname">
                    <div className="surnameDiv">Surname: </div>
                    <input className="surnameInput" onChange={ev => this.saveValue(surname, ev)}></input>
                </div>
                <div className="email">
                    <div className="emailDiv">Email: </div>
                    <input className="emailInput" onChange={ev => this.saveValue(email, ev)}></input>
                </div>
                <div className="password">
                    <div className="passwordInput">Password: </div>
                    <input 
                        type={this.state.type} 
                        className="passwordInput" 
                        onChange={ev => this.saveValue(password, ev)}>
                    </input>
                    <button onClick={() => this.showPassword()}>Show password</button>
                </div>
                <button 
                    style={{borderColor: this.state.notFilled ? "red" : "black"}} 
                    onClick={() => this.addUser()}>
                        <Link >Register</Link>
                </button>
            </div>
        )
    }
}

export default Register;