import {useEffect} from "react";
import {getAllLivrosService} from "../services/livros.services.js";
import {alunos, livros} from "../src/proxyState/index.js";
import {getAllAlunosService} from "../services/alunos.services.js";
import {useLocation} from "react-router-dom";

export const Provider = ({children}) =>{

    const location = useLocation()

    useEffect(() => {
        onloadData()
    }, [location]);

    const onloadData = async () =>{
        const livrosData = await getAllLivrosService();

        if (livrosData){
            livros.data = livrosData
        }

        const alunosData = await getAllAlunosService();

        if (alunosData){
            alunos.data = alunosData
        }
    }

    return children


}


