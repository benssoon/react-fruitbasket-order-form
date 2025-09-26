function Counter() {
    return (
        <>
            <h2>🍓Aardbeien</h2>
            <button
                onClick={() => {
                    setAmount(amount-1<0 ? 0 : amount-1);
                    console.log(amount);
                }}
            >-</button>
            <p>{amount}</p>
            <button
                onClick={() => {
                    setAmount(amount + 1);
                    console.log(amount);
                }}
            >+</button>
        </>
    )
}