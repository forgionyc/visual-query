import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import apiClient from "../services/api-client";

interface Country {
  table_name: string;
  country_code: string;
}

interface FetchCountriesResponse {
  results: Country[];
}

const TableCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchCountriesResponse>("/country-summary")
      .then((res) => setCountries(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Countries WB Api</TableCaption>
        <Thead>
          <Tr>
            <Th>Country Name</Th>
            <Th>Table Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {countries.map((country) => (
            <Tr key={country.table_name}>
              <Td>{country.country_code}</Td>
              <Td>{country.table_name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableCountries;
