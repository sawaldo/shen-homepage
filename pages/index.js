import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import Layout from '../components/layouts/article';
import { IoLogoLinkedin, IoLogoXbox, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons';
import * as React from 'react';
import Timeline from '../components/Timeline/timeline';
import Image from 'next/image';


const ProfileImage = chakra(Image, {
       shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
     })

const Home = () => (
       <Layout>
              <Container>
                     <Box 
                            borderRadius="lg"
                            mb={6}
                            p={3}
                            textAlign="center"
                            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                            css={{ backdropFilter: 'blur(10px)' }}
                     >
                            Welcome to Shen&apos;s homepage!
                     </Box>

                     <Box display={{ md: 'flex' }}>
                            <Box flexGrow={1}>
                                   <Heading as='h2' variant="page-title" >
                                          Qinshuo Shen 
                                   </Heading>
                                   <p>Part-time researcher, full-time day-dreamer</p>
                            </Box>
                            <Box 
                                   flexShrink={0}       
                                   mt={{ base: 4, md: 0 }}
                                   ml={{ md: 6 }}
                                   align='center'
                                   >
                                   <Box 
                                          borderColor="whiteAlpha.800"
                                          borderWidth={1}
                                          borderStyle="solid"
                                          w="100px"
                                          h="100px"
                                          display="inline-block"
                                          borderRadius="full"
                                          overflow="hidden"
                                   >
                                   <ProfileImage 
                                          src='/images/profile2.jpg'
                                          alt="Profile Image"
                                          borderRadius="full"
                                          width="100"
                                          height="100"
                                   />
                                   </Box>
                            </Box>
                     </Box>     

                     <Section delay={0.1}>  
                            <Heading as='h3' variant='section-title'>
                                 Who am I
                            </Heading>
                            <Paragraph>
                                   My full name is Qinshuo Shen (Chinese: 沈覃硕). 
                                   Due to the difficulty of pronouncing my name, I can simply go by Shen. 
                                   Based in the Netherlands, I'm a PhD candidate in the <Link href="https://www.utwente.nl/en/">University of Twente</Link>, 
                                   working on the topic of <Link href="https://en.aspari.nl/">Asphalt Paving Research and Innovation (ASPARi)</Link>.
                                   In my research, I'm trying to apply the latest digital technologies, such as Machine Learning, meta-modelling, and physical modelling 
                                   to the field of asphalt construction, to improve the construction process quality.
                                   When not on the job, I enjoy football, MAG (Manga, Anime, and Games), reading books, and of course, drinking beers with my friends.
                                   I'm a lifelong supporter of FC Bayern Munich.
                            </Paragraph>
                            <Heading as='h4' size='md' textAlign="center" fontStyle='italic'>
                                          "Mia san mia!"
                                   </Heading>
                            <Box 
                                   align='center'
                                   my={4}
                            >
                                   <NextLink href="/works">
                                          <Button rightIcon={<ChevronRightIcon />} colorScheme='teal' variant='outline'>
                                                 Check out my works
                                          </Button>
                                   </NextLink>

                            </Box>
                     </Section>

                     <Section className="experience" delay={0.2}>
                            <Heading as='h3' variant='section-title'>
                                 Experience
                            </Heading>

 
                                   <Timeline />

                     </Section>

                     <Section delay={0.3}>
                     <Heading as="h3" variant="section-title">
                     Elsewhere
                     </Heading>
                     <List>
                     <ListItem>
                     <Link href="https://www.linkedin.com/in/qshen2873/" target="_blank">
                            <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoLinkedin />}
                            >
                            @Qinshuo Shen
                            </Button>
                     </Link>
                     </ListItem>

                     <ListItem>
                     <Link href="https://www.instagram.com/shennniiiiiiiiiiii/" target="_blank">
                            <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoInstagram />}
                            >
                            @shennniiiiiiiiiiii
                            </Button>
                     </Link>
                     </ListItem>

                     <ListItem>
                     <Link href="https://github.com/sawaldo" target="_blank">
                            <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoGithub />}
                            >
                            @sawaldo
                            </Button>
                     </Link>
                     </ListItem>

                     </List>



              </Section>


              </Container>
       </Layout>
)



export default Home;

