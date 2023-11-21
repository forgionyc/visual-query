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
  VStack,
} from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useCookies } from "react-cookie";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { format } from "d3";

interface SavedQuery {
  id: number;
  name: string;
  comment: string;
  username: string;
}

interface DataItem {
  country_name: string;
  value: number;
  year: number;
}
interface BarChartProps {
  data: DataItem[];
}

const SavedQueriesTable: React.FC = () => {
  const [savedQueries, setSavedQueries] = useState<SavedQuery[]>([]);
  const [cookies] = useCookies(["username"]);
  const [chartData, setChartData] = useState<DataItem[]>([]);
  const [data, setData] = useState<
    { [key: number]: number; country_name: string }[]
  >([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleSubmit() {
    console.log(chartData);
    fetch("http://localhost:8000/world-bank/intl-edu/charts-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chartData),
    })
      .then((response) => response.json())
      .then((responseData: DataItem[]) => {
        // Explicitly type responseData
        const formattedData = responseData.reduce<
          { country_name: string; [key: number]: number }[]
        >(
          (
            acc: { country_name: string; [key: number]: number }[],
            item: DataItem
          ) => {
            const existingCountry = acc.find(
              (country) => country.country_name === item.country_name
            );

            if (existingCountry) {
              existingCountry[item.year] = item.value;
            } else {
              acc.push({
                country_name: item.country_name,
                [item.year]: item.value,
              });
            }

            return acc;
          },
          []
        );

        setData(formattedData); // Set the formatted data
        console.log("formatted data", formattedData);
        // handle the data returned from the backend
      })
      .catch((error) => {
        console.log(error);
        // handle any errors
      });
  }

  const fetchData = async () => {
    try {
      const response = await axios.get<SavedQuery[]>(
        `http://localhost:8000/queries/saved-queries/${cookies.username}`
      );
      setSavedQueries(response.data);
    } catch (error) {
      console.error("Error fetching saved queries:", error);
    }
  };
  const runQuery = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:8000/queries/get_queryjson_data/${id}`
      );
      const data = await response.json();
      setChartData(data); // Set the chart data
      onOpen(); // Open the modal
      handleSubmit();
      console.log(data);
    } catch (error) {
      console.error("Failed to run query:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card p="5px" maxW={{ sm: "320px", md: "100%" }}>
      <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
        <Text fontSize="lg" fontWeight="bold" mb="6px">
          All VisualQueries
        </Text>
      </Flex>
      <TableContainer>
        <Table variant="striped" colorScheme="purple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Comment</Th>
              <Th>Username</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {savedQueries.map((query) => (
              <Tr key={query.id}>
                <Td>{query.name}</Td>
                <Td>{query.comment}</Td>
                <Td>{query.username}</Td>
                <Td>
                  <Button
                    colorScheme="purple"
                    size="sm"
                    onClick={() => runQuery(query.id)}
                  >
                    Run Query
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Query Results</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <BarChart
                width={480}
                height={350}
                data={data}
                margin={{
                  top: 2,
                  right: 2,
                  left: 2,
                  bottom: 2,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country_name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="2009"
                  fill="#AA77FF"
                  activeBar={<Rectangle stroke="#CDF5FD" />}
                />
                <Bar
                  dataKey="2010"
                  fill="#C9EEFF"
                  activeBar={<Rectangle stroke="#C9EEFF" />}
                />
                <Bar
                  dataKey="2011"
                  fill="#97DEFF"
                  activeBar={<Rectangle stroke="#62CDFF" />}
                />
                <Bar
                  dataKey="2012"
                  fill="#62CDFF"
                  activeBar={<Rectangle stroke="#C9EEFF" />}
                />
                <Bar
                  dataKey="2013"
                  fill="#CDF5FD"
                  activeBar={<Rectangle stroke="#AA77FF" />}
                />
              </BarChart>
            </ModalBody>
          </ModalContent>
        </Modal>
      </TableContainer>
    </Card>
  );
};

export default SavedQueriesTable;
