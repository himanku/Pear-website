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

const ProductFlexCardIpad = () => {
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
            <Flex w={{base:"200px", sm:"300px"}} justifyContent="space-around" borderRadius="10px" p="10px" boxShadow= "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
                <Box borderRadius="50%" w={{base:"30%", sm:"20%"}} overflow={"hidden"} >
                    <Image src="https://www.pngitem.com/pimgs/m/509-5099434_todo-app-logo-transparent-hd-png-download.png" alt=""/>
                </Box>
                <Box>
                    <Text fontSize={{base:"13px", sm:"20px"}} fontWeight="bold" color="gray.600">TOTAL iPADs</Text>
                    <Text fontSize={{base:"13px", sm:"20px"}}>{tasks.length}</Text>
                </Box>
            </Flex>
            <Button variant="outline" colorScheme="cyan" size="sm" onClick={onOpen}>ADD iPAD</Button>
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
                <FormLabel>MODEL NAME</FormLabel>
                <Input
                    ref={initialRef}
                    placeholder="Enter Model Name"
                    type="name"
                    name="name"
                    onChange={handleChange}
                    value={add.name}
                />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>ENTER PRICE</FormLabel>
                <Input
                    placeholder="Enter Price"
                    type="number"
                    name="price"
                    onChange={handleChange}
                    value={add.price}
                />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>ENTER IMG URL</FormLabel>
                <Input
                    placeholder="Enter Image URL"
                    type="text"
                    name="image"
                    onChange={handleChange}
                    value={add.image}
                />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>ENTER DESCRIPTION</FormLabel>
                <Textarea
                    placeholder="Enter Description"
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={add.description}
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
                Save
                </Button>
                <Button colorScheme={"red"} onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </Flex>
    </div>
    
  )
}

export default ProductFlexCardIpad