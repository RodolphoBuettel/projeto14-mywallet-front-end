import styled from "styled-components";

export const Container = styled.div `
width: 100%;
min-height: 100vh;
background-color: rgb(140,17,190);
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
`
export const Name = styled.div `
    h1{
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    margin-bottom: 20px;
    color: #FFFFFF;
    }
`
export const Login = styled.form`

    input{
    background: #FFFFFF;
    border: none;
    width: 326px;
    height: 58px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;

color: #000000;
    }
   
`
export const Button = styled.button`
width: 326px;
height: 46px;
border: none;
margin-bottom: 20px;
background: #A328D6;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
h2{
    width: 150px;
height: 23px;

font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;

color: #FFFFFF;
}
`