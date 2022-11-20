import styled from "styled-components"
import {Link} from "react-router-dom";

export default function Acess() {
    return (
        <Contains>
            <Welcome>
                <h1>Seja bem-vindo(a) ao MyWallet</h1>
            </Welcome>
            <Link  style={{ textDecoration: 'none' }} to = "/sign-in"><Menssagem>
                <h2>Clique aqui para acessar sua Wallet</h2>
            </Menssagem></Link>
        </Contains>

    )
}

const Menssagem = styled.div `
    width: 326px;
height: 46px;
left: 23px;
top: 375px;
display: flex;
align-items: center;
justify-content: center;
background: #A328D6;
border-radius: 5px;
h2{
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;

color: #FFFFFF;
}
`
const Contains = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
background-color: rgb(140,17,190);
`
const Welcome = styled.div`
text-align: center;
    h1{

    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 40px;

margin-bottom: 40px;
color: #FFFFFF;
}
`