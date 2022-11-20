/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styled from "styled-components";


export default function Transaction({ t }) {

    const { value, type, description, time } = t;

    const valueDecimal = value.toFixed(2);
    const [color, setColor] = useState("");

    useEffect(() => {
        if (type === "deposit") {
            setColor("#03AC00");
        } else {
            setColor("#C70000");
        }
       
    }, [type]);


    return (
        <Cont>
            <Day>{time}</Day> <Description>{description}</Description> <Value color={color}>{valueDecimal}</Value>
        </Cont>

    )
}

const Cont = styled.div`
display: flex;
flex-direction: inline;
justify-content: space-between;
h3{
    font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 19px;


}
`
const Value = styled.h3`
color:${props => props.color};
margin-right: 10px;
margin-left: 10px;
margin-top: 20px;
`

const Description = styled.h3`
margin-right: 10px;
margin-left: -100px;
margin-top: 20px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #000000;
`
const Day = styled.h3`
    margin-right: 10px;
margin-left: 10px;
margin-top: 20px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #C6C6C6;
`