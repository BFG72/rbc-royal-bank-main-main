import React, { useState } from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Text, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

// Generate 220 dummy transactions (Dec 2023 - Sep 2025) on client only
import { useEffect } from "react";

function generateTransactions() {
  const types = ["Deposit", "Withdrawal", "Transfer"];
  const transactions = [];
  let currentDate = new Date("2023-12-01");
  for (let i = 0; i < 220; i++) {
    const type = types[i % types.length];
    const amount = type === "Deposit"
      ? Math.floor(Math.random() * 1000 + 800)
      : -Math.floor(Math.random() * 700 + 50);
    const id = Math.random().toString(36).substring(2, 10).toUpperCase();
    transactions.push({
      id,
      date: currentDate.toISOString().slice(0, 10),
      type,
      amount,
    });
    currentDate.setDate(currentDate.getDate() + 4);
  }
  return transactions;
}

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    setTransactions(generateTransactions());
  }, []);

  // Pie chart data based on transaction history
  function getChartData(transactions) {
    let deposit = 0, withdrawal = 0, transfer = 0;
    transactions.forEach(txn => {
      if (txn.type === "Deposit") deposit += Math.abs(txn.amount);
      else if (txn.type === "Withdrawal") withdrawal += Math.abs(txn.amount);
      else if (txn.type === "Transfer") transfer += Math.abs(txn.amount);
    });
    return [
      { label: "Deposit", value: deposit },
      { label: "Withdrawal", value: withdrawal },
      { label: "Transfer", value: transfer },
    ];
  }

  // Show More button logic: start with 10, load 10 more each click
  const [visibleCount, setVisibleCount] = useState(10);
  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, transactions.length));
  };
  // Adjust dates to be between 2023 and 2025
  const adjustedTransactions = transactions.map((txn, idx) => {
    const start = new Date("2023-12-01");
    const end = new Date("2025-09-20");
    const total = transactions.length;
    const date = new Date(start.getTime() + ((end.getTime() - start.getTime()) * idx / total));
    return {
      ...txn,
      date: date.toISOString().slice(0, 10),
    };
  });
  const recentTransactions = [...adjustedTransactions].slice(-visibleCount).reverse();
  const chartData = getChartData(adjustedTransactions);

  return (
    <Box w="100%" minH="100vh" bgGradient="linear(to-br, #e0eafc 0%, #cfdef3 100%)" p={0}>
      <Navbar />
      <Box p={{ base: 2, md: 8 }} maxW="1200px" mx="auto">
        <Heading mb={8} color="blue.800" fontWeight="extrabold" fontSize={{ base: "2xl", md: "3xl" }} letterSpacing={1} textAlign="center" bgClip="text" bgGradient="linear(to-r, #002888, #38a169)">Recent Transactions</Heading>
        <Flex direction={{ base: "column", md: "row" }} gap={10}>
          <Box flex={2} bg="rgba(255,255,255,0.7)" boxShadow="2xl" rounded="2xl" backdropFilter="blur(8px)" p={{ base: 2, md: 6 }} border="1px solid #e2e8f0">
            <Table variant="unstyled" size="md" w="100%">
              <Thead bgGradient="linear(to-r, #e0eafc, #cfdef3)" boxShadow="md">
                <Tr>
                  <Th fontSize="md" color="#002888" fontWeight="bold" py={3}>ID</Th>
                  <Th fontSize="md" color="#002888" fontWeight="bold" py={3}>Date</Th>
                  <Th fontSize="md" color="#002888" fontWeight="bold" py={3}>Type</Th>
                  <Th isNumeric fontSize="md" color="#002888" fontWeight="bold" py={3}>Amount ($)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {recentTransactions.map(txn => (
                  <Tr key={txn.id} _hover={{ bg: "blue.50", boxShadow: "md", transform: "scale(1.01)", transition: "all 0.2s" }}>
                    <Td fontWeight="semibold" color="gray.700">{txn.id}</Td>
                    <Td color="gray.600">{txn.date}</Td>
                    <Td color={txn.type === "Deposit" ? "green.600" : txn.type === "Withdrawal" ? "red.500" : "blue.600"} fontWeight="bold">{txn.type}</Td>
                    <Td isNumeric fontWeight="bold" color={txn.amount < 0 ? "red.500" : "green.600"}>${Math.abs(txn.amount)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            {visibleCount < transactions.length && (
              <Flex justify="center" mt={6}>
                <Box
                  as="button"
                  onClick={handleShowMore}
                  bgGradient="linear(to-r, #002888, #38a169)"
                  color="white"
                  px={8}
                  py={3}
                  rounded="full"
                  fontWeight="bold"
                  boxShadow="xl"
                  fontSize="lg"
                  _hover={{ bgGradient: "linear(to-r, #38a169, #002888)", transform: "scale(1.07)", boxShadow: "2xl" }}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  transition="all 0.2s"
                >
                  Show More
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                    <path d="M5 8l5 5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Box>
              </Flex>
            )}
          </Box>
          <Box flex={1} bg="rgba(255,255,255,0.7)" p={4} rounded="2xl" boxShadow="2xl" minW="280px" border="1px solid #e2e8f0" backdropFilter="blur(8px)">
            <Heading size="lg" mb={6} color="blue.800" fontWeight="extrabold" textAlign="center">Transaction Pie Chart</Heading>
            <Box w="100%" maxW="320px" mx="auto">
              {/* Pie chart SVG */}
              <svg width="100%" height="220" viewBox="0 0 220 220">
                {(() => {
                  const total = chartData.reduce((sum, d) => sum + d.value, 0);
                  let startAngle = 0;
                  const colors = ["#38a169", "#e53e3e", "#3182ce"];
                  return chartData.map((data, idx) => {
                    const angle = (data.value / total) * 2 * Math.PI;
                    const x1 = 110 + 90 * Math.cos(startAngle);
                    const y1 = 110 + 90 * Math.sin(startAngle);
                    const x2 = 110 + 90 * Math.cos(startAngle + angle);
                    const y2 = 110 + 90 * Math.sin(startAngle + angle);
                    const largeArcFlag = angle > Math.PI ? 1 : 0;
                    const pathData = `M110,110 L${x1},${y1} A90,90 0 ${largeArcFlag},1 ${x2},${y2} Z`;
                    const slice = (
                      <path
                        key={data.label}
                        d={pathData}
                        fill={colors[idx]}
                        opacity="0.85"
                        stroke="#fff"
                        strokeWidth="2"
                      />
                    );
                    startAngle += angle;
                    return slice;
                  });
                })()}
              </svg>
              {/* Legend below the chart */}
              <Box mt={6}>
                {chartData.map((data, idx) => (
                  <Flex key={data.label + "-legend"} align="center" mb={3}>
                    <Box w={5} h={5} bg={["#38a169", "#e53e3e", "#3182ce"][idx]} mr={3} rounded="md" boxShadow="md" />
                    <Text fontSize="lg" color="gray.700" fontWeight="bold">{data.label}: ${data.value}</Text>
                  </Flex>
                ))}
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default TransactionHistory;
