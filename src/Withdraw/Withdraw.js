import { Contain, Padronized } from "../RepeatedStyles/DepAndWith";
import { Button } from "../RepeatedStyles/SignInAndUpStyles";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Withdraw(){

    const [valueInput, setValueInput] = useState("");
    const [description, setDescription] = useState("");

    const token = JSON.parse(localStorage.getItem('token'));

    const navigate = useNavigate();
    
    function Deposit(e){
        e.preventDefault();

        const URL = "http://localhost:5000/extract";

        const value = parseInt(valueInput);

        const deposited = {
            value,
            description,
            type: "withdrawal"
        }

        const promisse = axios.post(URL, deposited, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

         promisse.then((res) => {
            console.log(res.data);
             navigate("/extract");
        });
       promisse.catch((err) => {
        console.log(err.data);
       });
    }

    return (
            <Contain>
                <div><h1>Nova Saída</h1></div>
                <Padronized onSubmit={Deposit}>
                <div>
                        <input id="valor" type="number" pattern="[0-9]+([,\.][0-9]+)?" min="0" step="0.010"
                            value={valueInput}
                            onChange={
                                (e) => setValueInput(e.target.value)
                            }
                            placeholder=" Valor"
                            required/>
                    </div>
                    <div>
                        <input id="nome" type="nome"
                            value={description}
                            onChange={
                                (e) => setDescription(e.target.value)
                            }
                            placeholder=" Descrição"
                            required/>
                    </div>
                    <Button type="submit">
                        <h2>Salvar saída</h2>
                    </Button>
                </Padronized>
            </Contain>
    )
}