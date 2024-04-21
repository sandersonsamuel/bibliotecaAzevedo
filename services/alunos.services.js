import {api} from "../api/index.js"
import {networkError} from "../src/utils/index.js";

export const getAllAlunosService = async () => {
    try {
        const { status, data } = await api.get('/alunos');

        if (status === 200) return data;
    } catch (e) {
        networkError(e);
    }
};