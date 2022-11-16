// import {UserProvider} from "../Context/ContextApi";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Extract from "../Extract/Extract";
import Deposit from "../Deposit/Deposit";
import Withdraw from "../Withdraw/Withdraw";
import GlobalStyle from "../GlobalStyle";
import Acess from "../Acess/Acess";

export default function App() {
    return(
        // <UserProvider>
         <BrowserRouter>
            <GlobalStyle/>
                <Routes>
                <Route path="/"
                        element={<Acess/>}/>
                    <Route path="sign-in"
                        element={<SignIn/>}/>
                    <Route path="sign-up"
                        element={<SignUp/>}/>
                    <Route path="extract"
                        element={<Extract/>}/>
                    <Route path="deposit"
                        element={<Deposit/>}/>
                    <Route path="withdraw"
                        element={<Withdraw/>}/>
                </Routes>
        </BrowserRouter>
        // </UserProvider>
    )
}
