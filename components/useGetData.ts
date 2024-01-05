import { useEffect, useState } from 'react';

const useGetData = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const result = fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch((err) => console.log(err));
  }, []);

  return result;
};

export default useGetData;
