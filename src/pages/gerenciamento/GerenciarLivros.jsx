import {Table} from "../../components/table/Index.jsx";
import {livros} from "../../../proxyState/index.js";
import {useSnapshot} from "valtio";
import {useEffect, useState} from "react";
import {Modal} from "react-responsive-modal";
import {Button} from "../../components/button/index.jsx";
import {Input} from "../../components/input/index.jsx";
import {deleteLivro, updateLivro} from "../../../requisicoes/livro.js";

export const GerenciarLivros = () => {

    const snapLivros = useSnapshot(livros);

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)

    const [livroSelected, setLivroSelected] = useState(null);

    const [livro, setLivro] = useState({
        titulo: '',
        autor: '',
        editora: '',
        genero: '',
        isbn: '',
        ano: '',
    })

    useEffect(() => {
        if (livroSelected) {
            setLivro({titulo: livroSelected.titulo, autor: livroSelected.autor, editora: livroSelected.editora, genero: livroSelected.genero, isbn: livroSelected.isbn, ano: livroSelected.ano})
        }
    }, [livroSelected]);


    const openAndSelectLivros = (livro) => {
        setIsOpenModal(true)
        setLivroSelected(livro)
    }

    console.log(livro)

    const handleEditLivro = () => {
        updateLivro(livroSelected.id, livro)
        setIsOpenModalEdit(false)
        setIsOpenModal(false)
    }

    const handleDeleteLivro = () => {
        deleteLivro(livroSelected.id)
        setIsOpenModalDelete(false)
        setIsOpenModal(false)
    }

    return (
        <div className={'w-full flex flex-col items-center mt-16'}>

            <p className={'text-4xl font-semibold mb-16'}>Gerenciar Livros</p>

            <Table labels={['titulo', 'autor', 'editora', 'genero', 'isbn']} data={livros.data} actions={true} OpenAndSelect={openAndSelectLivros}></Table>

            <Modal open={isOpenModal} onClose={() => setIsOpenModal(!isOpenModal)}>
                <h1 className={'text-xl font-bold'}>Opções: </h1>

                <div className={'w-[400px]'}>
                    <Button onClick={() => setIsOpenModalEdit(true)}>Editar livro</Button>
                    <Button onClick={() => setIsOpenModalDelete(true)}>Deletar livro</Button>
                </div>
            </Modal>

            <Modal
                open={isOpenModalEdit}
                onClose={()=> setIsOpenModalEdit(!isOpenModalEdit)}
                center={true}>

                <p className={'w-[400px] mr-10'}>Editando livro: <b>{livroSelected?.titulo}</b></p>

                <Input label={'Título:'} onChange={(e) => setLivro({...livro, titulo: e.target.value})} value={livro.titulo} placeholder={livroSelected?.titulo}/>
                <Input label={'Autor:'} onChange={(e) => setLivro({...livro, autor: e.target.value})} value={livro.autor} placeholder={livroSelected?.autor}/>
                <Input label={'Editora:'} onChange={(e) => setLivro({...livro, editora: e.target.value})} value={livro.editora} placeholder={livroSelected?.editora}/>
                <Input label={'Genero:'} onChange={(e) => setLivro({...livro, genero: e.target.value})} value={livro.genero} placeholder={livroSelected?.genero}/>
                <Input label={'ISBN:'} onChange={(e) => setLivro({...livro, isbn: e.target.value})} value={livro.isbn} placeholder={livroSelected?.isbn}/>

                <Button onClick={handleEditLivro}>Editar livro</Button>

            </Modal>

            <Modal
                open={isOpenModalDelete}
                onClose={() => setIsOpenModalDelete(!isOpenModalDelete)}
                center={true}>
                <div className={'w-[600px]'}>
                    <h1 className={'text-xl font-bold'}>Tem certeza que deseja Excluir esse livo?</h1>

                    <p className={'my-2 text-justify'}>Ao clicar em deletar livro você vai apagar todos os dados do
                        livro {livroSelected?.titulo} incluindo os empréstimos dele, e não será possivel
                        recuperar posteriormente, tem certeza que deseja deletar?</p>

                    <Button onClick={handleDeleteLivro}>Sim, deletar livro</Button>
                </div>

            </Modal>

        </div>
    );
};
