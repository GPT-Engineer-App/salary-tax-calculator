import { useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Input, Select, Switch, Text, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const [salary, setSalary] = useState("");
  const [state, setState] = useState("");
  const [period, setPeriod] = useState("monthly");
  const [result, setResult] = useState(null);

  const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

  const handleCalculate = () => {
    // Placeholder tax calculation
    const taxRate = 0.3; // 30% tax rate for simplicity
    const annualSalary = period === "monthly" ? salary * 12 : salary;
    const taxedSalary = annualSalary * (1 - taxRate);
    const finalSalary = period === "monthly" ? taxedSalary / 12 : taxedSalary;
    setResult(`$${finalSalary.toFixed(2)}`);
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <VStack spacing={8} p={12} backgroundColor={formBackground} borderRadius={8}>
        <Button onClick={toggleColorMode}>{colorMode === "light" ? <FaMoon /> : <FaSun />}</Button>
        <FormControl>
          <FormLabel htmlFor="state">State</FormLabel>
          <Select id="state" placeholder="Select state" onChange={(e) => setState(e.target.value)}>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="salary">Salary</FormLabel>
          <Input id="salary" type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="period" mb="0">
            Period
          </FormLabel>
          <Select id="period" value={period} onChange={(e) => setPeriod(e.target.value)}>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>
        </FormControl>
        <Button colorScheme="blue" onClick={handleCalculate}>
          Calculate
        </Button>
        {result && <Text>Net Salary: {result}</Text>}
      </VStack>
    </Flex>
  );
};

export default Index;
