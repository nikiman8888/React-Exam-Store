import React, { Component } from 'react';
import './Register.css';
import registerValidator from '../../formValidations/registerValidation';
import services from '../../services/userService';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
        }


    }
    changeHandlerUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    changeHandlerPass = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    changeHandlerRePass = (e) => {
        this.setState({
            repeatPassword: e.target.value
        })
    }
    submitHandler = () => {
        const data = this.state;
        let validator = registerValidator(
            this.state.username,
            this.state.password,
            this.state.repeatPassword
        )
        if (!validator) {
            return;
            debugger;
        } else {
            services.register(data)
                .then(res => res.json())
                .then(res => {
                    
                    if (!res.success) {
                        ToastsStore.error(res.message);
                    }
                    else {
                     //ToastsStore.success('Succesfull regisitered');
                       this.props.history.push({ pathname: '/login', senderInfo: 'register' })
                    }                   
                })
                .catch(err => {
                    ToastsStore.error(err.message);
                });

        }
    }


    render() {

        return (
            <React.Fragment>
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER} />
                <div className="shop-container">
                    <h2>Please Register</h2>
                    <form>
                        <div className="container-input">
                            <label htmlFor="username">Username</label>
                            <input type="text" onChange={this.changeHandlerUsername} placeholder="username" name="username" />
                        </div>
                        <div className="container-input">
                            <label htmlFor="password">Password</label>
                            <input type="text" onChange={this.changeHandlerPass} placeholder="password" name="pasword" />
                        </div>
                        <div className="container-input">
                            <label htmlFor="re-password">Re-Password</label>
                            <input type="text" onChange={this.changeHandlerRePass} placeholder="re-password" name="re-password" id="re-pass" />
                        </div>
                        <div className="container-input" >
                            <button type="button" onClick={this.submitHandler}>Register</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>

        )
    }

}


export default Register;