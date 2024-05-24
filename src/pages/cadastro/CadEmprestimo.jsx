import {Button} from "../../components/button/index.jsx";
import {useState} from "react";
import {alunos, livros} from "../../../proxyState/index.js";
import {useSnapshot} from "valtio";
import {TextSelect} from "../../components/textSelect/index.jsx";
import moment from "moment";
import {cadEmprestimo} from "../../../requisicoes/emprestimo.js";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';

export const CadEmprestimo = () => {

    const snapLivros = useSnapshot(livros);
    const snapAlunos = useSnapshot(alunos);

    const [idAluno, setIdAluno] = useState(null);
    const [idLivro, setIdLivro] = useState(null);
    const [tempoEmprestimo, setTempoEmprestimo] = useState(moment().add(1, 'week').format('YYYY-MM-DD'));

    const handleFormSubmit =  (e) =>{

        e.preventDefault()

        const aluno = {
            id_aluno: Number(idAluno),
            id_livro: Number(idLivro),
            data_devolucao: new Date (tempoEmprestimo)
        }

        cadEmprestimo(aluno)

    }

    const selectData = [
        {
            label: '1 Semana',
            value: moment().add(1, 'week').format('YYYY-MM-DD'),
        },
        {
            label: '2 Semanas',
            value: moment().add(2, 'weeks').format('YYYY-MM-DD'),
        },
        {
            label: '1 Mês',
            value: moment().add(1, 'month').format('YYYY-MM-DD'),
        }
    ]

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            <form onSubmit={handleFormSubmit}
                  className={'max-w-[800px] min-w-[500px] min-h-[500px] shadow-neutral-500'}>

                <p className={'text-3xl font-semibold text-center mb-5'}>Registrar Empréstimo</p>

                <div className={'flex flex-col w-full'}>

                    <TextSelect label={'Aluno: '} type={'text'} array={snapAlunos.data} visibleItem={'nome'} getId={setIdAluno} id={'id'} />

                    <TextSelect label={'Livro: '} type={'text'} array={snapLivros.data} visibleItem={'titulo'} getId={setIdLivro} id={'id'} />

                    <Dropdown options={selectData} onChange={(option) => setTempoEmprestimo(option.value)} value={selectData[0].value} placeholder="Select an option" />

                </div>

                <Button>Registrar</Button>

            </form>
        </div>
    );
};