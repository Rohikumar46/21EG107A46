import React, { useState, useEffect } from 'react';
import { fetchPrimes, fetchFibo, fetchEven, fetchRand } from './api';

const Numbers = () => {
  const [primeNumbers, setPrimeNumbers] = useState([]);
  const [fiboNumbers, setFiboNumbers] = useState([]);
  const [evenNumbers, setEvenNumbers] = useState([]);
  const [randNumbers, setRandNumbers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NzQxODY3LCJpYXQiOjE3MjQ3NDE1NjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImViYjBlN2U1LThlNmEtNDVmNC04MTkzLTAxMTA0M2I1NDdjMSIsInN1YiI6ImxldHVzbWFpbDJ2aWtyYW1hZGl0eWFAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkbWVkIiwiY2xpZW50SUQiOiJlYmIwZTdlNS04ZTZhLTQ1ZjQtODE5My0wMTEwNDNiNTQ3YzEiLCJjbGllbnRTZWNyZXQiOiJXV1haZ0VJeUdmVHZSRUJQIiwib3duZXJOYW1lIjoiUm9oaWt1bWFyIiwib3duZXJFbWFpbCI6ImxldHVzbWFpbDJ2aWtyYW1hZGl0eWFAZ21haWwuY29tIiwicm9sbE5vIjoiNDYifQ.-g49e6X9Iok1CAHCCg5GKagjmejyR2gxGBR49mJ-xgU';

    const getNumbers = async () => {
      try {
        const primesData = await fetchPrimes(accessToken);
        setPrimeNumbers(primesData.numbers || []);

        const fiboData = await fetchFibo(accessToken);
        setFiboNumbers(fiboData.numbers || []);

        const evenData = await fetchEven(accessToken);
        setEvenNumbers(evenData.numbers || []);

        const randData = await fetchRand(accessToken);
        setRandNumbers(randData.numbers || []);
      } catch (error) {
        setError('Failed to fetch numbers');
      }
    };

    getNumbers();
  }, []);

  return (
    <div>
      <h1>Numbers</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Prime Numbers</h2>
      <ul>
        {primeNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <h2>Fibonacci Numbers</h2>
      <ul>
        {fiboNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <h2>Even Numbers</h2>
      <ul>
        {evenNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <h2>Random Numbers</h2>
      <ul>
        {randNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Numbers;
