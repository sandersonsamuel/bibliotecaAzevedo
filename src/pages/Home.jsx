import {Card} from "../components/card/Card.jsx";
import {Link} from "react-router-dom";
import {useSnapshot} from "valtio";
import {emprestimos} from "../../proxyState/index.js";
import ReactECharts from 'echarts-for-react';
import moment from "moment";
import 'moment/locale/pt-br';

export const Home = () => {

    moment.locale('pt-br');

    const snapEmprestimos = useSnapshot(emprestimos)

    const emprestimosVencidos = snapEmprestimos.getEmprestimosVencidos(snapEmprestimos.data)
    const emprestimosAndamento = snapEmprestimos.getEmprestimosAndamento(snapEmprestimos.data)

    const emprestimosSemana = snapEmprestimos.getEmprestimosSemana(snapEmprestimos.data)
    const emprestimosMes = snapEmprestimos.getEmprestimosMes(snapEmprestimos.data)

    const snapEmprestimosPorDiaSemana = snapEmprestimos.agruparEmprestimosPorDia(emprestimosSemana)
    const snapEmprestimosPorSemanaMes = snapEmprestimos.agruparEmprestimosPorDia(emprestimosMes)

    const emprestimosPorDiaSemanaData = [0, 0, 0, 0, 0, 0, 0]
    const emprestimosPorSemanaMesData = [0, 0, 0, 0]

    console.log(snapEmprestimos.data)

    for (const data in snapEmprestimosPorDiaSemana) {
        const diaDaSemanaIndex = moment(data).weekday()
        emprestimosPorDiaSemanaData[diaDaSemanaIndex] += snapEmprestimosPorDiaSemana[data].length

    }

    for (const data in snapEmprestimosPorSemanaMes) {

        const dataMoment = moment(data)

        const diaDaSemanaIndex = dataMoment.week() - moment(dataMoment).startOf('month').week()

        emprestimosPorSemanaMesData[diaDaSemanaIndex] += snapEmprestimosPorSemanaMes[data].length

    }

    const optionSemana = {

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: emprestimosPorDiaSemanaData,
                type: 'line',
                areaStyle: {}
            }
        ]
    };
    const optionMes = {

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1 Sem', '2 Sem', '3 Sem', '4 Sem']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: emprestimosPorSemanaMesData,
                type: 'line',
                areaStyle: {}
            }
        ]
    };

  return (
      <div className={'p-5 w-full'}>

          <div className={'grid grid-cols-2 gap-7 w-full border-b-2 pb-3 items-center'}>
              {
                  emprestimosAndamento.length > 0 &&

                  <Link to={'/historico/emprestimo'}>
                      <Card type={'neutral'} className={'shadow-lg'}>
                          {emprestimosAndamento.length === 1 ? `${emprestimosAndamento.length} Empréstimo em andamento` : `${emprestimosAndamento.length} Emprestimos em andamento`}
                      </Card>
                  </Link>
              }
              {
                  emprestimosVencidos.length > 0 &&

                  <Link to={'/historico/emprestimo'}>
                      <Card className={'shadow-lg'} type={emprestimosVencidos.length === 0 ? 'neutral' : emprestimosVencidos.length < 3 ? 'attention' : 'alert'}>
                          {emprestimosVencidos.length === 1 ? `${emprestimosVencidos.length} Empréstimo vencido não entregue` : `${emprestimosVencidos.length} Emprestimos vencidos não entregues`}
                      </Card>
                  </Link>
              }
          </div>

          <div className={'grid grid-cols-2 gap-7 py-5 text-justify'}>
              <Card type={'card'} className={'shadow-xl'}>
                  <p className={'text-xl font-semibold inline-block border-b-2 border-blue-700'}>
                      Emprestimos da semana: {emprestimosSemana.length}
                  </p>

                  <ReactECharts className={'w-full'} option={optionSemana}/>

              </Card>
              <Card type={'card'} className={'shadow-xl'}>
                  <p className={'text-xl font-semibold inline-block border-b-2 border-blue-700'}>
                      Emprestimos do Mês: {emprestimosMes.length}</p>

                  <ReactECharts className={'w-full'} option={optionMes}/>

              </Card>
          </div>

      </div>
  )
}
