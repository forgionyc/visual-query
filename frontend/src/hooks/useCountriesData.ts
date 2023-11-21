import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useCountriesData = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get(`/world-bank/intl-edu/series-definitions/${page}`, {signal: controller.signal})
      .then((res) => setCountries(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)});
        return () => controller.abort();
      }, [page]); // Add page as a dependency
      
      const nextPage = () => {
        setPage((prevPage) => prevPage + 1);
      };
      
      const prevPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
      };
      
      return { countries, error, nextPage, prevPage, page };
};
export default useCountriesData;
function setPage(arg0: (prevPage: any) => any) {
  throw new Error("Function not implemented.");
}

