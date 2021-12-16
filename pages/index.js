import { Container, Heading, Box, Image, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'



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