import axios from 'axios';

export const fetchPrimes = async (accessToken) => {
  try {
    const response = await axios.get('http://20.244.56.144/test/primes', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Handle the response
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching prime numbers:', error);
    throw error;
  }
};
