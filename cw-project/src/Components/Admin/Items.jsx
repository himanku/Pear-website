import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Items = ({ image, name, price, review }) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow="rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" p="10px">
      <Image src={image} alt={name} w="40%" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            PEAR
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
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
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
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
            <Button colorScheme="red">DELETE</Button>
            <Button colorScheme="cyan">EDIT</Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default Items