import './css/login.css';
import {Button, Input } from 'antd';
import React, { Component } from 'react';

class Login extends Component {
    state = {
        modal1Visible: false,
        modal2Visible: false,
        login: '',
        password: '',
    };

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }

    userLogin() {
        this.props.users.forEach(ele => {
            if (ele.user === this.state.login && ele.password === this.state.password) {
                this.props.userOk(true, ele.user);
            }
        });
    }
    setLogin(value) {
        this.setState({ login: value})
    }
    setPassword(value) {
        this.setState({ password: value})
    }

    render() {
        return (
            <section className="login">
                <svg className="login__logo" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M59.1488 43.5667L24.683 60.956V79.3991L59.1488 62.0099V43.5667Z" fill="#1390E5"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M24.683 26.1787L59.1487 43.5679V62.0111L24.683 44.6218V26.1787Z" fill="#1180CB"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M59.1488 8.79068L24.683 26.1799V44.623L59.1488 27.2338V8.79068Z" fill="#35A2EC"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="88" height="88" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

                <h4 className="login__content-title">Вход</h4>

                <p className="login__paragraph">Логин</p>
                <Input onChange={(e) => this.setLogin(e.target.value) } className="login__input" placeholder="Basic usage" />

                <p className="login__paragraph">Пароль</p>
                <Input onChange={(e) => this.setPassword(e.target.value) } className="login__input" placeholder="Basic usage" type="password" />

                <Button className="login__button" type="primary" onClick={(e) => this.userLogin(e) } >Войти</Button>
            </section>
        )
    }
}

export default Login;
