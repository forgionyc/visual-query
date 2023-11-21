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
  Button,
  VStack,
} from "@chakra-ui/react";
import useData from "../../hooks/useDatabaseEnpoints";
import axios from "axios";

interface SavedQuery {
  id: number;
  name: string;
  comment: string;
  username: string;
}

const AllQueriesTable: React.FC = () => {
  const [savedQueries, setSavedQueries] = useState<SavedQuery[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");

  const runQuery = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:8000/queries/get_queryjson_data/${id}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Failed to run query:", error);
    }
  };

  const handleComment = async (queryId: number) => {
    try {
      // Send a POST request to your backend to add a comment
      await axios.post(`http://localhost:8000/comment-query/${queryId}`, {
        comment: commentInput,
      });

      // After posting the comment, refetch the saved queries
      fetchData();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get<SavedQuery[]>(
        "http://localhost:8000/queries/all-saved-queries"
      );
      setSavedQueries(response.data);
    } catch (error) {
      console.error("Error fetching saved queries:", error);
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
                  <Button onClick={() => handleComment(query.id)}>
                    Comment
                  </Button>
                  <Button onClick={() => runQuery(query.id)}>Run Query</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default AllQueriesTable;
