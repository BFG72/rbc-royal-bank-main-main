import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { AiFillDollarCircle, AiOutlineMenu } from "react-icons/ai";
import { BsCalculator } from "react-icons/bs";
import { BiMoney } from "react-icons/bi";
// Dummy spending data for chart
const spendingData = [
  { month: "Jan", amount: 1200 },
  { month: "Feb", amount: 900 },
  { month: "Mar", amount: 1500 },
  { month: "Apr", amount: 1100 },
  { month: "May", amount: 1700 },
  { month: "Jun", amount: 1300 },
];
import Head from "next/head";
import { useRouter } from "next/router";

function Dashboard() {
  const toast = useToast();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quickActionModal, setQuickActionModal] = React.useState({ open: false, action: "" });
  const handleQuickAction = (action) => setQuickActionModal({ open: true, action });
  const closeQuickActionModal = () => setQuickActionModal({ open: false, action: "" });
  const { isOpen: isAccOpen, onOpen: onAccOpen, onClose: onAccClose } = useDisclosure();
  const { isOpen: isEditProfileOpen, onOpen: onEditProfileOpen, onClose: onEditProfileClose } = useDisclosure();

  return (
    <Box w="100%" minH="100vh" bgGradient="linear(to-br, #e0eafc 0%, #cfdef3 100%)" p={0}>
      <Head>
        <title>RBC Bank - Online Banking</title>
      </Head>
      <Box position="relative" w="100%">
      <Image src="/rbc_bank_ga.gif" alt="rbc_bank_ga" w="100%" h={{ base: "120px", md: "180px" }} objectFit="cover" position="relative" zIndex={0} borderRadius="2xl" />
        <Flex
          justifyContent={"space-between"}
          p="5"
          w="95%"
          mx="auto"
          align={"center"}
          bg="rgba(255,255,255,0.8)"
          boxShadow="2xl"
          rounded="2xl"
          backdropFilter="blur(12px)"
          border="1px solid #e2e8f0"
          style={{ transition: "all 0.3s" }}
          position="absolute"
          top={0}
          left="50%"
          transform="translateX(-50%)"
          zIndex={2}
        >
          <Box />
          <Menu>
            <MenuButton as={Button} color="#002888">
              <AiOutlineMenu />
            </MenuButton>
            <MenuList>
              <Link href="/">
                <MenuItem>Home</MenuItem>
              </Link>
              <Link href="/transaction-history">
                <MenuItem>Transaction History</MenuItem>
              </Link>
              <MenuItem
                onClick={() =>
                  toast({
                    title: "Withdrawal",
                    description:
                      "Account is temporarily on hold contatct your account officer",
                    status: "info",
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                  })
                }
              >
                Withdrawal
              </MenuItem>
              <MenuItem
                onClick={() => {
                  router.push("/transfer");
                }}
              >
                Transfer
              </MenuItem>
              <Link href="/online-banking">
                <MenuItem>Log Out</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
  {/* End of dashboard widgets section */}
  {/* End of dashboard widgets section */}
      <Box textAlign="center" mb={6}>
        <Avatar src=".../profile-image.Jpeg" size={"2xl"} mx="auto" />
        <Text color="#002888" fontSize="2xl" fontWeight="bold" mt={2}>Shari  Engelien</Text>
        <Text color="#002888" fontSize="md">myheartbeat308@gmail.com</Text>
        <Button mt={2} colorScheme="blue" size="sm" onClick={onEditProfileOpen}>Edit Profile</Button>
      </Box>
      <Box textAlign={"center"}>
        <Text color="#002888" fontStyle={"italic"} fontSize="2xl" fontWeight={"semibold"} mt="5">Welcome!</Text>
        <Text color="#002888" fontWeight={"bold"}>Here are your RBC Royal Bank accounts</Text>
      </Box>
      {/* Edit Profile Modal */}
      <Modal isOpen={isEditProfileOpen} onClose={onEditProfileClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box as="form">
              <Text mb={2}>Name</Text>
              <input type="text" defaultValue="Shari  Engelien" style={{ width: '100%', marginBottom: '12px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
              <Text mb={2}>Email</Text>
              <input type="email" defaultValue="myheartbeat308@gmail.com" style={{ width: '100%', marginBottom: '12px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
              <Text mb={2}>Phone</Text>
              <input type="tel" defaultValue="+1 555-123-4567" style={{ width: '100%', marginBottom: '12px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onEditProfileClose}>Save</Button>
            <Button variant="ghost" onClick={onEditProfileClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box w="100%">
        <Flex gap={6} flexWrap="wrap" justifyContent="center" w="100%" mb={8}>
          <Box bgGradient="linear(to-br, #c0c3ca, #e0eafc)" color="white" maxW="300px" w="90%" p={5} rounded="2xl" mt={10} boxShadow="2xl" border="1px solid #e2e8f0" _hover={{ transform: "scale(1.07)", boxShadow: "2xl" }} transition="all 0.2s" backdropFilter="blur(12px)">
            <Text fontWeight="bold" fontSize="lg">Chequing Account</Text>
            <Text fontWeight="bold" fontSize="lg">$8,200.00</Text>
            <Text fontSize="12px" mt={5}>Main chequing account</Text>
            <AiFillDollarCircle style={{ marginBlockStart: "40px", width: "40px", height: "40px", marginInline: "auto" }} />
          </Box>
          <Box bgGradient="linear(to-br, #6b46c1, #e0eafc)" color="white" maxW="300px" w="90%" p={5} rounded="2xl" mt={10} boxShadow="2xl" border="1px solid #e2e8f0" _hover={{ transform: "scale(1.07)", boxShadow: "2xl" }} transition="all 0.2s" backdropFilter="blur(12px)">
            <Text fontWeight="bold" fontSize="lg">Savings Account</Text>
            <Text fontWeight="bold" fontSize="lg">$54,210.00</Text>
            <Text fontSize="12px" mt={5}>High interest savings</Text>
            <BsCalculator style={{ marginBlockStart: "40px", width: "40px", height: "40px", marginInline: "auto" }} />
          </Box>
          <Box bgGradient="linear(to-br, #2b6cb0, #e0eafc)" color="white" maxW="300px" w="90%" p={5} rounded="2xl" mt={10} boxShadow="2xl" border="1px solid #e2e8f0" _hover={{ transform: "scale(1.07)", boxShadow: "2xl" }} transition="all 0.2s" backdropFilter="blur(12px)">
            <Text fontWeight="bold" fontSize="lg">Credit Card</Text>
            <Text fontWeight="bold" fontSize="lg">$2,500.00</Text>
            <Text fontSize="12px" mt={5}>Visa Platinum</Text>
            <BiMoney style={{ marginBlockStart: "40px", width: "40px", height: "40px", marginInline: "auto" }} />
          </Box>
        </Flex>
         {/* Main Account Balance Card and Quick Actions */}
         <Box
           bgGradient={{ base: "linear(to-br, #f5f7fa, #c3cfe2)", md: "linear(to-br, #e0eafc, #cfdef3)" }}
           color="#222"
           maxW={{ base: "98vw", md: "400px" }}
           w={{ base: "98vw", md: "95%" }}
           mx="auto"
           p={{ base: 4, md: 8 }}
           rounded={{ base: "xl", md: "2xl" }}
           boxShadow="2xl"
           mt={10}
           position="relative"
           borderWidth={1}
           borderColor="#e2e8f0"
           transition="all 0.3s"
         >
           <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" mb={4}>
             <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color="#002888">Account Balance</Text>
             <AiFillDollarCircle size={48} color="#e53e3e" style={{ marginLeft: 8, marginTop: 8 }} />
           </Flex>
           <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="extrabold" color="#002888" mb={2} letterSpacing={1} textAlign={{ base: "center", md: "left" }}>
             $170,200.00
           </Text>
           <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" mb={2} textAlign={{ base: "center", md: "left" }}>
             Available Balance
           </Text>
           <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" mb={4} textAlign={{ base: "center", md: "left" }}>
             <span style={{ fontWeight: 600, color: '#38a169' }}>+18.33%</span> since Feb 2, 2024
           </Text>
           <Flex gap={2} direction={{ base: "column", md: "row" }} justify="center" align="center" mt={2}>
             <Button colorScheme="blue" size={{ base: "md", md: "sm" }} onClick={onOpen} boxShadow="md" w={{ base: "100%", md: "auto" }} fontWeight="bold" borderRadius="lg" _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}>View Details</Button>
      {/* View Details Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={{ base: "90vw", md: "400px" }}>
          <ModalHeader color="#002888">Account Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={2}>
              <Flex justify="space-between" align="center" mb={3}>
                <Text fontWeight="bold">Loan Balance</Text>
                <Text color="blue.600" fontWeight="bold" fontSize="lg">$12,500.00</Text>
              </Flex>
              <Flex justify="space-between" align="center" mb={3}>
                <Text fontWeight="bold">Savings Balance</Text>
                <Text color="blue.600" fontWeight="bold" fontSize="lg">$54,210.00</Text>
              </Flex>
              <Flex justify="space-between" align="center" mb={3}>
                <Text fontWeight="bold">Current Balance</Text>
                <Text color="blue.600" fontWeight="bold" fontSize="lg">$170,200.00</Text>
              </Flex>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
             <Button colorScheme="teal" size={{ base: "md", md: "sm" }} onClick={onAccOpen} boxShadow="md" w={{ base: "100%", md: "auto" }} fontWeight="bold" borderRadius="lg" _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}>Account Details</Button>
      {/* Account Details Modal */}
      <Modal isOpen={isAccOpen} onClose={onAccClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={{ base: "90vw", md: "400px" }}>
          <ModalHeader color="#002888">User & Account Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={2}>
              <Flex justify="space-between" align="center" mb={3}>
                <Text fontWeight="bold">Name</Text>
                <Text color="blue.600" fontWeight="bold">Shari  Engelien</Text>
              </Flex>
              <Flex justify="space-between" align="center" mb={3}>
                <Text fontWeight="bold">Email</Text>
                <Text color="blue.600" fontWeight="bold">myheartbeat308@gmail.com</Text>
              </Flex>
              <Flex justify="space-between" align="center" mb={3}>
                <Text fontWeight="bold">Phone</Text>
                <Text color="blue.600" fontWeight="bold">+1 555-123-4567</Text>
              </Flex>
              <Flex justify="space-between" align="center" mb={3}>
                <Text fontWeight="bold">Account Balance</Text>
                <Text color="blue.600" fontWeight="bold" fontSize="lg">$170,200.00</Text>
              </Flex>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onAccClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
           </Flex>
           <Flex gap={2} direction={{ base: "column", md: "row" }} justify="center" align="center" mt={6}>
             <Button leftIcon={<BsCalculator />} colorScheme="purple" size={{ base: "lg", md: "md" }} variant="solid" boxShadow="md" px={6} py={5} fontWeight="bold" borderRadius="full" w={{ base: "100%", md: "auto" }} _hover={{ bg: "purple.600", color: "white", transform: "scale(1.05)" }} onClick={() => handleQuickAction("Pay Bills")}>Pay Bills</Button>
             <Button leftIcon={<BiMoney />} colorScheme="orange" size={{ base: "lg", md: "md" }} variant="solid" boxShadow="md" px={6} py={5} fontWeight="bold" borderRadius="full" w={{ base: "100%", md: "auto" }} _hover={{ bg: "orange.500", color: "white", transform: "scale(1.05)" }} onClick={() => handleQuickAction("Deposit Cheque")}>Deposit Cheque</Button>
             <Button leftIcon={<AiFillDollarCircle />} colorScheme="green" size={{ base: "lg", md: "md" }} variant="solid" boxShadow="md" px={6} py={5} fontWeight="bold" borderRadius="full" w={{ base: "100%", md: "auto" }} _hover={{ bg: "green.500", color: "white", transform: "scale(1.05)" }} onClick={() => handleQuickAction("Request Statement")}>Request Statement</Button>
      {/* Quick Action Modal */}
      <Modal isOpen={quickActionModal.open} onClose={closeQuickActionModal} isCentered>
        <ModalOverlay />
        <ModalContent maxW={{ base: "90vw", md: "400px" }}>
          <ModalHeader color="#002888">{quickActionModal.action}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" color="red.500" textAlign="center" fontSize="lg">
              This feature is not available on web. Please use the RBC mobile app.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={closeQuickActionModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
           </Flex>
         </Box>
      
    {/* End account cards and main balance section */}
       {/* Spending Summary Chart Section */}
       <Box mt={10} mb={6} p={6} bg="gray.50" rounded="md" boxShadow="md" w="100%">
        <Heading fontSize="xl" mb={4} color="blue.700">Monthly Spending Summary</Heading>
        <Box h={{ base: "220px", md: "200px" }} display="flex" alignItems="center" justifyContent="center" color="gray.400" w="100%">
          <Box w="100%" maxW="500px" mx="auto">
            <svg width="100%" height="180" viewBox="0 0 500 180">
              {spendingData.map((data, idx) => {
                const barWidth = 60;
                const gap = 20;
                const x = idx * (barWidth + gap) + 30;
                const maxAmount = Math.max(...spendingData.map(d => d.amount));
                const barHeight = (data.amount / maxAmount) * 120;
                return (
                  <g key={data.month}>
                    <rect
                      x={x}
                      y={150 - barHeight}
                      width={barWidth}
                      height={barHeight}
                      rx="10"
                      fill="#3182ce"
                      opacity="0.85"
                    />
                    <text
                      x={x + barWidth / 2}
                      y={160}
                      textAnchor="middle"
                      fontSize="16"
                      fill="#222"
                    >
                      {data.month}
                    </text>
                    <text
                      x={x + barWidth / 2}
                      y={150 - barHeight - 8}
                      textAnchor="middle"
                      fontSize="14"
                      fill="#3182ce"
                      fontWeight="bold"
                    >
                      ${data.amount}
                    </text>
                  </g>
                );
              })}
            </svg>
          </Box>
        </Box>
      </Box>
  {/* Additional account cards or dashboard sections can be added here */}
        <Flex gap={6} flexWrap={{ base: "wrap", md: "nowrap" }} justifyContent="center" w="100%" mb={8}>
          <Box bg="purple.800" color="white" maxW="300px" w="100%" p="5" rounded="md" mt="10">
            <Text fontWeight="bold">Ledger Balance</Text>
            <Text fontWeight="bold">$127,300.00</Text>
            <Text fontSize="12px" mt="5">13.33% Since February 2,2024</Text>
            <BsCalculator style={{ marginBlockStart: "80px", width: "50px", height: "50px", marginInline: "auto" }} />
          </Box>
          <Box bg="blue.800" color="white" maxW="300px" w="100%" p="5" rounded="md" mt="10">
            <Text fontWeight={"bold"}>Transfer Mode</Text>
            <Text fontWeight={"bold"}>WIRE</Text>
            <Text fontSize={"12px"} mt="5">3.2% Since February 2,2024</Text>
            <BiMoney style={{ marginBlockStart: "80px", width: "50px", height: "50px", marginInline: "auto" }} />
          </Box>
        </Flex>
    {/* End dashboard widgets section */}
    
  </Box>
  </Box>
  );
}

export default Dashboard;
