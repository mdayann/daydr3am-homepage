import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Muhammad Dayan. All Rights Reserved.
      <br />
      <Link href="https://www.craftz.dog/" target="_blank">
                Design by @craftzdog
            </Link>
    </Box>
  )
}

export default Footer
