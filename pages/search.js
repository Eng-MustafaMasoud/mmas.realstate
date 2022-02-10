import React,{useState} from 'react';
import { Box, Flex,Text,Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { BsFilter } from 'react-icons/bs'
 import Image from 'next/image'
import SearchFilter from '../components/searchFilter/SearchFilter.jsx'
import Property from '../components/property/Property.jsx'
import noresult from '../assets/images/noresult.svg'
import {fetchData} from '../utils/fetchApi.js'
import {baseUrl} from '../utils/fetchApi.js'
 

const Search = ({properties}) =>
{
     
    const [ searchFilters, setSearchFilters ] = useState( false )
    const router = useRouter();
     return (
         <Box>
             <Flex
                 cursor="pointer"
                 alignItems="center"
                 justifyContent="center"
                 p="2"
                 bg="gray.100"
                 fontSize="lg"
                 fontWeight="black"
                 onClick={()=>setSearchFilters((prevFilter)=>!prevFilter)}
             > 
                 <Text paddingRight="2">Search By Filters</Text>
                 <Icon fontSize="xl" w="7" as= {BsFilter} /> 
             </Flex>
             { searchFilters && <SearchFilter /> }
             <Text fontSize="xl" fontWeight="bold" p="4">
                 Properties {router.query.purpose }
             </Text>
             <Flex flexWrap="wrap">
                 { properties.map( (property) =>{
                     return ( <Property property={ property } key={ property.id}/>)  
                 })}

             </Flex>
             { properties.length === 0 && (
                 <Flex justifyContent="center " alignItems="center" flexDirection="column" >
                     <Image src={ noresult } alt=" no results" />
                     <Text fontSize="2xl">
                         No Results Found!
                     </Text>
                 </Flex>
             )}
         </Box>
        )
 };
 
 export default Search;
 

 export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchData(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
    props: {
      properties: data?.hits,
    },
  };
}