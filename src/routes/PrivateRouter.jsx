import {User} from '../../proxyState/index.js'
import {useSnapshot} from "valtio";
import {Navigate} from "react-router-dom";
import {Layout} from "../components/layout/index.jsx";

export const PrivateRouter = ({children}) => {

    const snapUser = useSnapshot(User)

    return (
        snapUser.isLoggedIn ? <Layout>{children}</Layout> : <Navigate to="/login" />
    )
};