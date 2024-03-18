import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url: any) {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {// @ts-ignore
      const { data: responseData } = await axios.get(url);
      const details = responseData.meals;
      setData(details);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { error, loading, data };

}

export default useFetch;
