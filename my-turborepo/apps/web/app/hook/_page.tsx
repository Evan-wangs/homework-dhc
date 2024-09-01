'use client';

import { useEffect, useState } from "react";

interface CustomData {
    id: number;
  }

export function useCustomData() {
    const [data, setData] = useState<CustomData[]>([]);
  
    useEffect(() => {

      const fetchData = () => {
        const result = Array.from({ length: 5 }, (_, index) => ({
          id: index + 1,
        }));
        setData(result);
      };
  
      fetchData();
    }, []);
  
    return data;
}