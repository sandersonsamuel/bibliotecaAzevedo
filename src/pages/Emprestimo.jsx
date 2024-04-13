import {Input} from "../components/input/index.jsx";
import {Button} from "../components/button/index.jsx";
import {useEffect, useRef, useState} from "react";
import {alunos, livros} from "../proxyState/index.js";
import {useSnapshot} from "valtio";
import {TextSelect} from "../components/textSelect/index.jsx";
import {Select} from "../components/select/Select/Select.jsx";
import moment from "moment";

export const Emprestimo = () => {

    const snapLivros = useSnapshot(livros);
    const snapAlunos = useSnapshot(alunos);

    const [idAluno, setIdAluno] = useState(null);
    const [idLivro, setIdLivro] = useState(null);
    const [tempoEmprestimo, setTempoEmprestimo] = useState(null);


    const selectData = [
        {
            name: '1 Semana',
            value: moment().add(1, 'week').format('YYYY-MM-DD'),
        },
        {
            name: '2 Semanas',
            value: moment().add(2, 'weeks').format('YYYY-MM-DD'),
        },
        {
            name: '1 Mês',
            value: moment().add(1, 'month').format('YYYY-MM-DD'),
        }
    ]

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            <form
                  className={'max-w-[800px] min-w-[500px] min-h-[500px] shadow-neutral-500'}>

                <p className={'text-3xl font-semibold text-center mb-5'}>Registrar Empréstimo</p>

                <div className={'flex flex-col w-full'}>

                    <TextSelect label={'Aluno: '} type={'text'} array={snapAlunos.data} visibleItem={'nome'} getId={setIdAluno} id={'id_aluno'} />

                    <TextSelect label={'Livro: '} type={'text'} array={snapLivros.data} visibleItem={'titulo'} getId={setIdLivro} id={'id_livro'} />

                    <Select objeto={selectData} label={'Empréstimo de:'} id={'emprestimo'} setValue={setTempoEmprestimo}/>

                </div>

                <Button>Registrar</Button>

            </form>
        </div>
    );
};