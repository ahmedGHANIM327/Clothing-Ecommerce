import { createContext, useState ,useEffect} from "react";

import { onAuthStateChangedListener ,createUserDocumentFromAuth} from "../utils/firebase/firebase";

// Actual value of user context
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser: () => null
});

export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser}

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            // If user not null add it to collection users
            if(user) 
            {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
        })
        return unsubscribe
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}