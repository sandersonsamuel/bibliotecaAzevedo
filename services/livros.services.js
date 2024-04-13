import {api} from "../src/api/index.js"
import {networkError} from "../src/utils/index.js";

export const getAllLivrosService = async () => {
    try {
        const { status, data } = await api.get('/livros');

        if (status === 200) return data;
    } catch (e) {
        networkError(e);
    }
};