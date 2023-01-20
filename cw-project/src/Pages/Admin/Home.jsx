import { Box, Drawer, DrawerContent, Flex, Text, useColorModeValue, useDisclosure, Image } from '@chakra-ui/react'
import React from 'react'
// import EChart from '../../Components/Admin/Charts/Echart';
// import LineChart from '../../Components/Admin/Charts/LineChart';
import { MobileNav } from '../../Components/Admin/MobileNav';
import RevenueCard from '../../Components/Admin/RevenueCard';
import SidebarContent from '../../Components/Admin/SidebarContent'
import chart from "../../assets/Charts.png"

const Home = () => {
    const { onClose, isOpen, onOpen } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <SidebarContent 
            onClose={() => onClose}
            display={{ base: 'none', md: 'block' }}/>
        <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <RevenueCard/>
         {/* <Flex>
        <LineChart/>
        <EChart/>
      </Flex> */}
      </Box>
     
      
    </Box>
  )
}

export default Home