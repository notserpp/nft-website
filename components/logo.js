import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Fonts from '../components/fonts'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/betty-logo.png`

  return (
    <Link href="/">
      <a>
        <LogoBox >
            <Fonts/>
          <Image src={footPrintImg} width={40} height={40} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
            ml={4}
            mt={3}
          >
            Koko
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo