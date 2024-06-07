import {Input} from "../../components/input/index.jsx";
import {Button} from "../../components/button/index.jsx";
import {useEffect, useRef, useState} from "react";

import { livro } from '../../../proxyState/index.js'
import {useSnapshot} from "valtio";

import isbn from 'node-isbn';
import {cadLivro} from "../../../requisicoes/livro.js";
import {resetLivro} from "../../utils/index.js";

export const CadLivro = () => {

    const snapLivro = useSnapshot(livro)

    const inputRef = useRef(null);

    useEffect(() => {
        if (snapLivro.isbn.length > 9){
            isbn.resolve(snapLivro.isbn, (error, book)=>{
                if (book) {
                    livro.titulo = book.title ? book.title : "";
                    livro.ano = book.publishedDate ? Number(book.publishedDate.substring(0, 4)) : null;
                    livro.genero = book.categories && book.categories.length > 0 ? book.categories[0] : "";
                    livro.autor = book.authors && book.authors.length > 0 ? book.authors[0] : "";
                    livro.editora = book.publisher ? book.publisher : "";
                }
            })
        }
    }, [snapLivro.isbn]);

    const formSubmit = (e) =>{
        e.preventDefault();
        cadLivro({
            isbn: snapLivro.isbn,
            titulo: snapLivro.titulo,
            editora: snapLivro.editora,
            ano: snapLivro.ano,
            genero: snapLivro.genero,
            autor: snapLivro.autor
        })
        resetLivro()
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const [error, setError] = useState(null);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            <form onSubmit={formSubmit}
                  className={'max-w-[800px] min-h-[500px] shadow-neutral-500'}>

                <p className={'text-3xl font-semibold text-center mb-5'}>Cadastar livro</p>

                <div className={'flex w-full gap-5'}>

                    <Input type={'text'} label={'ISBN:'} ref={inputRef} onChange={(e)=> livro.isbn = e.target.value} value={snapLivro.isbn}/>
                    <Input type={'text'} label={'Titulo:'} onChange={(e)=> livro.titulo = e.target.value} value={snapLivro.titulo}/>

                </div>

                <div className={'flex w-full gap-5'}>

                    <Input type={'text'} label={'Editora:'} onChange={(e)=> livro.editora = e.target.value} value={snapLivro.editora}/>
                    <Input type={'number'} label={'Ano:'} onChange={(e)=> livro.ano = e.target.value} value={snapLivro.ano}/>

                </div>

                <div className={'flex w-full gap-5'}>

                    <Input type={'text'} label={'Genero:'} onChange={(e)=> livro.genero = e.target.value} value={snapLivro.genero}/>
                    <Input type={'text'} label={'Autor:'} onChange={(e)=> livro.autor = e.target.value} value={snapLivro.autor}/>

                </div>


                {error && <p className={'text-red-500'}>{error}</p>}
                <Button>Cadastrar</Button>

            </form>
        </div>
    );
};