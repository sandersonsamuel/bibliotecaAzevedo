import classNames from 'classnames'
import PropTypes from "prop-types";

export const Button = ({type, className, children, onClick, disabled}) => {
    return (
        <button onClick={onClick} type={type} disabled={disabled}
                className={classNames('bg-gradient-to-r from-indigo-600 to-blue-600 border px-4 py-3 w-full rounded-sm text-white hover:bg-gradient-to-l mt-3 hover:to-blue-900 hover:from-indigo-900', className)}>
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}