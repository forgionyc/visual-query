import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useData = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get("/queries/all-saved-queries", {signal: controller.signal})
      .then((res) => setCountries(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)});
    return () => controller.abort();
  }, []);
  return { countries, error };
};
export default useData;
