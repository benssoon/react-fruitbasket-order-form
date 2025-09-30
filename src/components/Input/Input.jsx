import './Input.css';


function Input({state, setState, label, type, name, id}) {
    const labelElement = <label htmlFor={id}>{label}</label>;
    const inputElement = <input
                type={type}
                id={id}
                name={name}
                value={type === "radio" ? id : state[id]}
                onChange={setState}
                checked={type === "radio" ? state[name] === id : state[name]}
            />

    return (
        <div>
            {type === "checkbox" ? (
                    <>
                        {inputElement}
                        {labelElement}
                    </>
                ) :
                (
                    <>
                        {labelElement}
                        {inputElement}
                    </>
                )
            }
        </div>
    )
}

export default Input;