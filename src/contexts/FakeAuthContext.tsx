import { createContext, useContext, useReducer } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string, password: string) => void;
    logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState = {
    isAuthenticated: false,
    user: null
}

function reducer(state, action) {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload, isAuthenticated: true };
        case "logout":
            return { ...state, user: null, isAuthenticated: false };
        default:
            throw new Error("Unknown Action!")
    }

}

const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
};

export function AuthProvider({ children }) {
    const [{ isAuthenticated, user }, dispatch] = useReducer(reducer, initialState);

    function login(email, password) {
        if (email === FAKE_USER.email && password === FAKE_USER.password) {
            dispatch({ type: "login", payload: FAKE_USER });
        }
    }

    function logout(email, password) {
        dispatch({ type: "logout" });
    }

    return <AuthContext.Provider value={{
        isAuthenticated, login, logout
    }}>
        {children}
    </AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error("Context was used outside Auth provider");
    return context;
}