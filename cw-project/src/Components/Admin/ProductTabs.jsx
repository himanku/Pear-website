import { Image,Flex, Text  } from "@chakra-ui/react"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import ProductFlexCard from "./ProductFlexCard"
import ShowData from "./ShowData"

const ProductTabs = () => {
  return (
    <Tabs colorScheme="cyan" bgColor={"white"}>
    <TabList >
        <Tab w={{base:"100px", sm:"150px"}}>
        <Flex justifyContent={"space-between"}>
            <Text fontWeight={600}>iPAD</Text>
            <Image display={{base:"none", sm:"block"}} objectFit={"cover"} src="https://www.sathya.in/media/77704/catalog/ipad-air-select-wifi-spacegray-202009.png" w="23%"/>
        </Flex>
        </Tab>
        <Tab w={{base:"100px", sm:"150px"}}>
        <Flex justifyContent={"space-between"}>
            <Text fontWeight={600}>MAC</Text>
            <Image display={{base:"none", sm:"block"}} objectFit={"cover"} src="https://help.apple.com/assets/613FDE81C88FF868634BFD43/613FDE85C88FF868634BFD52/en_GB/7d204cd60ff1fce24cf6d11f24cd210a.png" w="35%"/>
        </Flex>
        </Tab>
        <Tab w={{base:"100px", sm:"150px"}}>
        <Flex justifyContent={"space-between"}>
            <Text fontWeight={600}>iPHONE</Text>
            <Image display={{base:"none", sm:"block"}} objectFit={"cover"} src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" w="25%"/>
        </Flex>
        </Tab>
    </TabList>
    <TabPanels>
        <TabPanel >
            <ProductFlexCard/>
            <ShowData/>
        </TabPanel>
        <TabPanel>
            <Image src="https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?w=2000"/>
        </TabPanel>
        <TabPanel >
            <p>iPhone</p>
        </TabPanel>
    </TabPanels>
    </Tabs>
  )
}

export default ProductTabs