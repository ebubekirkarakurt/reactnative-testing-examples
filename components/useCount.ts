import { useEffect, useState } from "react";

const useCount = (initialCount: number) => {
    const [count, setCount] = useState(initialCount);
    const increment = () => setCount((value) => value + 1);
  
    useEffect(() => {
      setCount(initialCount);
    }, [initialCount]);
  
    return { count, increment };
};

export default useCount