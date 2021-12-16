import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import VoxelDogLoader from '../voxel-dog-loader'


const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
    ssr: false,
    loading: () => <VoxelDogLoader />
  })
  

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head >
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> Our NFT </title>
            </Head>

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
            <LazyVoxelDog />
        </Box>


    )
}

export default Main