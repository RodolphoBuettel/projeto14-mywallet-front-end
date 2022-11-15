import { Button } from "../RepeatedStyles/SignInAndUpStyles";
import { Contain, Padronized } from "../RepeatedStyles/DepAndWith";

export default function Deposit(){
    return (
        <Contain>
            <div><h1>Nova Entrada</h1></div>
            <Padronized>
            <div>
                    <input id="nome" type="nome"
                        // value={nome}
                        // onChange={
                        //     (e) => setNome(e.target.value)
                        // }
                        placeholder=" Valor"
                        required/>
                </div>
                <div>
                    <input id="nome" type="nome"
                        // value={nome}
                        // onChange={
                        //     (e) => setNome(e.target.value)
                        // }
                        placeholder=" Descrição"
                        required/>
                </div>
                <Button>
                    <h2>Salvar entrada</h2>
                </Button>
            </Padronized>
        </Contain>
    )
}

