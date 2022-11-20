import styled from "styled-components"
import { Container } from "../RepeatedStyles/SignInAndUpStyles"
import LogOff from "../Assets/LogOff.png";
import AddEntry from "../Assets/NewEntry.png";
import AddExit from "../Assets/NewExit.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/ContextApi";
import axios from "axios";
import Transaction from "./Transaction";

export default function Extract() {

    // const { name } = useContext(UserContext);

    const [transactions, setTransactions] = useState([]);
    // const [rendTrans, setRendTrans] = useState("Não há registros de entrada ou saída");

    const token = JSON.parse(localStorage.getItem('token'));
    const name = JSON.parse(localStorage.getItem('name'));

    const URL = "http://localhost:5000/extract";

    useEffect(()=>{

        const promise = axios.get(
            URL, {headers: {
                'Authorization': `Bearer ${token}`
            }}
        );
    
        promise.then((res) => {
            setTransactions(res.data);
        });
    
        promise.catch((err) => {
            console.log(err.response.data);
        });
    
    }, [token]);

    return (
        <Container>
            <Message>
                <h1>Olá, {name}</h1>
                <LogOut>
                    <img src={LogOff}
                        alt="logOff" />
                </LogOut>
            </Message>
            <Records>
                {transactions.map((t, index)=> <Transaction key={index} t={t}/>)}
            </Records>
            <Actions>
                <div>
                    <Link style={{ textDecoration: 'none' }} to="/deposit">
                        <img src={AddEntry}
                            alt="entry" />
                        <p>Nova
                            Entrada</p>
                    </Link>
                </div>
                <div>
                    <Link style={{ textDecoration: 'none' }} to="/withdraw">
                        <img src={AddExit}
                            alt="exit" />
                        <p>Nova
                            Saída
                        </p>
                    </Link>
                </div>
            </Actions>
        </Container>
    )
}

const Message = styled.div`
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
const LogOut = styled.div`
    margin-right: 30px;
`
const Records = styled.div`
    width: 326px;
height: 446px;
margin-top: -50px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
margin-bottom:20px;
flex-direction: column;
overflow: hidden;
`
const Actions = styled.div`
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