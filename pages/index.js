import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import { fetchData, baseUrl } from '../utils/fetchApi'
import Property from '../components/property/Property.jsx'

const Banner = ({purpose,imageUrl,title1,title2,desc1,desc2,linkName,buttonText}) =>
(
  <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap" m="10">
    <Image src={ imageUrl } alt="banner-img" width={ 500 } height={400} />
    <Box p="10">

      <Text  color="gray.500" fontSize="medium" fontWeight="medium">{ purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{ title1 } <br /> {title2 }</Text>
      <Text color="gray.700" fontSize={ "lg" } paddingTop="3" paddingBottom="3">{ desc1 } <br />{desc2 }</Text>
      <Button fontSize={"xl"} >
        <Link href={linkName}>
          {buttonText}
        </Link>
      </Button>
      
    </Box>
  </Flex>
)

export default function Home ( {propertiesForSale,propertiesForRent})
{
  return (
    <Box >
      <Banner
        purpose={ "RENT A HOME" }
        title1={ "Rental Homes" }
        title2={ "For Everyone" }
        desc1={ "Explore Apartments,Villas,Homes" }
        desc2={"and more"}
        imageUrl={ "https://images.unsplash.com/photo-1566601146613-82f9dbd68995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" }
        linkName={ "/search?purpose=for-rent " }
        buttonText={"Explore Renting"}
      
      />
      <Flex flexWrap='wrap' justifyContent="center" alignItems="center" borderBottom="1px" borderColor="gray.400">
        {propertiesForRent.map((property)=>(
          <Property property={ property } key={property.id }/>
  ))}
      </Flex>
      <Banner
        purpose={ "BUY A HOME" }
        title1={ "Find,Buy & Own Your" }
        title2={ "Dream Home" }
        desc1={ "Explore Apartments,Villas,Homes" }
        desc2={ "and more" }
        imageUrl={"https://images.unsplash.com/photo-1632999101501-47bd016f7e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
        linkName={ "/search?purpose=for-sale" }
        buttonText={ "Explore Buying" }
      
      />
       <Flex flexWrap='wrap' justifyContent="center" alignItems="center">
        { propertiesForSale.map((property)=>(
          <Property property={ property } key={property.id }/>
  ))}
      </Flex>
    </Box>
  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchData(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchData(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

