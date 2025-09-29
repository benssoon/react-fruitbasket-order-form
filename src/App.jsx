
import './App.css'
import {useState} from 'react';

function App() {
    // State setup for whole form
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        postcode: '',
        deliveryFrequency: '',
        deliveryTime: '',
        comment: '',
        terms: '',
    });

    // This function takes gets an event passed to it
    // as a parameter, inside useState (if I understand this correctly).
    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
        console.log(newValue);
    }

    return (
        <>
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
                <button type="submit">Verzend</button>
            </form>
        </>
    )
}

export default App
