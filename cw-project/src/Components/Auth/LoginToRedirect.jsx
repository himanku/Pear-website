import { Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const LoginToRedirect = () => {
  const [count, setCount] = useState(2);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentState) => --currentState);
    }, 1000);
    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count]);
  return (
    <Flex direction="column" alignItems="center" mt="40vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text textAlign="center" fontSize="30px" fontWeight="bold">
        Redirecting you in {count} seconds
      </Text>
    </Flex>
  );
};
