import {User} from '../proxyState/index.js'
import {useSnapshot} from "valtio";
import {Navigate} from "react-router-dom";

export const PrivateRouter = ({children}) => {

    const snapUser = useSnapshot(User)

    return snapUser.isLogged ? children : <Navigate to="/login" />
};