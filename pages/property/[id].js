import React from 'react';
import Image from 'next/image'
import { Flex, Box, Text, Avatar,Spacer } from '@chakra-ui/react'
import { BsGridFill } from 'react-icons/bs'
import { FaBed,FaBath } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import { fetchData, baseUrl } from '../../utils/fetchApi'
import ImageScrollbar from '../../components/imageScrollbar/ImageScrollbar.jsx'

const PropertyDetails = ({propertyDetails:{price,baths,rooms,rentFrequency,title,area,agency,isVerified,description,type,purpose,furnishingStatus,amenities,photos}}) => {
    return (
        <Box maxWidth="1000px" margin="auto" p="4">
            { photos && <ImageScrollbar data={ photos } /> } 
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
                     <Text fontSize="lg" fontWeight="bold" marginTop="4">
                         {title}  
                         
                </Text>
                <Text lineHeight="2" color="gray.600" marginTop="2">
                    {description}
                </Text>
            </Box>
            <Flex flexWrap="wrap" justifyContent="space-between"  border="1px" borderColor="gray.100" m="5" p="2">
                <Flex justifyContent="space-between" w="400px">
                    <Text fontSize="xl">Type</Text>
                    <Text fontSize="xl" fontWeight="bold" textTransform="uppercase">{ type}</Text>
                   
                </Flex>
                <Flex justifyContent="space-between" w="400px">
                    <Text fontSize="l">Purpose</Text>
                    <Text fontSize="l" fontWeight="bold" textTransform="uppercase">{ purpose}</Text>
                   
                </Flex>
                <Flex justifyContent="space-between" w="400px">
                    <Text fontSize="l">Furnish Status</Text>
                    <Text fontSize="l" fontWeight="bold" textTransform="uppercase">{ furnishingStatus}</Text>
                   
                </Flex>
                <Box marginTop="2">
                    {amenities.length && <Text fontSize="xl" fontWeight="black">Amenities</Text>}
                    <Flex flexWrap="wrap">
                        { amenities.map( ( item ) => (
                            item.amenities.map( ( amenity ) => (
                                <Text
                                    fontSize="lg"
                                    p="2"
                                    m="1"
                                    color="blue.400"
                                    bg="gray.200"
                                    borderRadius="5"
                                    key={ amenity.text }
                                >
                                    { amenity.text }
                                </Text>
                            ))
                        ))}

                    </Flex>
                </Box>
               
               
               

            </Flex>

            
            </Box>
        )
};

export default PropertyDetails;

export async function getServerSideProps ({params:{ id }} )
{
    const data = await fetchData(`${baseUrl}/properties/detail?externalID=${id}` )
    
    return {
        props: {
            propertyDetails: data
        }
        
    }
    
}