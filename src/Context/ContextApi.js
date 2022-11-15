import { createContext, react } from "react";

const UserContext = createContext();

function UserProvider({children}){
    return (
        <UserContext.Provider>

        </UserContext.Provider>
    );
}

export default UserContext;

export {UserProvider};
