
import './App.css';
import React from 'react';
import {useState} from 'react';
import Counter from './components/Counter.jsx';

function App() {
    // State setup for whole form
    const initialState = {
        firstName: '',
        lastName: '',
        age: 0,
        postcode: '',
        deliveryFrequency: '',
        deliveryTime: '',
        comment: '',
        terms: '',
    }
    const [formState, setFormState] = useState(initialState);

    // This function takes gets an event passed to it
    // as a parameter, inside useState (if I understand this correctly).
    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const fruits = [
            {
                name: "Strawberries",
                amount: amountStrawberries,
            },
            {
                name: "Bananas",
                amount: amountBananas,
            },
            {
                name: "Apples",
                amount: amountApples,
            },
            {
                name: "Kiwis",
                amount: amountKiwis,
            },
        ]

        for (let fruitsKey in fruits) {
            const fruit = fruits[fruitsKey];
            console.log(`${fruit.name}: ${fruit.amount}`);
        }

        console.log(formState)
    }

    function handleReset() {
        setAmountStrawberries(0);
        setAmountBananas(0);
        setAmountApples(0);
        setAmountKiwis(0);
    }

    const [amountStrawberries, setAmountStrawberries] = React.useState(0);
    const [amountBananas, setAmountBananas] = React.useState(0);
    const [amountApples, setAmountApples] = React.useState(0);
    const [amountKiwis, setAmountKiwis] = React.useState(0);
    const [amountFruit, setAmountFruit] = React.useState(0);
    return (

        <>
            <div className="counters">
                <Counter amountFruit={amountFruit} setAmountFruit={setAmountFruit} title="🍓Aardbeien" />
                <Counter amountFruit={amountFruit} setAmountFruit={setAmountFruit} title="🍌Bananen" />
                <Counter amountFruit={amountFruit} setAmountFruit={setAmountFruit} title="🍏Appels" />
                <Counter amountFruit={amountFruit} setAmountFruit={setAmountFruit} title="🥝Kiwi's" />
                
                <button
                    onClick={handleReset}
                >Reset</button>
            </div>


            <form className="order">
                {/*-----First Name-----*/}
                <label>
                    Voornaam
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                    />
                </label>

                {/*-----Last Name-----*/}
                <label>
                    Achternaam
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                    />
                </label>

                {/*-----Age-----*/}
                <label>
                    Leeftijd
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formState.age}
                        onChange={handleChange}
                    />
                </label>

                {/*-----Postcode-----*/}
                <label>
                    Postcode
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={formState.postcode}
                        onChange={handleChange}
                    />
                </label>


                {/*-----Delivery Frequency-----*/}
                <label htmlFor="deliveryFrequency">Bezorgfrequentie</label>
                <select
                    id="deliveryFrequency"
                    name="deliveryFrequency"
                    value={formState.deliveryFrequency}
                    onChange={handleChange}>
                    <option value="weekly">Iedere week</option>
                    <option value="biweekly">Om de week</option>
                    <option value="monthly">Iedere maand</option>
                </select>

                {/*-----Delivery Time of Day-----*/}
                <span className="timeOfDay">
                    <input
                        type="radio"
                        id="daytime"
                        name="deliveryTime"
                        value="daytime"
                        checked={formState.deliveryTime === "daytime"}
                        onChange={handleChange}
                    />Overdag
                    <input
                        type="radio"
                        id="evening"
                        name="deliveryTime"
                        value="evening"
                        checked={formState.deliveryTime === "evening"}
                        onChange={handleChange}
                    />{/* eslint-disable-next-line react/no-unescaped-entities */}
                    's Avonds
                </span>

                {/*-----Comment-----*/}
                <label htmlFor="comment">Opmerking</label>
                <textarea
                    id="comment"
                    name="comment"
                    value={formState.comment}
                    onChange={handleChange}
                />

                {/*-----Terms and Conditions-----*/}
                <label>
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formState.terms}
                        onChange={handleChange}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>

                {/*-----Send-----*/}
                <button
                    type="submit"
                    onClick={handleSubmit}
                >Verzend</button>
            </form>
        </>
    )
}

export default App;