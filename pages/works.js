import { 
Container,
Box,
Heading,
SimpleGrid,
Divider } 
from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbMetaModel from "../public/images/works/meta_model.jpg";
import thumbPDeng from "../public/images/works/PDeng.jpg";
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'


import Layout from "../components/layouts/article";

const Works = () => (
       <Layout title="Works">
              <Container>
              <Heading as="h3" fontSize={25} mb={4}>
                     Works
              </Heading>
              <SimpleGrid columns={[1, 1, 2]} gap={6}>
                     <Section>
                            <WorkGridItem 
                            id="meta_model" 
                            title="Metamodel-based generative design of wind turbine foundations" 
                            thumbnail={thumbMetaModel}
                            >  
                            A novel metamodel-based generative design framework is proposed for wind turbine foundations, which can be used as a surrogate to the FEA model in the traditional static method.
                            </WorkGridItem>                          
                     </Section>                
                     <Section>
                            <WorkGridItem
                            id="ISARC2023"
                            title="Coupling asphalt construction process quality into product quality using data-driven methods"
                            thumbnail={thumbPDeng}
                            >
                            A data-driven approach to studying the impact of construction process quality on the International Roughness Index (IRI) of roads.
                            </WorkGridItem>
                     </Section>   

              </SimpleGrid>
              </Container>
       </Layout>
)

export default Works;
export { getServerSideProps } from '../components/chakra';