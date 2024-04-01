import { Button, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa6";

 const Color = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <IconButton onClick={toggleColorMode} pos={'fixed'} top={'4'} right={'4'} backgroundColor={'transparent'} zIndex={'10'}>
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </IconButton>
    </header>
  );
};

export default Color
