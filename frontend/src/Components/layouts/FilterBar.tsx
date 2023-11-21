import { Button, Card, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useCookies } from "react-cookie";

const animatedComponents = makeAnimated();

const indicatorOptions = [
  {
    value: "Teachers in lower secondary education, both sexes (number)",
    label: "Teachers in lower secondary education, both sexes (number)",
  },
  {
    value: "Teachers in upper secondary education, both sexes (number)",
    label: "Teachers in upper secondary education, both sexes (number)",
  },
  {
    value: "Enrolment in lower secondary education, both sexes (number)",
    label: "Enrolment in lower secondary education, both sexes (number)",
  },
  {
    value: "Enrolment in upper secondary education, both sexes (number)",
    label: "Enrolment in upper secondary education, both sexes (number)",
  },
  {
    value: "Population, ages 0-14, total",
    label: "Population, ages 0-14, total",
  },
  {
    value: "Population, ages 15-64, total",
    label: "Population, ages 15-64, total",
  },
  {
    value:
      "Enrolment in primary education, private institutions, both sexes (number)",
    label:
      "Enrolment in primary education, private institutions, both sexes (number)",
  },
  {
    value:
      "Enrolment in primary education, public institutions, both sexes (number)",
    label:
      "Enrolment in primary education, public institutions, both sexes (number)",
  },
  {
    value:
      "Percentage of students in upper secondary education enrolled in general programmes, both sexes (%)",
    label:
      "Percentage of students in upper secondary education enrolled in general programmes, both sexes (%)",
  },
  {
    value:
      "Percentage of students in lower secondary education enrolled in general programmes, both sexes (%)",
    label:
      "Percentage of students in lower secondary education enrolled in general programmes, both sexes (%)",
  },
  {
    value:
      "Percentage of students in lower secondary education who are female (%)",
    label:
      "Percentage of students in lower secondary education who are female (%)",
  },
  {
    value:
      "Percentage of students in upper secondary education who are female (%)",
    label:
      "Percentage of students in upper secondary education who are female (%)",
  },
  // Add more options as needed
];
const countriesOptions = [
  { value: "Brazil", label: "Brazil" },
  { value: "Colombia", label: "Colombia" },
  { value: "United States", label: "United States" },
  { value: "Germany", label: "Germany" },
  // Add more options as needed
];
const yearOptions = [
  { value: 2009, label: 2009 },
  { value: 2010, label: 2010 },
  { value: 2011, label: 2011 },
  { value: 2012, label: 2012 },
  { value: 2013, label: 2013 },
  // Add more options as needed
];

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    height: 100,
    minHeight: 100,
    fontSize: 15,
  }),
  option: (provided: any, state: { isSelected: any; isFocused: any }) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "mediumpurple"
      : state.isFocused
      ? "#bda0f7"
      : "white",
  }),
};

interface DataItem {
  country_name: string;
  value: number;
  year: number;
}

interface FilterBarProps {
  setData: (data: DataItem[]) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ setData }) => {
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setQueryName] = useState("");
  const [comment, setComment] = useState("");
  const toast = useToast();
  const [cookies] = useCookies(["username"]);

  const handleSave = async () => {
    const username = cookies.username; // Assuming you have a function to get the cookie

    const dataToSend = {
      username,
      name,
      comment,
      data: {
        indicators: selectedIndicators,
        years: selectedYears,
        countries: selectedCountries,
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8000/queries/save_query/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);
      toast({
        title: "Query saved successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "An error occurred while attempting to save the query.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  function handleSubmit() {
    const data = {
      indicators: selectedIndicators,
      years: selectedYears,
      countries: selectedCountries,
    };
    console.log(data);
    fetch("http://localhost:8000/world-bank/intl-edu/charts-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        console.log("fetch data", responseData);
        // handle the data returned from the backend
      })
      .catch((error) => {
        console.log(error);
        // handle any errors
      });
  }

  const handleIndicatorsChange = (
    selectedOption:
      | { value: string; label: string }[]
      | { value: string; label: string }
      | null
  ) => {
    if (Array.isArray(selectedOption)) {
      const newSelectedIndicators = selectedOption.map(
        (option) => option.value
      );
      setSelectedIndicators(newSelectedIndicators);
    } else if (selectedOption) {
      setSelectedIndicators([selectedOption.value]);
    } else {
      setSelectedIndicators([]);
    }
  };

  const handleYearsChange = (
    selectedOption:
      | { value: string; label: string }[]
      | { value: string; label: string }
      | null
  ) => {
    if (Array.isArray(selectedOption)) {
      const newSelectedYears = selectedOption.map((option) => option.value);
      setSelectedYears(newSelectedYears);
    } else if (selectedOption) {
      setSelectedYears([selectedOption.value]);
    } else {
      setSelectedYears([]);
    }
  };

  const handleCountriesChange = (
    selectedOption:
      | { value: string; label: string }[]
      | { value: string; label: string }
      | null
  ) => {
    if (Array.isArray(selectedOption)) {
      const newSelectedCountries = selectedOption.map((option) => option.value);
      setSelectedCountries(newSelectedCountries);
    } else if (selectedOption) {
      setSelectedCountries([selectedOption.value]);
    } else {
      setSelectedCountries([]);
    }
  };
  return (
    <Flex direction="row">
      <Card w="350px" mr="4">
        <Select
          placeholder="Indicator"
          components={animatedComponents}
          options={indicatorOptions}
          styles={customStyles}
          onChange={handleIndicatorsChange}
        />
      </Card>
      <Card w="350px" mr="4">
        <Select
          placeholder="Countries"
          isMulti
          components={animatedComponents}
          options={countriesOptions}
          styles={customStyles}
          onChange={handleCountriesChange}
        />
      </Card>
      <Card w="350px" mr="4">
        <Select
          placeholder="Years"
          isMulti
          components={animatedComponents}
          options={yearOptions}
          styles={customStyles}
          onChange={handleYearsChange}
        />
      </Card>
      <VStack spacing={4}>
        <Button h="40px" w="300px" colorScheme="purple" onClick={handleSubmit}>
          Apply
        </Button>
        <Button h="40px" w="300px" colorScheme="purple" onClick={onOpen}>
          Save Query
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Save Query</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Query Name</FormLabel>
                <Input
                  value={name}
                  onChange={(e) => setQueryName(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Comment</FormLabel>
                <Input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="purple" mr={3} onClick={handleSave}>
                Save
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Flex>
  );
};

export default FilterBar;
