import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Avatar } from '@chakra-ui/react'
import { BsGridFill } from 'react-icons/bs'
import { FaBed,FaBath } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import defaultImage from '../../assets/images/house.jpg'
 

 
 const Property = ({property:{coverPhoto,price,rentFrequency,rooms,title,baths,area,agency,isVerified,externalID}}) => {

     return (
        <Link href={ `/${ externalID }` } passHref>
            <Flex flexWrap='wrap' w="420px" paddingTop="0" p="5" justifyContent="flex-start" alignItems="Center" cursor="pointer">
                <Box>
                    <Image width={ 400 } height={260}src={coverPhoto?coverPhoto.url:defaultImage } alt="house"/>
                </Box>
                <Box w="full">
                <Flex alignItems="center" paddingTop="2"  justifyContent="space-between">
                         <Flex  alignItems="center">
                             <Box color="green.400" paddingRight="3">{ isVerified && <GoVerified /> }</Box>
                    <Text fontSize="lg" fontWeight="bold">
                        AED {millify(price)}{rentFrequency && `/${rentFrequency}`}
                             </Text>
                         </Flex>
                     <Box>
                         <Avatar size="sm" src={agency?.logo?.url} />
                     </Box>
                </Flex>
                     <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                         {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/>
                     </Flex>
                     <Text fontSize="lg">
                         {title.length>30 ? `${title.substring(0,30)}...`:{title}}  
                         
                     </Text>
                </Box>
            </Flex>
        </Link>
     )
 };
 
 export default Property;
 