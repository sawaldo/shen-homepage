import NextLink from 'next/link'
import { Box, Container, Heading, SimpleGrid, Link } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import thumbHomepage from '../../public/images/thoughts/homepage_dev.png'
import thumbBestPaper from '../../public/images/thoughts/bestPaper.jpg'
import thumbJanuary from '../../public/images/thoughts/january/IMG_0748 2.png'


const Thoughts = () => (
  <Layout title="A collection of thoughts">
    <Container>
      <Heading as="h3" fontSize={25} mb={4}>
        A collection of my thoughts
      </Heading>

      <Box my={5}>
        I put my thoughts here, but don't worry, I don't have many. After all, I 
        promised to protect the world from being exposed to my mind. 
      </Box>

      <Section>
        <SimpleGrid columns={[1, 1, 1]} gap={6}>

        <WorkGridItem
            category="thoughts"
            id="january"
            title="
             And here goes January"
            thumbnail={thumbJanuary}
          >
            
          </WorkGridItem>

          
                   
          <WorkGridItem
            category="thoughts"
            id="homePageDev"
            title="
             I built my portfolio website"
            thumbnail={thumbHomepage}
          >
            
          </WorkGridItem>


        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Thoughts
export { getServerSideProps } from '../../components/chakra'