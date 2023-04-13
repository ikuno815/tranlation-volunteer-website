import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { createContext, useContext, useState, useEffect } from 'react';


const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    //move the authentification part to server.js
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const authentificatedUser = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return authentificatedUser;
    }, [])

    return <UserContext.Provider value={{createUser, loginUser, user, logOut}}>
        {children}
    </UserContext.Provider>
}

export const UserAuth = () => {
    return useContext(UserContext);
}