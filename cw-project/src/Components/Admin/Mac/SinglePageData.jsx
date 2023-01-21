import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Modal,
  Stack,
  Text,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useToast,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import logo from "../../../assets/pear_light.png";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSinglePageData, updateTask } from "../../../Redux/AdminMac/action";
import { useDispatch, useSelector } from "react-redux";

const initState = {
    name: "",
    image: "",
    price: "",
    description: "",
    review: "",
  };

const SinglePageData = () => {
    const task = useSelector((store) =>store.AdminReducerMac.task);
    const [add, setAdd] = useState(initState);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const { id } = useParams();
    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
      dispatch(updateTask(id, add));
      toast({
        title: "Item updated successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      setAdd(initState);
      onClose();
      navigate("/products")
    }
  };

  useEffect(() => {
    dispatch(getSinglePageData(id));
  }, [id]);

  useEffect(() => {
    if(task) {
      setAdd({...task})
    }
  },[task])


  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      p="2"
    >
      <Image
        maxW={{ base: "40%", sm: "200px" }}
        src={task.image}
        alt={task.name}
      />

      <Stack>
        <CardBody>
            <Badge borderRadius='full' px='2' fontSize="lg" colorScheme='teal'>
            PEAR
            </Badge>
            <Heading mt="2" size="md">{task.name}</Heading>
            <Text py="2">{task.description}</Text>
            <Text py="2" fontSize={"2xl"} color="blue.500">
                Rs. {task.price}
            </Text>
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="cyan"
            color="white"
            _hover={{
              boxShadow:
                "rgba(1, 136, 255, 0.719) 6px 2px 16px 0px,rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
              transform: "scale(1.2)",
            }}
            onClick={onOpen}
          >
            EDIT
          </Button>
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
                <Image src={logo} alt="logo" w="100px" m="auto" />
              </ModalHeader>
              <ModalCloseButton />

              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>UPDATE MODEL NAME</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Enter Model Name"
                    type="name"
                    name="name"
                    onChange={handleChange}
                    value={add.name || ""}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>UPDATE PRICE</FormLabel>
                  <Input
                    placeholder="Enter Price"
                    type="number"
                    name="price"
                    onChange={handleChange}
                    value={add.price || ""}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>UPDATE IMG URL</FormLabel>
                  <Input
                    placeholder="Enter Image URL"
                    type="text"
                    name="image"
                    onChange={handleChange}
                    value={add.image || ""}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>UPDATE DESCRIPTION</FormLabel>
                  <Textarea
                    placeholder="Enter Description"
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={add.description || ""}
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
                  UPDATE
                </Button>
                <Button colorScheme={"red"} onClick={onClose}>
                  CANCEL
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default SinglePageData;
