import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Text, Icon,Select, Button, Input } from '@chakra-ui/react'
import Image from 'next/image'
import { MdCancel } from 'react-icons/md'
import { filterData, getFilterValues } from '../../utils/filterData'



const SearchFilter = () =>
{
    const [ filters, setFilters ] = useState( filterData );
    const router = useRouter();
    const searchProperties = (filterValues) =>
    {
    
        const path = router.pathname;
        const { query } = router;
    
        const values = getFilterValues( filterValues )
        
        values.forEach( item =>
        {
            if ( item.value && filterValues?.[ item.name ] ) {
                
                query[ item.name ] = item.value;
            }
            
        } );
        
        router.push({pathname:path,query})
}


    return (
        
        <Flex flexWrap="wrap" bg="gray.100">
            { filters.map( (filter) => (
                
            <Box key={filter.queryName}>

                { <Select placeholder={filter.placeholder} w="fit-content" p="2" onChange={(e)=>searchProperties({[filter.queryName]: e.target.value})}>
                        { filter?.items?.map( ( item ) => (
                            <option value={item.value} key={item.value}> 
                                {item.name}
                       </option>
                   ))}
                </Select> } 

            </Box>
            ))}

            </Flex>
       
        
        )
};

export default SearchFilter;
