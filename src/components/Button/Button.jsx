import './Button.css';

function Button({onClick, type, label}) {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
            >
                {label}
            </button>
        </>
    )
}

export default Button;