import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

import { baseUrl, fetchApi } from '../utils/fetchApi'
import Property from '../components/Property'
import Banner from '../components/Banner'

export default function Home({ propertiesForSale, propertiesForRent }) {  
  return (
    <div>
    <Box>

      <Banner 
        purpose='Rent A Home'
        title1="Rental Home for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
{/* 
      <Flex flexWrap='wrap'>
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex> */}

      <Banner 
        purpose='Buy A Home'
        title1="Buy Home"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      
      {/* <Flex flexWrap='wrap'>
        {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
      </Flex>    */}
    </Box>
        
    </div>
  )
}



// export async function getStaticProps() {
//   const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
//   const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

//   console.log( 'HI', propertyForSale, propertyForRent)


//   return {
//     props: {
//       propertiesForSale: propertyForSale?.hits,
//       propertiesForRent: propertyForRent?.hits,
//     },
//   };
// }
