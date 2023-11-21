import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.avif"; //logo picture world bank or velez reyes.
import ColorModeSwitch from "../ColorModeSwitch";
import { useColorModeValue } from "@chakra-ui/react";

const NavBar = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  return (
    <Box>
      <HStack justifyContent="space-between" padding="10px" bg={bgColor}>
        <Image src={logo} />
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
