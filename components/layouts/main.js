import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import KokoLoader from '../koko-loader'


const LazyKoko = dynamic(() => import('../koko'), {
    ssr: false,
    loading: () => <KokoLoader />
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
            <LazyKoko />
        </Box>


    )
}

export default Main