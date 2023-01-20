import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SinglePageData from '../../Components/Admin/Mac/SinglePageData';
import { MobileNav } from '../../Components/Admin/MobileNav';
import SidebarContent from '../../Components/Admin/SidebarContent'

const EditMacPage = () => {
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
        <SinglePageData/>
      </Box>
    </Box>
  )
}

export default EditMacPage