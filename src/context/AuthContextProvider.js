import { useState, useContext, createContext, useEffect} from 'react';

const LOCAL_STORAGE_AUTH_KEY = "authState"

const AuthContext = createContext()
const AuthContextDispatch = createContext()

const AuthContextProvider = ({children}) => {
    const [state, setState] = useState(false)

    useEffect(() => {
        const getData = localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)
        const userData = JSON.parse(getData) || false
        setState(userData)
    }, [])

    useEffect(() => {
        const data = JSON.stringify(state)
        localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data)
    }, [state])

    return (
        <AuthContext.Provider value={state}>
            <AuthContextDispatch.Provider value={setState}>
                {children}
            </AuthContextDispatch.Provider>
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext)
export const useAuthDispatch = () => useContext(AuthContextDispatch)