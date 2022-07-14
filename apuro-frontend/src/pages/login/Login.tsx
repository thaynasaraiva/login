import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import "./Login.css";
import { toast } from "react-toastify";

function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {

            id: 0,
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin(
            {
                ...userLogin,
                [e.target.name]: e.target.value
            })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {

            await login("/usuario/logar", userLogin, setToken)


            toast.success("Usuário logado com sucesso!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined


            })

        }
        catch (error) {


            toast.error("Dados inconsistentes. Erro ao logar!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined


            })
        }
    }

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            navigate('/home')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])


    return (
        <div className="container" id="container">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Criar conta</h1>
                    <div className="social-container">
                    </div>
                    <span>Use seus dados para criar o cadastro</span>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />

                    <button>Cadastrar</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Login</h1>
                    <div className="social-container">
                    </div>
                    <span>Use seu login</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <button>Entrar</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <img src="https://cdn.pixabay.com/photo/2020/11/06/12/13/toucan-5717629_960_720.png" alt="HTML5 Icon" width="50" height="50" />
                        <h1>Apuro</h1>
                        <p>Bem-vinde de volta!</p>
                        <button className="ghost" id="signIn">Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <img src="https://cdn.pixabay.com/photo/2020/11/06/12/13/toucan-5717629_960_720.png" alt="HTML5 Icon" width="50" height="50" />
                        <h1>Apuro</h1>
                        <p>Crie uma conta para começar a vender suas obras!</p>
                        <button className="ghost" id="signUp">Cadastre-se</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Login;
