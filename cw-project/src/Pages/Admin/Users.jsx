import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure, Table} from '@chakra-ui/react'
import React from 'react'
import { MobileNav } from '../../Components/Admin/MobileNav';
import SidebarContent from '../../Components/Admin/SidebarContent'
import UserTable from '../../Components/Admin/UserTable';

const Users = () => {
    const { onClose, isOpen, onOpen } = useDisclosure();
  return (
    <Box minH="100vh" bgColor={"gray.50"}>
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
        <UserTable/>
      </Box>
     
      
    </Box>
  )
}

export default Users