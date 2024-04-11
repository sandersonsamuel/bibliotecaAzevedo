import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Login from "../pages/Login.jsx";
import CadAluno from "../pages/CadAluno.jsx";
import CadLivro from "../pages/CadLivro.jsx";
import {Home} from "../pages/Home.jsx";
import {PrivateRouter} from "./PrivateRouter.jsx";

export const Rotas = () => {
    return (
        <Routes>
            <Route path={'/login'} element={<Login/>}/>

            <Route path={'/cadAluno'} element={
                <PrivateRouter>
                    <CadAluno/>
                </PrivateRouter>}/>

            <Route path={'/cadLivro'} element={
                <PrivateRouter>
                    <CadLivro/>
                </PrivateRouter>}/>

            <Route path={'/'} element={
                <PrivateRouter>
                    <Home/>
                </PrivateRouter>}/>
        </Routes>
    );
};