
import './App.css';
import React from 'react';
import {useState} from 'react';
import Counter from './components/Counter/Counter.jsx';
import Input from './components/Input/Input.jsx';

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

        console.log(formState);
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
    return (

        <>
            <div className="counters">
                <Counter amountFruit={amountStrawberries} setAmountFruit={setAmountStrawberries} title="🍓Aardbeien" />
                <Counter amountFruit={amountBananas} setAmountFruit={setAmountBananas} title="🍌Bananen" />
                <Counter amountFruit={amountApples} setAmountFruit={setAmountApples} title="🍏Appels" />
                <Counter amountFruit={amountKiwis} setAmountFruit={setAmountKiwis} title="🥝Kiwi's" />
                
                <button
                    onClick={handleReset}
                >Reset</button>
            </div>


            <form className="order">
                {/*-----First Name-----*/}
                <Input
                    label="Voornaam"
                    state={formState}
                    setState={handleChange}
                    type="text"
                    name="firstName"
                />

                {/*-----Last Name-----*/}
                <Input
                    label="Achternaam"
                    state={formState}
                    setState={handleChange}
                    type="text"
                    name="lastName"
                />

                {/*-----Age-----*/}
                <Input
                    label="Leeftijd"
                    state={formState}
                    setState={handleChange}
                    type="number"
                    name="age"
                />

                {/*-----Postcode-----*/}
                <Input
                    label="Postcode"
                    state={formState}
                    setState={handleChange}
                    type="text"
                    name="postcode"
                />

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
                    <Input
                        label="Overdag"
                        state={formState}
                        setState={handleChange}
                        type="radio"
                        name="deliveryTime"
                        value="day"
                        id="day"
                    />
                    <Input
                        label="'s Avonds"
                        state={formState}
                        setState={handleChange}
                        type="radio"
                        name="deliveryTime"
                        value="evening"
                        id="evening"
                    />
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
                <Input
                    label="Ik ga akkoord met de voorwaarden"
                    state={formState}
                    setState={handleChange}
                    type="checkbox"
                    name="terms"
                    id="terms"
                />

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