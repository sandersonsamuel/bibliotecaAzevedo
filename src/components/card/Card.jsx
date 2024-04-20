import classNames from "classnames";
import {FaExclamationCircle} from "react-icons/fa";

export const Card = ({children, type, className}) => {

    const styleCard = {
        class: '',
        icon: <FaExclamationCircle/>
    }

    switch (type) {
        case 'alert':
            styleCard.class = 'bg-red-500 rounded-lg text-neutral-200'
            break
        case 'sucess':
            styleCard.class = 'bg-emerald-500 rounded-lg text-neutral-200'
            styleCard.icon = null
            break
        case 'neutral':
            styleCard.class = 'bg-white rounded-lg text-neutral-700 border-neutral-400'
            styleCard.icon = null
            break
        case 'attention':
            styleCard.class = 'bg-yellow-500 rounded-lg text-neutral-200'
            break
        case 'card':
            styleCard.class = 'bg-white rounded-lg text-neutral-700 border-neutral-400 justify-center'
            styleCard.icon = null
            break

    }


    return (
        <div className={classNames('p-5 border flex gap-3', styleCard.class, className)}>
            {styleCard.icon && <p className={'font-semibold text-lg'}>{styleCard.icon}</p>}
            <p>
                {children}
            </p>
        </div>
    );
};

Card.defaultProps = {
    type: 'neutral',
}

