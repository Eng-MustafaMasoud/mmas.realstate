import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer,Text } from '@chakra-ui/react'
import Link from 'next/link'
import {FcMenu,FcHome,FcAbout} from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'
const Navbar = () => {
    return (
        <Flex my="10" paddingBottom="3"borderBottom="1px" borderColor="gray.300">
            <Box display="flex" alignItems="center" justifyContent="space-between" w="full">
                <Text fontSize="3xl" fontWeight="bold" color="blue.400">
                    <Link href="/" passHref>
                        |M|Realtor
                    </Link>  
                </Text>
                <Spacer/>
                <Menu>
                      <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<FcMenu />}
                        variant='outline'
                    />
                    <MenuList>
                        <Link href="/" passHref>
                        
                            <MenuItem icon={<FcHome />}>
                                Home
                            </MenuItem>
                        </Link>
                      <Link href="/search" passHref>
                        
                            <MenuItem icon={< BsSearch/>} >
                               Search 
                            </MenuItem>
                        </Link>
                        <Link href="search?purpose=for-sale" passHref>
                        
                            <MenuItem icon={<FiKey/>} >
                                 Buy Property
                            </MenuItem>
                        </Link>
                        <Link href="search?purpose=for-rent" passHref>
                        
                            <MenuItem icon={< FcAbout/>} >
                                 Rent Property
                            </MenuItem>
                        </Link>
                       
                    </MenuList>
                    

                </Menu>

            </Box>

        </Flex>
  
        )
};

export default Navbar;
