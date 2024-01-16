import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { WorkGridItem } from "../components/grid-item";
import thumbHomePageDev from "../public/images/thoughts/homepage_dev.png";

const Thoughts = () => (
  <Layout title="Thoughts">
    <Container>
      <Heading as="h3" fontSize={25} mb={4}>
      Thoughts
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
                     <Section>
                            <WorkGridItem 
                            id="thought_1" 
                            title="My first homepage" 
                            thumbnail={thumbHomePageDev}
                            >  
                            How I built my first homepage using Next.js and Chakra UI.
                            </WorkGridItem>                          
                     </Section>       

                     {/* <Section>
                            <WorkGridItem
                            id="2"
                            title="Coupling asphalt construction process quality into product quality using data-driven methods"
                            thumbnail={thumbPDeng}
                            >
                            A data-driven approach to studying the impact of construction process quality on the International Roughness Index (IRI) of roads.
                            </WorkGridItem>
                     </Section>    */}

              </SimpleGrid>

    </Container>
  </Layout>
)

export default Thoughts
export { getServerSideProps } from '../components/chakra'