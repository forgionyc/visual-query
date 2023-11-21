import React, { useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Button,
  useDisclosure,
  FormControl,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

function Login() {
  const { onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [username, setUsername] = useState("");
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);
  const [cookies, setCookie] = useCookies(["username"]); // Initialize cookies
  const toast = useToast();

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/users/?username=${username}`
      );
      const data = await response.json();
      if (data.username === username) {
        console.log("data", data.username, "username", username);
        toast({
          title: "Welcome back!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setCookie("username", username, { path: "/" }); // Set the cookie
        setShouldNavigate(true);
      } else {
        const addUserResponse = await fetch(`http://localhost:8000/users/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        });
        const addedUserData = await addUserResponse.json();

        if (addedUserData) {
          toast({
            title: "User added successfully!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setCookie("username", username, { path: "/" }); // Set the cookie
          setShouldNavigate(true);
        } else {
          toast({
            title: "Failed to add user",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      }
      setHasAttemptedLogin(true);
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred while attempting to fetch the data.");
    }
  };

  const isInputValid = username.trim() !== "";

  if (shouldNavigate) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={true}
        onClose={onClose}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>VisualQuery 1.0</ModalHeader>
          <ModalBody pb={6}>
            <Text mb="1rem">
              Welcome to VisualQuery, please enter your username to continue. if
              you don't have an account, one will be created for you.
            </Text>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                focusBorderColor="purple.400"
                ref={initialRef}
                placeholder="Write your username"
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && isInputValid) {
                    handleLogin();
                  }
                }}
              />
              {hasAttemptedLogin && !isInputValid && (
                <Text color="red.500" fontSize="sm">
                  Please enter a valid username.
                </Text>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleLogin}
              colorScheme="purple"
              mr={3}
              isDisabled={!isInputValid}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;
