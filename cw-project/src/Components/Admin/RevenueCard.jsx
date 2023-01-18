import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

const RevenueCard = () => {
  return (
    <Grid templateColumns={{base: "repeat(1, 1fr)", sm:"repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)"}} gap="20px">
        <Box bgColor={"white"} borderRadius="10px" p="10px" boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
            <Flex>
                <Box>
                    <Text color="gray.600" fontWeight="bold">TODAY'S VISITORS</Text>
                    <Text fontSize={{base:"25px", sm:"25px", md:"30px"}} fontWeight="600">15000</Text>  
                </Box>
            </Flex>
            <Flex mt={{base:"5px",lg:"20px"}} justifyContent="space-between" alignItems="flex-end">
                <Text textDecoration="underline"color="gray.600">View all visitors</Text>
                <Box borderRadius="50%" w={{base:"15%", sm:"20%", lg:"25%"}} bgColor="white">
                    <Image m="auto" src="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png" w="80%" /> 
                </Box>
            </Flex>
        </Box>
        <Box bgColor={"white"} borderRadius="10px" p="10px" boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
            <Flex>
                <Box>
                    <Text color="gray.600" fontWeight="bold">TODAY'S ORDERS</Text>
                    <Text fontSize={{base:"25px", sm:"25px", md:"30px"}} fontWeight="600">654</Text>  
                </Box>
            </Flex>
            <Flex mt={{base:"5px",lg:"20px"}} justifyContent="space-between" alignItems="flex-end">
                <Text textDecoration="underline" color="gray.600">View all orders</Text>
                <Box borderRadius="50%" w={{base:"15%", sm:"20%", lg:"25%"}} bgColor="white">
                    <Image m="auto" src="https://icon-library.com/images/my-orders-icon/my-orders-icon-22.jpg" w="80%" /> 
                </Box>
            </Flex>
        </Box>
        <Box bgColor={"white"} borderRadius="10px" p="10px" boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
            <Flex>
                <Box>
                    <Text color="gray.600" fontWeight="bold">TODAY'S EARNINGS</Text>
                    <Text fontSize={{base:"25px", sm:"25px", md:"30px"}} fontWeight="600">Rs. 87049</Text>  
                </Box>
            </Flex>
            <Flex mt={{base:"5px",lg:"20px"}} justifyContent="space-between" alignItems="flex-end">
                <Text textDecoration="underline" color="gray.600">View net revenue</Text>
                <Box w={{base:"15%", sm:"20%", lg:"25%"}} bgColor="white">
                    <Image m="auto" src="https://www.svgrepo.com/download/223766/profits-dollar.svg" w="80%" /> 
                </Box>
            </Flex>
        </Box>
        <Box bgColor={"white"} borderRadius="10px" p="10px" boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
            <Flex>
                <Box>
                    <Text color="gray.600" fontWeight="bold">GROWTH RATE</Text>
                    <Text fontSize={{base:"25px", sm:"25px", md:"30px"}} fontWeight="600">5.06%</Text>  
                </Box>
            </Flex>
            <Flex mt={{base:"5px",lg:"20px"}} justifyContent="space-between" alignItems="flex-end">
                <Text textDecoration="underline" color="gray.600">Compare week</Text>
                <Box w={{base:"15%", sm:"20%", lg:"25%"}} bgColor="white">
                    <Image m="auto" src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-2/254000/102-512.png" w="80%" /> 
                </Box>
            </Flex>
        </Box>
    </Grid>
  )
}

export default RevenueCard