import { Container, Name, Login, Button } from "../RepeatedStyles/SignInAndUpStyles";
import styled from "styled-components";
import {Link} from "react-router-dom";

export default function SignIn() {
    return (
        <Container>
            <Name>
                <h1>MyWallet</h1>
            </Name>
            <Login>
                <div>
                    <input id="email" type="email"
                        // value={email}
                        // onChange={
                        //     (e) => setEmail(e.target.value)
                        // }
                        placeholder=" E-mail"
                        required
                    />
                </div>
                <div>
                    <input id="password" type="password"
                        // value={senha}
                        // onChange={
                        //     (e) => setSenha(e.target.value)
                        // }
                        placeholder=" Senha"
                        required/>
                </div>
                <Button><h2>Entrar</h2></Button>
            </Login>
            <Register><Link to="/sign-up"><h3>Primeira vez? Cadastre-se!</h3></Link></Register>
        </Container>
    )
}

const Register = styled.div`
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
