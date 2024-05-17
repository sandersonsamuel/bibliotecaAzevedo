import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Login from "../pages/Login.jsx";
import {CadAluno} from "../pages/cadastro/CadAluno.jsx";
import {CadLivro} from "../pages/cadastro/CadLivro.jsx";
import {Home} from "../pages/Home.jsx";
import {PrivateRouter} from "./PrivateRouter.jsx";
import {CadEmprestimo} from "../pages/cadastro/CadEmprestimo.jsx";
import {GerenciarEmprestimos} from "../pages/gerenciamento/GerenciarEmprestimos.jsx";
import {HistoricoEmprestimos} from "../pages/historico/HistoricoEmprestimos.jsx";
import {GerenciarAlunos} from "../pages/gerenciamento/GerenciarAlunos.jsx";
import {GerenciarLivros} from "../pages/gerenciamento/GerenciarLivros.jsx";

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

            <Route path={'/gerenciar/aluno'} element={
                <PrivateRouter>
                    <title>Biblioteca - Gerenciar alunos</title>
                    <GerenciarAlunos/>
                </PrivateRouter>
            }/>

            <Route path={'/gerenciar/livro'} element={
                <PrivateRouter>
                    <title>Biblioteca - Gerenciar livros</title>
                    <GerenciarLivros/>
                </PrivateRouter>
            }/>

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