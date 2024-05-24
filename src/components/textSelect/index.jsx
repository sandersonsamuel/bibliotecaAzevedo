import { useEffect, useState, useRef } from "react";

export const TextSelect = ({ label, placeholder, array, visibleItem, getId, id }) => {
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (text.length === 0) {
            getId(null);
        }
    }, [text, getId]);

    const handleFocus = () => {
        setVisible(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setVisible(false);
        }, 300);
    };

    const filterArray = array?.filter(item => {
        return item[visibleItem].toLowerCase().includes(text.toLowerCase());
    });

    const handleItemClick = (item) => {
        setText(item[visibleItem]);
        getId(item[id]);
        setVisible(false);
    };

    return (
        <div className="my-4 w-full relative flex flex-col items-center">
            <label htmlFor={label} className="mb-2 text-start w-full">{label}</label>
            <input
                ref={inputRef}
                type="text"
                id={label}
                className="w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder={placeholder}
                autoComplete="off"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
            />

            {filterArray?.length > 0 && visible && (
                <div className="absolute w-full min-h-[50px] max-h-[200px] overflow-y-scroll bg-white mt-20 border z-50">
                    {filterArray.map((item, index) => (
                        <div
                            key={index}
                            className="px-2 py-3 cursor-pointer bg-white h-[50px] hover:bg-gray-200"
                            onMouseDown={() => handleItemClick(item)}
                        >
                            {item[visibleItem]}
                        </div>
                    ))}
                </div>
            )}

            {filterArray?.length === 0 && visible && (
                <div className="absolute w-full overflow-y-scroll bg-white mt-20 border z-50">
                    <div className="px-2 py-3 bg-white h-[50px]">Nenhum resultado encontrado</div>
                </div>
            )}
        </div>
    );
};
