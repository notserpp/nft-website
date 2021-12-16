import { Container, Box, Image } from '@chakra-ui/react'




const Page = () => {
    const footPrintImg = `/images/koko.png`
    

    return (
        <Container>
            <Box align="center">
                    <Image src={footPrintImg} height={60} alt="koko" />
            </Box>
        </Container>
    )
}

export default Page