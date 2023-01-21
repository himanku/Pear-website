import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import UserTotal from './UserTotalAdd';
import { collection, getDocs } from "firebase/firestore";
// import {db} from "../../firebase"

const UserTable = () => {
    const [data, setData] = useState([]);

    const handleDelete = (id) => {
        setImmediate(data.filter((item) => item.id !==id));
    }


    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            try {
                const querySnapshot = await getDocs(collection(db, "cities"));
                querySnapshot.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()})
                });
                console.log(list);
                setData(list)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();
    },[])
  return (
    <div>
        <UserTotal/>
        <TableContainer>
            <Table variant='striped' colorScheme='purple'>
                {/* <TableCaption>Users</TableCaption> */}
                <Thead>
                <Tr>
                    <Th fontSize="16px">ID</Th>
                    <Th fontSize="16px">USER</Th>
                    <Th fontSize="16px">EMAIL</Th>
                    <Th fontSize="16px">STATUS</Th>
                    <Th fontSize="16px">ACTION</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>1</Td>
                    <Td>Himanku</Td>
                    <Td>himanku@gmail.com</Td>
                    <Td>
                        <Button colorScheme="green" size="sm">Online</Button>
                    </Td>
                    <Td>
                        <Button variant={"ghost"}>
                            <Flex color="red" alignItems="center" gap="10px">
                                <DeleteIcon/>
                                <Text fontWeight={600} onClick={() => handleDelete(id)}>DELETE</Text>
                            </Flex>
                        </Button>
                    </Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default UserTable