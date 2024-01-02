import { useEffect, useState } from 'react';
import axios from 'axios';

type useGetDataReturnType<DT> = { data: DT; isLoading: boolean };

const useGetData = <DataType>(): useGetDataReturnType<DataType | undefined> => {
  const [data, setData] = useState<DataType>();
  const [isLoading, setIsLoading] = useState(true);

  const getAPI = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      const data = response.data;

      setIsLoading(false);
      setData(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getAPI();
  }, []);

  return {
    data,
    isLoading
  };
};

export default useGetData;
