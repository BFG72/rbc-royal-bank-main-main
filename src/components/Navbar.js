import React from "react";
import { Flex, Image, Menu, MenuButton, Button, MenuList, MenuItem, Link, useToast } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Navbar() {
  const toast = useToast();
  const router = useRouter();
  return (
    <Flex
      justifyContent={"space-between"}
      p="5"
      w="95%"
      mx="auto"
      align={"center"}
      bg="white"
      boxShadow="md"
      mb={4}
    >
      <Link href="/dashboard">
        <Image src="/rbc_bank_ga.gif" alt="rbc_bank_ga" cursor="pointer" h="40px" />
      </Link>
      <Menu>
        <MenuButton as={Button} color="#002888">
          <AiOutlineMenu />
        </MenuButton>
        <MenuList>
          <Link href="/dashboard">
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
                  "That the payment is declined and the recipient should report to the account officer",
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
  );
}
