/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components"
import { Container } from "../RepeatedStyles/SignInAndUpStyles"
import LogOff from "../Assets/LogOff.png";
import AddEntry from "../Assets/NewEntry.png";
import AddExit from "../Assets/NewExit.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Transaction from "./Transaction";

export default function Extract() {

    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);
    const [color, setColor] = useState("");

    const token = JSON.parse(localStorage.getItem('token'));
    const name = JSON.parse(localStorage.getItem('name'));

    function updateBalance(arr) {
        let soma = 0;
        arr.forEach(obj => {
            if (obj.type === "deposit") {
                soma += Number(obj.value)
            }
            else {
                soma -= Number(obj.value)
            }
        });
        if (balance > -1) {
            setColor("#03AC00");
        }
        else {
            setColor("#C70000");
        }

        return setBalance(soma);
    };

    useEffect(() => {

        const URL = "http://localhost:5000/extract";

        const promise = axios.get(
            URL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        );

        promise.then((res) => {
            setTransactions(res.data);
            updateBalance(transactions);

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
                {transactions.map((t, index) => <Transaction key={index} t={t} />)}
                <Saldo><h3>SALDO</h3><Balance color={color}>{parseFloat(balance).toFixed(2)}</Balance></Saldo>
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
position:relative;
    width: 326px;
height: 446px;
margin-top: -50px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
margin-bottom:20px;
flex-direction: column;
overflow: scroll;
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
const Saldo = styled.div`
position: absolute;
display:flex;
justify-content: space-around;
width: 326px;
background-color: white;
z-index: 1;
bottom: 10px;
h3{
    margin-right: 10px;
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 20px;
color: #000000;
}
`
const Balance = styled.div`
margin-right: 10px;
color:${props => props.color};
font-size: 25px;
`