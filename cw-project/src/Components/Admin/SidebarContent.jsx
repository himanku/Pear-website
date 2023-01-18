import { Box, CloseButton, Flex, Image, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from 'react-icons/fi';
import { NavItem } from './Navitem';
import logo from "../../assets/pear_light.png"

const LinkItems = [
    { name: 'Home', icon: FiHome },
    { name: 'All Products', icon: FiTrendingUp },
    { name: 'Users', icon: FiCompass },
    { name: 'Orders', icon: FiStar },
    { name: 'Logout', icon: FiSettings },
  ];

const SidebarContent = () => {
    const { onClose } = useDisclosure();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src={logo} w={{base:"30%", sm:"30%", md: "70%",lg:"80%", xl:"80%" }}/>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent