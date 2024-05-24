import { FiPlusCircle } from "react-icons/fi";

export const Table = ({labels, data, actions, OpenAndSelect}) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    {
                        labels.map((label, index) => (
                            <th
                                className={'border-b p-4 pl-8 pt-0 pb-3 text-left font-semibold'}
                                key={index}>{label.toUpperCase()}
                            </th>
                        ))
                    }


                </tr>
                </thead>
                <tbody>
                {
                    data.map((item, key) => (
                        <tr key={key}>
                            {
                                labels.map((label, index) => <td
                                    className={'border-b border-slate-100 p-4 pr-8'}
                                    key={index}>{item[label]}</td>)
                            }
                            { actions &&
                                <td className={'border-b border-slate-100 p-4 pr-8'}>
                                    <FiPlusCircle onClick={() => OpenAndSelect(item)} className={'cursor-pointer text-xl text-blue-800'}/>
                                </td>
                            }
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    );
};

Table.prototype = {
    labels: Array,
    data: Array,
    dataKey: String
}
