import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '../navbar'
import KokoLoader from '../koko-loader'


const LazyKoko = dynamic(() => import('../koko'), {
    ssr: false,
    loading: () => <KokoLoader />
  })
  

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={0}>
            <Head >
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> Our NFT </title>
            </Head>

            <Container maxW="container.md" pt={0}>
                {children}
                <LazyKoko />
            </Container>
        </Box>


    )
}

export default Main