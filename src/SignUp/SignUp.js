import {Container, Name, Login, Button} from "../RepeatedStyles/SignInAndUpStyles";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function SignUp() {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    function Register(e){
        e.preventDefault();
        console.log(e);

        const URL = "http://localhost:5000/sign-up";

        const user = {
            name: name,
            email: email,
            password: password,
            confirmedPassword: confirmedPassword
        }

        console.log(user);
        const promisse = axios.post(URL, user);

        promisse.then((res) => {
            console.log(res);
            navigate("/sign-in");
        })

        promisse.catch((err) => console.log(err.response.data));
    }  

    return (
        <Container>
            <Name>
                <h1>MyWallet</h1>
            </Name>
            <Login onSubmit={Register}>
                <div>
                    <input id="nome" type="nome"
                        value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        placeholder=" Nome"
                        required/>
                </div>
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
                        required
                    />
                </div>
                <div>
                    <input id="ConfirmeASenha" type="password"
                        value={confirmedPassword}
                        onChange={
                            (e) => setConfirmedPassword(e.target.value)
                        }
                        placeholder=" Confirme a senha"
                        required/>
                </div>
                <Button type = "submit">
                    <h2>Cadastrar</h2>
                </Button>
            </Login>
            <Logar><Link to="/sign-in"><h3>Já tem uma conta? Entre agora!</h3></Link></Logar>
        </Container>
    )
}

const Logar = styled.div`
width: 227px;
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