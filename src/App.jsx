
import './App.css'
import React from 'react';

function App() {
    const [amountStrawberries, setAmountStrawberries] = React.useState(0);
    const [amountBananas, setAmountBananas] = React.useState(0);
    const [amountApples, setAmountApples] = React.useState(0);
    const [amountKiwis, setAmountKiwis] = React.useState(0);
    return (
        <div className="counters">
            <div className="counter">
                <h2>🍓Aardbeien</h2>
                <button
                    onClick={() => setAmountStrawberries(amountStrawberries-1<0 ? 0 : amountStrawberries-1)}
                >-</button>
                <p>{amountStrawberries}</p>
                <button
                    onClick={() => setAmountStrawberries(amountStrawberries + 1)}
                >+</button>
            </div>
            <div className="counter">
                <h2>🍌Bananen</h2>
                <button
                    onClick={() => setAmountBananas(amountBananas-1<0 ? 0 : amountBananas-1)}
                >-</button>
                <p>{amountBananas}</p>
                <button
                    onClick={() => setAmountBananas(amountBananas + 1)}
                >+</button>
            </div>
            <div className="counter">
                <h2>🍏Appels</h2>
                <button
                    onClick={() => setAmountApples(amountApples-1<0 ? 0 : amountApples-1)}
                >-
                </button>
                <p>{amountApples}</p>
                <button
                    onClick={() => setAmountApples(amountApples + 1)}
                >+
                </button>
            </div>

            <div className="counter">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h2>🥝Kiwi's</h2>
                <button
                    onClick={() => setAmountKiwis(amountKiwis-1<0 ? 0 : amountKiwis-1)}
                >-
                </button>
                <p>{amountKiwis}</p>
                <button
                    onClick={() => setAmountKiwis(amountKiwis + 1)}
                >+
                </button>
            </div>
            <button
                onClick={() => {
                    setAmountStrawberries(0);
                    setAmountBananas(0);
                    setAmountApples(0);
                    setAmountKiwis(0);
                }}
            >Reset</button>
        </div>
    )
}

export default App
