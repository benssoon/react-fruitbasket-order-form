
import './App.css'
import React from 'react';

function App() {
    const [amount, setAmount] = React.useState(0);
    return (
        <div className="counters">
            <div className="counter">
                <h2>🍓Aardbeien</h2>
                <button
                    onClick={() => setAmount(amount-1<0 ? 0 : amount-1)}
                >-</button>
                <p>{amount}</p>
                <button
                    onClick={() => setAmount(amount + 1)}
                >+</button>
            </div>
            <div className="counter">
                <h2>🍌Bananen</h2>
                <button
                    onClick={() => setAmount(amount-1<0 ? 0 : amount-1)}
                >-</button>
                <p>{amount}</p>
                <button
                    onClick={() => setAmount(amount + 1)}
                >+</button>
            </div>
            <div className="counter">
                <h2>🍏Appels</h2>
                <button
                    onClick={() => setAmount(amount-1<0 ? 0 : amount-1)}
                >-
                </button>
                <p>{amount}</p>
                <button
                    onClick={() => setAmount(amount + 1)}
                >+
                </button>
            </div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <div className="counter">
                <h2>🥝Kiwi's</h2>
                <button
                    onClick={() => setAmount(amount-1<0 ? 0 : amount-1)}
                >-
                </button>
                <p>{amount}</p>
                <button
                    onClick={() => setAmount(amount + 1)}
                >+
                </button>
            </div>
        </div>
    )
}

export default App
