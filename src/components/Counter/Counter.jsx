import './Counter.css';
import Button from '../Button/Button.jsx';
function Counter({amountFruit, /*setAmountFruit,*/ onChange, title}) {
    return (

            <div className="counter">
                <h2>{title}</h2>
                <Button
                    /*onClick={() => setAmountFruit(amountFruit-1<0 ? 0 : amountFruit-1)}*/
                    onClick={() => onChange(-1)}
                    label="-"
                />
                <p>{amountFruit}</p>
                <Button
                    /*onClick={() => setAmountFruit(amountFruit + 1)}*/
                    onClick={() => onChange(+1)}
                    label="+"
                />
            </div>

    )
}

export default Counter;