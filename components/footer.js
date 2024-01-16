import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Qinshuo Shen. This homepage is inspired by the great work of <Link href='https://www.craftz.dog/'>Takuya Matsuyama</Link>. All Rights Reserved.
    </Box>
  )
}

export default Footer