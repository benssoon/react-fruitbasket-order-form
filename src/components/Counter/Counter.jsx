import './Counter.css';
function Counter({amountFruit, setAmountFruit, title}) {
    return (

            <div className="counter">
                <h2>{title}</h2>
                <button
                    onClick={() => setAmountFruit(amountFruit-1<0 ? 0 : amountFruit-1)}
                >-</button>
                <p>{amountFruit}</p>
                <button
                    onClick={() => setAmountFruit(amountFruit + 1)}
                >+</button>
            </div>

    )
}

export default Counter;