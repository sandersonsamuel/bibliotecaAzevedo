import {useState} from "react";
import {alunos, emprestimos} from "../proxyState/index.js";
import {useSnapshot} from "valtio";
import {TextSelect} from "../components/textSelect/index.jsx";
import {Table} from "../components/table/index.jsx";

export const GerenciarEmprestimos = () => {

    const snapAlunos = useSnapshot(alunos);
    const snapEmprestimos = useSnapshot(emprestimos);
    const [idAluno, setIdAluno] = useState(null);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            <form
                  className={'md:max-w-[500px] shadow-neutral-500 lg:max-w-[700px] xl:w-[800px] xl:max-w-[900px]'}>

                <p className={'text-3xl font-semibold text-center mb-5'}>Gerenciar Empréstimo</p>

                <div className={'flex flex-col w-full'}>

                    <TextSelect label={'Emprestimo do aluno: '} type={'text'} array={snapAlunos.data} visibleItem={'nome'} getId={setIdAluno} id={'id_aluno'} />

                    <Table list={idAluno ? snapEmprestimos.getById(idAluno) : snapEmprestimos.data}/>

                </div>

            </form>
        </div>
    );
};