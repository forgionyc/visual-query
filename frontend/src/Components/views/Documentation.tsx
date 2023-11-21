import NavBar from "../layouts/NavBar";
import SideBar from "../layouts/SideBar";
import Footer from "../layouts/Footer";
import { Grid, GridItem } from "@chakra-ui/react";

const Documentantion = () => {
  return (
    <Grid
      templateAreas={`"header header"
  "nav main"
  "footer footer"`}
      gridTemplateRows={"70px 1fr 30px"}
      gridTemplateColumns={"290px 1fr"}
      h="95vh"
      gap="5"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"header"}>
        <NavBar />
      </GridItem>
      <GridItem p="2" bg="pink.300" area={"nav"}>
        <SideBar />
      </GridItem>
      <GridItem p="2" bg="green.300" area={"main"}></GridItem>
      <GridItem bg="blue.300" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
};
export default Documentantion;
