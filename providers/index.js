import {useEffect} from "react";
import {getAllLivrosService} from "../services/livros.services.js";
import {alunos, livros, User} from "../proxyState/index.js";
import {getAllAlunosService} from "../services/alunos.services.js";
import {useLocation} from "react-router-dom";
import {getAllEmprestimosService} from "../services/emprestimos.services.js";
import {useSnapshot} from "valtio";

export const Provider = ({children}) =>{

    const location = useLocation()
    const snapUser = useSnapshot(User)

    useEffect(() => {

        if (snapUser.isLoggedIn) onloadData()

        if(!snapUser.isLoggedIn) location.href="/login"

    }, [location, snapUser.isLoggedIn]);

    const onloadData = async () =>{

        const livrosData = await getAllLivrosService();

        if (livrosData){
            livros.data = livrosData
        }

        const alunosData = await getAllAlunosService();

        if (alunosData){
            alunos.data = alunosData
        }

        //Manda pra um state global
        getAllEmprestimosService()

    }

    return children


}


