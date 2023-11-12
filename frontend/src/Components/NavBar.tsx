import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.avif"; //logo picture world bank or velez reyes.
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
