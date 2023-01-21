import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from "../../assets/pear_light.png";
import { addTask } from '../../Redux/AdminIpad/action';

const initState = {
    name: "",
    image: "",
    price: "",
    description: "",
    review: "",
  };

const UserTotal = () => {
    const tasks = useSelector((store) =>store.AdminReducerIpad.tasks);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [add, setAdd] = useState(initState);
    const dispatch = useDispatch();
    const toast = useToast();
    const initialRef = React.useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdd({ ...add, [name]: value });
      };
    
      const handleSubmit = () => {
        const { name, image, price, description } = add;
        if (!name || !image || !price || !description) {
          toast({
            title: "Please fill in all the inputs",
            status: "error",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
        } else {
          dispatch(
            addTask({
              ...add,
              review: 0,
            })
          );
          toast({
            title: "Item added successfully",
            status: "success",
            duration: 1200,
            isClosable: true,
            position: "top",
          });
          setAdd(initState);
          onClose();
        }
      };

  return (
    <div>

        <Flex alignItems="center" justifyContent="space-between" gap="10px">
            <Flex bgColor="white" w={{base:"200px", sm:"300px"}} justifyContent="space-around" borderRadius="10px" p="10px" boxShadow= "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
                <Box w={{base:"25%", sm:"18%"}} overflow={"hidden"} >
                    <Image src="https://icon-library.com/images/users-icon/users-icon-10.jpg" alt="users"/>
                </Box>
                <Box>
                    <Text fontSize={{base:"13px", sm:"20px"}} fontWeight="bold" color="gray.600">TOTAL USERS</Text>
                    <Text fontSize={{base:"13px", sm:"20px"}}>{tasks.length}</Text>
                </Box>
            </Flex>
            <Button variant="outline" colorScheme="cyan" size="sm" onClick={onOpen}>ADD USER</Button>
            <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
            size="sm"
            >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader
                textDecoration="underline"
                color="#257cff"
                fontWeight="bold"
                fontSize="2.5rem"
            >
                <Image src={logo} alt="logo" w="100px" m="auto"/>
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
                <FormControl>
                <FormLabel>ENTER NAME</FormLabel>
                <Input
                    ref={initialRef}
                    placeholder="Enter Name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={add.name}
                />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>ENTER EMAIL</FormLabel>
                <Input
                    placeholder="Enter Email"
                    type="email"
                    name="price"
                    onChange={handleChange}
                    value={add.price}
                />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>SET PASSWORD</FormLabel>
                <Input
                    placeholder="Set Password"
                    type="password"
                    name="image"
                    onChange={handleChange}
                    value={add.image}
                />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button
                variant="solid"
                ml="3rem"
                //   color="white"
                colorScheme={"green"}
                mr={3}
                onClick={handleSubmit}
                >
                ADD
                </Button>
                <Button colorScheme={"red"} onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </Flex>
    </div>
    
  )
}

export default UserTotal