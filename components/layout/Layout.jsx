import React from 'react';
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import NavBar from '../navbar/Navbar'
import Footer from '../footer/Footer'



const Layout = ({children}) => {
    return <>
        <Head>
            <title>Real |M| state</title>
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header>
                <NavBar/>

            </header>
            <main display="flex" alignItems="center" justifyContent="center">
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>

        </Box>
    </>;
};

export default Layout;
