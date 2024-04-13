import axios from "axios";
import toast from "react-hot-toast";
import {api} from "../api/index.js";
import {livro} from "../proxyState/index.js";

export const cadLivro = () =>{

    api.post("/cadLivro", livro)
        .then(response => {
            toast.success("Livro Cadastrado!");
        }).catch((error) => {
            console.error(error)
            toast.error(error.response.data.error);
    })
}
