import React, { useState, useEffect } from 'react';
import { fetchPrimes } from './api';

const PrimeNumbers = () => {
  const [primeNumbers, setPrimeNumbers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NzQxODY3LCJpYXQiOjE3MjQ3NDE1NjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImViYjBlN2U1LThlNmEtNDVmNC04MTkzLTAxMTA0M2I1NDdjMSIsInN1YiI6ImxldHVzbWFpbDJ2aWtyYW1hZGl0eWFAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkbWVkIiwiY2xpZW50SUQiOiJlYmIwZTdlNS04ZTZhLTQ1ZjQtODE5My0wMTEwNDNiNTQ3YzEiLCJjbGllbnRTZWNyZXQiOiJXV1haZ0VJeUdmVHZSRUJQIiwib3duZXJOYW1lIjoiUm9oaWt1bWFyIiwib3duZXJFbWFpbCI6ImxldHVzbWFpbDJ2aWtyYW1hZGl0eWFAZ21haWwuY29tIiwicm9sbE5vIjoiNDYifQ.-g49e6X9Iok1CAHCCg5GKagjmejyR2gxGBR49mJ-xgU'; // Replace with your actual access token

    const getPrimes = async () => {
      try {
        const data = await fetchPrimes(accessToken);
        setPrimeNumbers(data.numbers);
      } catch (error) {
        setError('Failed to fetch prime numbers');
      }
    };

    getPrimes();
  }, []);

  return (
    <div>
      <h1>Prime Numbers</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {primeNumbers.length > 0 ? (
        <ul>
          {primeNumbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      ) : (
        <p>No prime numbers found.</p>
      )}
    </div>
  );
};

export default PrimeNumbers;
