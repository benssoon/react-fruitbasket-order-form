
import './App.css'
import {useState} from 'react';

function App() {
    // State setup for whole form
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        postcode: '',
    });

    // This function takes gets an event passed to it
    // as a parameter, inside useState (if I understand this correctly).
    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
        console.log(formState);
        console.log(e.target.name + ': ' + e.target.value);
    }

    return (
        <>
            <form className="order">
                {/*-----Voornaam-----*/}

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

                {/*-----Achternaam-----*/}
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

                {/*-----Leeftijd-----*/}
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


                    {/*-----Bezorgfrequentie-----*/}
                <label htmlFor="deliveryFrequency">Bezorgfrequentie</label>
                <select
                    id="deliveryFrequency"
                    name="deliveryFrequency">
                    <option value="weekly">Iedere week</option>
                    <option value="biweekly">Om de week</option>
                    <option value="monthly">Iedere maand</option>
                </select>
                <span className="pair">
                    <input
                        type="radio"
                        id="daytime"
                        name="deliveryTime"
                    />Overdag
                    <input
                        type="radio"
                        id="evening"
                        name="deliveryTime"

                    />{/* eslint-disable-next-line react/no-unescaped-entities */}
                    's Avonds
                </span>

                {/*-----Opmerking-----*/}
                <label htmlFor="comment">Opmerking</label>
                <textarea
                    id="comment"
                    name="comment"
                />

                {/*-----Voorwaarden-----*/}
                <span className="pair">
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                    />
                    <label htmlFor="terms">Ik ga akkoord met de voorwaarden</label>
                </span>

                {/*-----Verzenden-----*/}
                <button type="submit">Verzend</button>
            </form>
        </>
    )
}

export default App
