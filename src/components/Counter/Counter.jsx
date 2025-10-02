import './Counter.css';
import Button from '../Button/Button.jsx';
function Counter({amountFruit, onChange, title}) {
    return (

            <div className="counter">
                <h2>{title}</h2>
                <Button
                    onClick={() => onChange(-1)}
                    label="-"
                />
                <p>{amountFruit}</p>
                <Button
                    onClick={() => onChange(+1)}
                    label="+"
                />
            </div>

    )
}

export default Counter;
