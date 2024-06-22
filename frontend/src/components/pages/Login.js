import React, {useState} from "react";

import '../../styles/pages/Login.css';
import Header from "../organisms/Header";
import InputWithLabel from "../atoms/InputWithLabel";
import ClickableText from "../atoms/ClickableText";
import ButtonPrimary from "../atoms/ButtonPrimary";
import axios from "axios";
import {BACKEND_ADDRESS} from "../../Consts";
import {publish} from "../../events";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const loginLabel = "Login";
    const passwordLabel = "Hasło";
    const defaultPlaceholder = '...';
    const registerText = "Nie masz konta? Zarejestruj się!";
    const loginText = "Zaloguj się";

    let [login, setLogin] = useState('');
    let [password, setPassword] = useState('');

    const onLoginInput = (e) => {
        setLogin(e.target.value);
    };
    const onPasswordInput = (e) => {
        setPassword(e.target.value);
    };
    const logIn = () => {
        axios.post(BACKEND_ADDRESS + '/users/login', {login, password}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            localStorage.setItem('user', response.data.login);
            navigate('/');
        })
            .catch((error) => {
                console.error(error);
                publish('error', 'Nieprawidłowy login lub hasło!');
            })
    };
    const redirectToRegisterPage = () => {
        navigate("/register");
    };

    return (
        <div className="Login">
            <Header/>
            <p className="title">Zaloguj się!</p>
            <div className="inputPair">
                <InputWithLabel label={loginLabel} type="text" placeholder={defaultPlaceholder} onInput={onLoginInput}/>
                <InputWithLabel label={passwordLabel} type="text" placeholder={defaultPlaceholder} onInput={onPasswordInput}/>
            </div>
            <ButtonPrimary value={loginText} style={{height: '75px', marginTop: '4%'}} onClick={logIn}/>
            <ClickableText value={registerText} style={{marginTop: '5%', marginRight: '4%'}} onClick={redirectToRegisterPage}/>
        </div>
    );
}

export default Login;
