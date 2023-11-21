import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Card,
  Flex,
} from "@chakra-ui/react";
import useCountriesData from "../hooks/useCountriesData";
import apiClient from "../services/api-client";

interface TableProps {
  data: any[];
  columns: { key: string; header: string }[];
}

const DataTableCountries = () => {
  const { countries, error } = useCountriesData();

  const columns = [
    { key: "country_name", header: "Country Name" },
    { key: "country_code", header: "Country Code" },
    { key: "indicator_name", header: "Indicator Name" },
    { key: "indicator_code", header: "Indicator Code" },
    { key: "value", header: "Value" },
    { key: "year", header: "Year" },
  ];

  return (
    <>
      {error && <Text>{error}</Text>}
      <DataTable data={countries} columns={columns} />
    </>
  );
};

const DataTable: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
      <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
        <Text color="#fff" fontSize="lg" fontWeight="bold" mb="6px">
          Sales Overview
        </Text>
        <Text color="#fff" fontSize="sm">
          <Text as="span" color="green.400" fontWeight="bold">
            (+5) more{" "}
          </Text>
          in 2022
        </Text>
      </Flex>
      <TableContainer>
        <Table variant="simple" size="sm">
          <TableCaption>Table Caption</TableCaption>
          <Thead>
            <Tr>
              {columns.map((column) => (
                <Th key={column.key}>{column.header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index}>
                {columns.map((column) => (
                  <Td key={column.key}>{item[column.key]}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default DataTableCountries;
