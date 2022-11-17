import styled from "styled-components"
import {Container} from "../RepeatedStyles/SignInAndUpStyles"
import LogOff from "../Assets/LogOff.png";
import AddEntry from "../Assets/NewEntry.png";
import AddExit from "../Assets/NewExit.png";
import {Link} from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Context/ContextApi";

export default function Extract() {

    const {name} = useContext(UserContext);

    return (
        <Container>
            <Message>
                <h1>Olá, {name}</h1>
                <LogOut>
                    <img src={LogOff}
                        alt="logOff"/>
                </LogOut>
            </Message>
            <Records>
                <h3>Não há registros de entrada ou saída</h3>
            </Records>
            <Actions>
                <div>
                    <Link to="/deposit">
                        <img src={AddEntry}
                            alt="entry"/>
                        <p>Nova
                         Entrada</p>
                    </Link>
                </div>
                <div>
                    <Link to="/withdraw">
                        <img src={AddExit}
                            alt="exit"/>
                        <p>Nova
                        Saída
                        </p>
                    </Link>
                </div>
            </Actions>
        </Container>
    )
}

const Message = styled.div `
    width: 100%;
height: 31px;
position: fixed;
top: 10px;
left: 15px;
display: flex;
justify-content: space-between;
h1{
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
}
`
const LogOut = styled.div `
    margin-right: 30px;
`
const Records = styled.div `
    width: 326px;
height: 446px;
margin-top: -50px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
margin-bottom:20px;
h3{
    width: 180px;
height: 46px;
margin: auto auto;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: center;

color: #868686;
}
`
const Actions = styled.div `
margin-bottom: -100px;
display: flex;
    div{
        width: 155px;
height: 114px;
margin-right: 10px;

background: #A328D6;
border-radius: 5px;
        img{
            margin-left: 10px;
            margin-top: 10px;
        }
        p{
            width: 64px;
            height: 40px;
            margin-top: 20px;
            margin-left:10px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;

            color: #FFFFFF;
        }
    }
`
