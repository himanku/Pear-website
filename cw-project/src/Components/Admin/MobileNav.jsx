import {
  Box,
  Avatar,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
  AvatarBadge,
  Image,
  useToast,
} from "@chakra-ui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import logo from "../../assets/pear_light.png";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutInitiate } from "../../Redux/Authentication/action";
import { auth } from "../../firebase";
import { setUser } from "../../Redux/Authentication/action";

export const MobileNav = ({ onOpen, ...rest }) => {
  const currentUser = useSelector((store) => {
    // console.log(store.auth.currentUser.displayName);
    return store.auth.currentUser?.displayName;

  });
  const toast = useToast();

  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOutInitiate);
    setInterval(() => {
      location.reload();
    }, 3500);

    toast({
      title: "Logout Successful",
      position: "top",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

  };
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Image
        src={logo}
        w={{ base: "28%", sm: "17%" }}
        display={{ base: "flex", md: "none" }}
      />

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"}>
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{currentUser}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem color="red" onClick={handleLogout}>
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
