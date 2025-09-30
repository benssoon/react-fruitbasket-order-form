import './Input.css';

function Input({state, setState, label, type, name}) {
    return (
    <>
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            id={name}
            name={name}
            value={state[name]}
            onChange={setState}
        />
    </>
    )
}

export default Input;