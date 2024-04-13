
export const Select = ({objeto, label, setValue}) => {

    const handleOptionValue = (value) =>{
        setValue(value)
    }

    return (
        <>
            <label>{label}</label>
            <select onChange={(e)=> handleOptionValue(e.target.value)} className={'h-[50px] border-b-2 border-gray-300 outline-none'}>
                {objeto.map((item, index) => (
                    <option key={index} value={item.value}>{item.name}</option>
                ))}
            </select>
        </>
    );
};
