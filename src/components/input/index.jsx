import {useRef} from "react";

export const Input = ({type, label, placeholder, onChange, ref, value}) => {

    const noRef = useRef(0);

    return (
        <div className="my-4 w-full">
            <label htmlFor={type + label}
                   className="block mb-2">{label}
            </label>
            <input type={type} id={type + label}
                   className="w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}
                   autoComplete={'off'}
                   ref={ref ? ref : noRef}
                   required/>
        </div>
    );
};