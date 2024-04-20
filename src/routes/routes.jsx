import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Login from "../pages/Login.jsx";
import {CadAluno} from "../pages/CadAluno.jsx";
import {CadLivro} from "../pages/CadLivro.jsx";
import {Home} from "../pages/Home.jsx";
import {PrivateRouter} from "./PrivateRouter.jsx";
import {CadEmprestimo} from "../pages/CadEmprestimo.jsx";
import {GerenciarEmprestimos} from "../pages/GerenciarEmprestimos.jsx";
import {HistoricoEmprestimos} from "../pages/HistoricoEmprestimos.jsx";

export const Rotas = () => {
    return (
        <Routes>
            <Route path={'/login'} element={<Login/>}/>

            <Route path={'/cadastro/aluno'} element={
                <PrivateRouter>
                    <title>Biblioteca - Cadastrar aluno</title>
                    <CadAluno/>
                </PrivateRouter>}/>

            <Route path={'/cadastro/livro'} element={
                <PrivateRouter>
                    <title>Biblioteca - Cadastrar livro</title>
                    <CadLivro/>
                </PrivateRouter>}/>

            <Route path={'/cadastro/emprestimo'} element={
                <PrivateRouter>
                    <title>Biblioteca - Registrar emprestimo</title>
                    <CadEmprestimo/>
                </PrivateRouter>}/>

            <Route path={'/gerenciar/emprestimo'} element={
                <PrivateRouter>
                    <title>Biblioteca - Gerenciar emprestimo</title>
                    <GerenciarEmprestimos/>
                </PrivateRouter>}/>

            <Route path={'/historico/emprestimo'} element={
                <PrivateRouter>
                    <title>Biblioteca - Historicos de emprestimos</title>
                    <HistoricoEmprestimos/>
                </PrivateRouter>}/>

            <Route path={'/'} element={
                <PrivateRouter>
                    <title>Início</title>
                    <Home/>
                </PrivateRouter>}/>
        </Routes>
    );
};