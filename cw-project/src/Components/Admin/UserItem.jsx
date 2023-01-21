import { Box, Text, Tr } from '@chakra-ui/react'
import React from 'react'

const UserItem = ({id, name, email, status}) => {
  return (
    <Tr>
        <Td>{id}</Td>
        <Td>{name}</Td>
        <Td>{email}</Td>
        <Td>
            <Button colorScheme="green" size="sm">{status}</Button>
        </Td>
        <Td>
            <Box>
                <DeleteIcon color="red"/>
                <Text>DELETE</Text>
            </Box>
        </Td>
    </Tr>
  )
}

export default UserItem