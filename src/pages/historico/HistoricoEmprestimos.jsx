import { useState, useEffect } from "react";
import { Table } from "../../components/tableAnt/index.jsx";
import Dropdown from "react-dropdown";
import { useSnapshot } from "valtio";
import { emprestimos } from "../../../proxyState/index.js";

export const HistoricoEmprestimos = () => {

    const snapEmprestimos = useSnapshot(emprestimos);

    const options = [
        { label: 'Todos os empréstimos', value: 'todos' },
        { label: 'Empréstimos vencidos', value: 'vencidos' },
        { label: 'Empréstimos em andamento', value: 'andamento' },
        { label: 'Empréstimos da semana', value: 'semana' },
        { label: 'Empréstimos do mês', value: 'mes' }
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [filteredEmprestimos, setFilteredEmprestimos] = useState([]);

    useEffect(() => {
        switch (selectedOption.value) {
            case 'vencidos':
                setFilteredEmprestimos(snapEmprestimos.getEmprestimosVencidos(snapEmprestimos.data));
                break;
            case 'andamento':
                setFilteredEmprestimos(snapEmprestimos.getEmprestimosAndamento(snapEmprestimos.data));
                break;
            case 'semana':
                setFilteredEmprestimos(snapEmprestimos.getEmprestimosSemana(snapEmprestimos.data));
                break;
            case 'mes':
                setFilteredEmprestimos(snapEmprestimos.getEmprestimosMes(snapEmprestimos.data));
                break;
            default:
                setFilteredEmprestimos(snapEmprestimos.data);
        }
    }, [snapEmprestimos, selectedOption]);

    const handleChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="container h-screen flex items-center justify-center">
            <div className="md:max-w-[500px] shadow-neutral-500 lg:max-w-[700px] xl:w-[800px] xl:max-w-[900px]">
                <p className="text-3xl font-semibold text-center mb-5">Histórico de Empréstimos</p>
                <div className="my-4">
                    <label>Filtrar</label>
                    <Dropdown onChange={handleChange} options={options} value={selectedOption} />
                </div>
                <Table list={filteredEmprestimos} />
            </div>
        </div>
    );
};
