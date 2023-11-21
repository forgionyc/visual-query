import { Box, Card, Flex, Text, VStack } from "@chakra-ui/react";

import BarChartComponent from "../charts/BarChart";
import FilterBar from "./FilterBar";
import { useState } from "react";
import LineChartComponent from "../charts/LineChart";

interface DataItem {
  country_name: string;
  value: number;
  year: number;
}

const Content = () => {
  const [data, setData] = useState<DataItem[]>([]);

  return (
    <Flex direction="row" justify="flex-start" alignItems="start">
      <VStack spacing={4} alignItems="start">
        <Box w={{ sm: "320px", md: "100%" }}>
          <Card p="2">
            <FilterBar setData={setData} />
          </Card>
        </Box>
        <Box w={{ sm: "320px", md: "100%" }}>
          <Card maxW={{ sm: "320px", md: "100%" }}>
            <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
              <Text fontSize="lg" fontWeight="bold" mb="6px"></Text>
            </Flex>
            <Box pl={2} minH="300px" textAlign="start">
              <BarChartComponent data={data} />
              <LineChartComponent data={data} />
            </Box>
          </Card>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Content;
