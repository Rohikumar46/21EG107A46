import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
    const [numberType, setNumberType] = useState('p'); // Default to 'p' for prime numbers
    const [prevState, setPrevState] = useState([]);
    const [currState, setCurrState] = useState([]);
    const [fetchedNumbers, setFetchedNumbers] = useState([]);
    const [average, setAverage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleTypeChange = (event) => {
        setNumberType(event.target.value);
    };

    const fetchNumbers = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:9876/numbers/${numberType}`);
            setPrevState(response.data.windowPrevState);
            setCurrState(response.data.windowCurrState);
            setFetchedNumbers(response.data.numbers);
            setAverage(response.data.avg);
        } catch (err) {
            setError('Error fetching numbers. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Average Calculator</h1>
            <div>
                <label>Select Number Type: </label>
                <select value={numberType} onChange={handleTypeChange}>
                    <option value="p">Prime</option>
                    <option value="f">Fibonacci</option>
                    <option value="e">Even</option>
                    <option value="r">Random</option>
                </select>
                <button onClick={fetchNumbers} disabled={loading}>
                    {loading ? 'Fetching...' : 'Fetch Numbers'}
                </button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!error && (
                <div>
                    <h2>Previous State</h2>
                    <p>{prevState.join(', ') || 'None'}</p>

                    <h2>Current State</h2>
                    <p>{currState.join(', ') || 'None'}</p>

                    <h2>Fetched Numbers</h2>
                    <p>{fetchedNumbers.join(', ') || 'None'}</p>

                    {average !== null && (
                        <div>
                            <h2>Average</h2>
                            <p>{average}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AverageCalculator;
