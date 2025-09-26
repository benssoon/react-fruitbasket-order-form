
import './App.css'
import React from 'react';

function App() {
    const [amount, setAmount] = React.useState(0);
    return (
        <>
            <div>
                <h2>🍓Aardbeien</h2>
                <button
                    onClick={() => setAmount(amount-1)}
                >-</button>
                <p>{amount}</p>
                <button
                    onClick={() => setAmount(amount+1)}
                >+</button>
            </div>
            <h2>🍌Bananen</h2>
            <h2>🍏Appels</h2>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2>🥝Kiwi's</h2>
        </>
    )
}

export default App
