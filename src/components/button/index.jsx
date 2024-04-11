import classNames from 'classnames'

export const Button = ({type, className, children}) => {
    return (
        <button type={type}
                className={classNames('bg-gradient-to-r from-indigo-600 to-blue-600 border px-4 py-2 w-full rounded-sm text-white hover:bg-gradient-to-l mt-3', className)}>
            {children}
        </button>
    );
};