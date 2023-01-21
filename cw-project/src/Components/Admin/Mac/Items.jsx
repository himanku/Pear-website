import { StarIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Badge, Box, Button, Flex, Image, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteTask } from '../../../Redux/AdminMac/action'

const Items = ({ id, image, name, price, review }) => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(deleteTask(id))
        toast({
            title: "Item Deleted Successfully",
            status: "success",
            duration: 1200,
            isClosable: true,
            position: "top",
          });
        onClose();
    }
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" p="10px">
      <Image src={image} alt={name} w="40%" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline' flexDirection={{base:"column", lg:"row"}}>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            PEAR
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
          >
            9th Gen &bull; 10-core GPU
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {name}
        </Box>

        <Box>
          Rs. {price}
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < 4 ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {review} reviews
          </Box>
        </Box>
        <Flex gap="20px" mt="20px">
            <Box>
                <Button colorScheme='red' onClick={onOpen}>
                    DELETE 
                </Button>

                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                    <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Delete Item
                        </AlertDialogHeader>

                        <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='red' ml={3} onClick={handleDelete}>
                            Delete
                        </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </Box>
            {/* <Button colorScheme="red" onClick={handleDelete}>DELETE</Button> */}
            <Button colorScheme="cyan" onClick={()=>navigate(`/edit/mac/${id}`)}>EDIT</Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default Items