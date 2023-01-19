import { Box, CloseButton, Flex, Image, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FiHome, FiLogOut, FiPackage, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { NavItem } from './Navitem';
import logo from "../../assets/pear_light.png"
import { Link } from 'react-router-dom';

const LinkItems = [
    { name: 'Dashboard', icon: FiHome, route: 'dashboard' },
    { name: 'All Products', icon: FiTrendingUp, route: 'products' },
    { name: 'Users', icon: FiUsers, route: 'users' },
    { name: 'Orders', icon: FiPackage, route: 'orders' },
    { name: 'Logout', icon: FiLogOut, route: 'dashboard' },
  ];

const SidebarContent = ({onClose, ...rest}) => {
  return (
    <Box
      transition="1s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link to="/dashboard"><Image src={logo} w={{base:"50%", md: "70%" }}/></Link>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} route={link.route}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent