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
import useCountriesData from "../../hooks/useCountriesData";
import Pagination from "../Pagination";
import { Box } from "@chakra-ui/react";

interface TableProps {
  data: any[];
  columns: { key: string; header: string }[];
}

const DataExplorerTable = () => {
  const { countries, error, page, nextPage, prevPage } = useCountriesData();

  const columns = [
    { key: "country_code", header: "country_name" },
    { key: "series_code", header: "country_code" },
    { key: "description", header: "indicator_name" },
  ];

  return (
    <>
      {error && <Text>{error}</Text>}
      <Pagination page={page} onNext={nextPage} onPrev={prevPage} />
      <DataTable key={page} data={countries} columns={columns} />
      <Pagination page={page} onNext={nextPage} onPrev={prevPage} />
    </>
  );
};

const DataTable: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <Card p="5px" maxW={{ sm: "320px", md: "100%" }}>
      <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
        <Text fontSize="lg" fontWeight="bold" mb="6px">
          DataExplorer
        </Text>
      </Flex>
      <TableContainer>
        <Table variant="simple" size="sm">
          <TableCaption>DataExplorer</TableCaption>
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

export default DataExplorerTable;
