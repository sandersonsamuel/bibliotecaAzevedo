import {api} from "../api/index.js"
import {networkError} from "../src/utils/index.js";
import {emprestimos} from "../proxyState/index.js";
import moment from "moment";

export const getAllEmprestimosService = async () => {

    try {
        const response = await api.get('/emprestimos');
        emprestimos.data = response.data;
    }catch(error){
        networkError(error)
    }

};
