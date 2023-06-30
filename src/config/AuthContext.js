import { createContext, useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { throwError } from "./helper";

export const AuthContext = createContext({});
function AuthContextProvider({ children }) {
    const { accessToken, userToken } = useParams();

    useEffect(() => {
        if (!accessToken || !userToken) { //check token 
            throwError(401);
        }
    }, [accessToken, userToken])

    const userInfo = useMemo(() => {
        console.info("AuthContext Updated");
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem('userToken', userToken);
        return { access_token: accessToken, userToken: userToken }
    }, [accessToken, userToken]);
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;