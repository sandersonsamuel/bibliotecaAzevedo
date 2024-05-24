import {Table} from "../../components/table/Index.jsx";
import {alunos} from "../../../proxyState/index.js";
import {useSnapshot} from "valtio";
import {Modal} from "react-responsive-modal";
import {useEffect, useState} from "react";
import {Button} from "../../components/button/index.jsx";
import {deletarAluno, editarAluno} from "../../../requisicoes/aluno.js";
import {Input} from "../../components/input/index.jsx";

export const GerenciarAlunos = () => {

    const snapAlunos = useSnapshot(alunos);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)
    const [alunoSelected, setAlunoSelected] = useState(null)

    const [aluno, setAluno] = useState({
        nome: '',
        email: '',
        cpf: '',
    })

    console.log(aluno)

    useEffect(() => {
        if (alunoSelected) {
            setAluno({nome: alunoSelected.nome, email: alunoSelected.email, cpf: alunoSelected.cpf})
        }
    }, [alunoSelected]);

    const openAndSelectAlunos = (aluno) => {
        setIsOpenModal(true)
        setAlunoSelected(aluno)
    }

    const handleDeleteAluno = async () => {
        await deletarAluno(alunoSelected.id)
        setIsOpenModalDelete(false)
    }

    const handleEditAluno = async () => {
        await editarAluno(alunoSelected.id, aluno)
        setIsOpenModalEdit(false)
    }

    return (
        <div className={'w-full flex flex-col items-center mt-16'}>

            <p className={'text-4xl font-semibold mb-16'}>Gerenciar Alunos</p>

            <Table labels={['nome', 'email', 'cpf']} actions={true} data={snapAlunos.data} OpenAndSelect={openAndSelectAlunos}/>

            <Modal open={isOpenModal} onClose={() => setIsOpenModal(!isOpenModal)}>
                <h1 className={'text-xl font-bold'}>Opções</h1>

                <div className={'w-[400px]'}>
                    <Button onClick={()=> setIsOpenModalEdit(true)}>Editar Aluno</Button>
                    <Button onClick={()=> setIsOpenModalDelete(true)}>Deletar Aluno</Button>
                </div>
            </Modal>

            <Modal open={isOpenModalDelete} onClose={() => setIsOpenModalDelete(!isOpenModalDelete)} center={true}>
                <h1 className={'text-xl font-bold'}>Tem certeza que deseja Excluir esse aluno?</h1>

                <div className={'w-[600px]'}>
                    <p className={'my-2 text-justify'}>Ao clicar em deletar aluno você vai apagar todos os dados do aluno(a) {alunoSelected?.nome} incluindo os empréstimos realizados por ele, e não será possivel recuperar posteriormente, tem certeza que deseja deletar?</p>
                    <Button onClick={handleDeleteAluno}>Sim, deletar aluno(a)</Button>
                </div>
            </Modal>

            <Modal open={isOpenModalEdit} onClose={()=> setIsOpenModalEdit(!isOpenModalEdit)} center={true}>

                <p className={'w-[400px] mr-10'}>Editando aluno(a): <b>{alunoSelected?.nome}</b></p>

                <Input label={'Nome:'} onChange={(e)=> setAluno({...aluno, nome: e.target.value})} value={aluno.nome}/>
                <Input label={'Email:'} onChange={(e)=> setAluno({...aluno, email: e.target.value})} value={aluno.email}/>
                <Input label={'Cpf:'} onChange={(e)=> setAluno({...aluno, cpf: e.target.value})} value={aluno.cpf}/>

                <Button onClick={handleEditAluno}>Editar Aluno</Button>

            </Modal>

        </div>
    );
};
