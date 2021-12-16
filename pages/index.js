import { Container, Heading, Box, Image } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box align="center">
                <Heading as='h2' size='xl' variant="page-title">This is our NFT website!</Heading>
                <p>Come and get it!</p>
            </Box>
            <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                textAlign="center"
            >
            </Box>
        </Container>
    )
}

export default Page