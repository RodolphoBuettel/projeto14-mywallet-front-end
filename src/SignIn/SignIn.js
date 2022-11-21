import { Container, Name, Login, Button } from "../RepeatedStyles/SignInAndUpStyles";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function Logar(e) {
        e.preventDefault();

        const URL = "http://localhost:5000/sign-in";

        const user = {
            email,
            password
        }

        const promisse = axios.post(URL, user);

        promisse.then((res) => {
            localStorage.setItem('name', JSON.stringify(res.data.name));
            localStorage.setItem('token', JSON.stringify(res.data.token));
            navigate("/extract");
        })

        promisse.catch((err) => console.log(err.response.data));

    }

    return (
        <Container>
            <Name>
                <h1>MyWallet</h1>
            </Name>
            <Login onSubmit={Logar}>
                <div>
                    <input id="email" type="email"
                        value={email}
                        onChange={
                            (e) => setEmail(e.target.value)
                        }
                        placeholder=" E-mail"
                        required
                    />
                </div>
                <div>
                    <input id="password" type="password"
                        value={password}
                        onChange={
                            (e) => setPassword(e.target.value)
                        }
                        placeholder=" Senha"
                        required />
                </div>
                <Button><h2>Entrar</h2></Button>
            </Login>
            <Register><Link style={{ textDecoration: 'none' }} to="/sign-up"><h3>Primeira vez? Cadastre-se!</h3></Link></Register>
        </Container>
    )
}

const Register = styled.div`
width: 227px;
text-align: center;
h3{
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
/* identical to box height */


color: #FFFFFF;
}
`
