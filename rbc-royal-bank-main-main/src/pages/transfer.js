import React, { useState } from "react";
import { useToast, Box, Button, FormControl, FormLabel, Input, Heading, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/Navbar";


export default function TransferForm() {
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [narration, setNarration] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Transfer declined",
      description: "Account is temporarily on hold contatct your account officer.",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Box w="100%" minH="100vh" bgGradient="linear(to-br, #f5f7fa, #c3cfe2)">
      <Head>
        <title>RBC Bank - Transfer Funds</title>
      </Head>
      <Navbar />
      <Flex justify="center" align="center" minH="80vh" p={4}>
        <Box
          bg="white"
          p={{ base: 4, md: 8 }}
          rounded="2xl"
          boxShadow="2xl"
          maxW="400px"
          w="100%"
        >
          <Heading size="lg" color="#002888" mb={6} textAlign="center">
            Transfer Funds
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Account Number</FormLabel>
              <Input
                type="text"
                placeholder="Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Routing Number</FormLabel>
              <Input
                type="text"
                placeholder="Routing Number"
                value={routingNumber}
                onChange={(e) => setRoutingNumber(e.target.value)}
                required
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Amount</FormLabel>
              <Input
                type="number"
                placeholder="$0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </FormControl>
            <FormControl mb={6}>
              <FormLabel>Narration</FormLabel>
              <Input
                type="text"
                placeholder="Transfer Narration"
                value={narration}
                onChange={(e) => setNarration(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" w="100%" size="lg" fontWeight="bold" boxShadow="md">
              Submit
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}