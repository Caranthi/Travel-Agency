import React, {useState} from "react";

import '../../styles/pages/Login.css';
import axios from "axios";
import {BACKEND_ADDRESS} from "../../Consts";
import {publish} from "../../events";
import Header from "../organisms/Header";
import InputWithLabel from "../atoms/InputWithLabel";
import ButtonPrimary from "../atoms/ButtonPrimary";

const Register = () => {
    const loginLabel = "Login";
    const passwordLabel = "Hasło";
    const defaultPlaceholder = '...';
    const registerText = "Zarejestruj się";

    let [login, setLogin] = useState('');
    let [password, setPassword] = useState('');

    const onLoginInput = (e) => {
        setLogin(e.target.value);
    };
    const onPasswordInput = (e) => {
        setPassword(e.target.value);
    };
    const register = () => {
        axios.post(BACKEND_ADDRESS + '/users/register', {login, password}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log('Register: ', response.data);
            publish('error', 'Udało się założyć konto!');
        })
            .catch((error) => {
                console.error(error);
            })
    };

    return (
        <div className="Login">
            <Header/>
            <p className="title">Rejestracja</p>
            <div className="inputPair">
                <InputWithLabel label={loginLabel} type="text" placeholder={defaultPlaceholder} onInput={onLoginInput}/>
                <InputWithLabel label={passwordLabel} type="text" placeholder={defaultPlaceholder} onInput={onPasswordInput}/>
            </div>
            <ButtonPrimary value={registerText} style={{height: '75px', marginTop: '4%'}} onClick={register}/>
        </div>
    );
}

export default Register
