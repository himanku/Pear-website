import { Image,Flex, Text  } from "@chakra-ui/react"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import { useState } from "react";
import ProductFlexCardMac from "./Mac/ProductFlexCardMac";
import ShowDataMac from "./Mac/ShowDataMac";
import ProductFlexCardIpad from "./ProductFlexCardIpad";
import ProductFlexCard from "./ProductFlexCardIpad"
import ShowDataIpad from "./ShowDataIpad";
import ShowData from "./ShowDataIpad";


const ProductTabs = () => {
    const [state, setState] = useState(true);
    const toggleState = () => {
        console.log(state)
        setState(!state);
    }
  return (
    <Tabs colorScheme="cyan" bgColor={"white"}>
    <TabList >
        <Tab w={{base:"100px", sm:"150px"}} onClick={toggleState}>
        <Flex justifyContent={"space-between"}>
            <Text fontWeight={600}>iPAD</Text>
            <Image display={{base:"none", sm:"block"}} objectFit={"cover"} src="https://www.sathya.in/media/77704/catalog/ipad-air-select-wifi-spacegray-202009.png" w="23%"/>
        </Flex>
        </Tab>
        <Tab w={{base:"100px", sm:"150px"}} onClick={toggleState}>
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
        <TabPanel>
            {state && <div>
                <ProductFlexCardIpad/>
                <ShowDataIpad/>
            </div>}
        </TabPanel>
        <TabPanel>
        {!state && <div>
                <ProductFlexCardMac/>
                <ShowDataMac/>
            </div>}
        </TabPanel>
        <TabPanel>
            <Text fontWeight={"bold"} fontSize="20px" textAlign="center">iPhone</Text>
            <Image w="80%" m="auto" src="https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?w=2000"/>
        </TabPanel>
    </TabPanels>
    </Tabs>
  )
}

export default ProductTabs