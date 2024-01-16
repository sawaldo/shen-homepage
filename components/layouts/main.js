import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar.js";
import dynamic from 'next/dynamic';
import Footer from "../footer.js";


const Main = ({ children, router }) => {
       return (
              <Box as='main' pb={8}>
                     <Head>
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <meta name="description" content="Shen's homepage" />
                            <meta name="author" content="Qinshuo Shen" />
                            <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                            <meta property="og:site_name" content="Qinshuo Shen" />
                            <meta name="og:title" content="Qinshuo Shen" />
                            <meta property="og:type" content="website" />
                            {/* <meta property="og:image" content="https://www.craftz.dog/card.png" /> */}
                            <title>Qinshuo Shen - Homepage</title>
                     </Head>

                     <Navbar path={router.asPath} />

                     <Container maxW='container.md' pt={16}>
                            {children}
                            <Footer />
                     </Container>
              </Box>
       )
}

export default Main;