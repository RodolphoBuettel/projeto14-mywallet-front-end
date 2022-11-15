import { Contain, Padronized } from "../RepeatedStyles/DepAndWith";
import { Button } from "../RepeatedStyles/SignInAndUpStyles";

export default function Withdraw(){
    return (
            <Contain>
                <div><h1>Nova Saída</h1></div>
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
                        <h2>Salvar saída</h2>
                    </Button>
                </Padronized>
            </Contain>
    )
}