import { useEffect, useState } from "react";
import axios from "axios";


function useFetch(url: any) {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const responseData = response.data; // Access the actual data from the response
      setData(responseData.meals);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err); // Log any errors in case fetching fails
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { error, loading, data };

}

export default useFetch;
