import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const KokoSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const KokoContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="koko"
    m="auto"
    mt={['-20px', '-60px', '-220px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 300, 640]}
    h={[280, 300, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <KokoContainer>
      <KokoSpinner />
    </KokoContainer>
  )
}

export default Loader