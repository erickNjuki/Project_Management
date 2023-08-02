import { useState, useEffect } from "react";

function useDataFetching(dataSource) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(dataSource);
        const results = await data.json();
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
