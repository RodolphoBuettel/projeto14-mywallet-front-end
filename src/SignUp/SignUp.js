import {Container, Name, Login, Button} from "../RepeatedStyles/SignInAndUpStyles";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
    return (
        <Container>
            <Name>
                <h1>MyWallet</h1>
            </Name>
            <Login>
                <div>
                    <input id="nome" type="nome"
                        // value={nome}
                        // onChange={
                        //     (e) => setNome(e.target.value)
                        // }
                        placeholder=" Nome"
                        required/>
                </div>
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
                        required
                    />
                </div>
                <div>
                    <input id="ConfirmeASenha" type="password"
                        // value={url}
                        // onChange={
                        //     (e) => setUrl(e.target.value)
                        // }
                        placeholder=" Confirme a senha"
                        required/>
                </div>
                <Button>
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