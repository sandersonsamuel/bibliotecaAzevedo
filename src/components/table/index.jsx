import moment from "moment";
import {useState} from "react";
import {Modal} from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import {Button} from "../button/index.jsx";
import '../../App.css'
import {devolverLivro, renovarEmprestimo} from "../../../requisicoes/emprestimo.js";
import {CgMoreVerticalO} from "react-icons/cg";
import Dropdown from "react-dropdown";
import classNames from "classnames";

export const Table = ({list, action}) => {

    const [open, setOpen] = useState(false)
    const [openDrop, setOpenDrop] = useState(false)
    const [openModalDevolver, setOpenModalDevolver] = useState(false)
    const [tempoEmprestimo, setTempoEmprestimo] = useState(null)

    const [renovacao, setRenovacao] = useState({
        id: '',
        nome: '',
        titulo: '',
        data_devolucao: ''
    })

    const onCloseModal = () => {
        setOpen(false)
        setOpenModalDevolver(false)
    }

    const openDropDown = (item) =>{
        setOpenDrop(true)
        setRenovacao({
            id: item.id_emprestimo,
            nome: item.nome,
            titulo: item.titulo,
            data_devolucao: tempoEmprestimo,
        })
    }

    const handleDevolverLivro = async (e) => {
        e.preventDefault()
        await devolverLivro(renovacao.id)
        setTimeout(()=>{
            location.reload()
        }, [1000])
    }

    const handleRenovarEmprestimo = async (e) => {
        e.preventDefault();
        await renovarEmprestimo(tempoEmprestimo, renovacao.id)
        setTimeout(()=>{
            location.reload()
        }, [1000])
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

        <div className="overflow-x-auto max-h-[300px] w-full relative">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Titulo
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Aluno
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Empréstimo
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Devolução
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Renovações
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    {
                        action &&
                        <th scope="col" className="px-6 py-3">
                            Ações
                        </th>
                    }
                </tr>
                </thead>
                <tbody>

                {list.map((item, index) => (
                    <tr key={index} className="bg-white border-b">

                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {item.titulo}
                        </th>

                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {item.nome}
                        </th>

                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {moment(item.data_emprestimo).format(('DD/MM/YYYY'))}
                        </th>

                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {moment(item.data_devolucao).format(('DD/MM/YYYY'))}
                        </th>

                        <th scope="row" className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap">
                            {item.renovacoes}
                        </th>

                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                            <p className={classNames(item.status == 'Devolvido' ? 'text-green-600' : 'text-yellow-600')}>
                                {item.status}
                            </p>
                        </th>
                        {
                            action &&
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-xl fonr-bold relative">
                                <button onClick={()=> openDropDown(item)} type={'button'} className={'rotate-90 text-blue-600'}>
                                    <CgMoreVerticalO/>
                                </button>
                            </th>
                        }

                    </tr>
                ))}


                </tbody>
            </table>

            <Modal open={openDrop} onClose={()=> setOpenDrop(false)}>
                <p className={'font-bold text-xl mr-16'}>
                    Ações - Emprestimo
                </p>

                <Button onClick={()=> setOpen(true)}>Renovar Emprestimo</Button>
                <Button onClick={()=> setOpenModalDevolver(true)}>Registrar devolução</Button>

            </Modal>

            <Modal open={open} onClose={onCloseModal} center>
                <form onSubmit={handleRenovarEmprestimo}>
                    <h2 className={'text-xl font-bold mb-3 inline-block border-b-4 border-blue-500'}>
                        Tem Certeza que deseja renovar este Empréstimo?
                    </h2>
                    <p className={'text-justify'}>
                        Será cadastrado uma renovação de empréstimo do aluno <b>{renovacao.nome}</b>, cujo o livro o
                        qual foi renovado o emprestimo
                        é: <b>{renovacao.titulo}</b>.
                        O livro deverá ser entrege novamente em um prazo de:
                    </p>
                    <Dropdown options={selectData} onChange={(option) => setTempoEmprestimo(option.value)} value={selectData[0].value} placeholder="Select an option" />
                    <Button>Renovar</Button>
                </form>
            </Modal>

            <Modal open={openModalDevolver} onClose={onCloseModal} center>
                <form onSubmit={handleDevolverLivro}>
                    <h2 className={'text-xl font-bold mb-3 inline-block border-b-4 border-blue-500'}>
                        Tem Certeza que deseja registrar a devolução do livro?
                    </h2>
                    <p className={'text-justify'}>
                        Será registrada a devolução do livro pego pelo aluno <b>{renovacao.nome}</b>, cujo o livro o
                        qual foi devolvido
                        é: <b>{renovacao.titulo}</b>.
                    </p>
                    <Button>Registrar</Button>
                </form>
            </Modal>

        </div>

    );
};
