import { useState, useEffect } from "react";

function useDataFetching(dataSource) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const results = await tasks.json();
        if (results) {
          setData(results);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    }
    fetchData();
  }, [dataSource]);
  return [loading, error, data];
}
export default useDataFetching;
