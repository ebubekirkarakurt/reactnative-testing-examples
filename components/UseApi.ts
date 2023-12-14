import { useState, useEffect } from "react";


//https://jsonplaceholder.typicode.com/albums

const useApi = (initialValue : Array<number | string>) => {
    const [result, setResult] = useState(initialValue);
  
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((data) => {
          //console.log("data : ", data);
          setResult(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);
  
    return { result };
};

export default useApi



  

