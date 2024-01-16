import {
       Container,
       Badge,
       Link,
       List,
       ListItem,
       AspectRatio
     } from '@chakra-ui/react'
     import { ExternalLinkIcon } from '@chakra-ui/icons'
     import { Title, WorkImage, Meta } from '../../components/work'
     import P from '../../components/paragraph'
     import Layout from '../../components/layouts/article'
     
     const Work = () => (
       <Layout title="MetaModel">
         <Container>
           <Title>
           Metamodel-based generative design of wind turbine foundations <Badge>2022-</Badge>
           </Title>
           <P>
           A novel metamodel-based generative design framework is proposed for wind turbine foundations.
           </P>
           <List ml={4} my={4}>
             <ListItem>
               <Meta>Paper</Meta>
               <Link href="https://www.sciencedirect.com/science/article/pii/S0926580522001066">
                 Check out the publication <ExternalLinkIcon mx="2px" />
               </Link>
             </ListItem>
             <ListItem>
               <Meta>Keywords</Meta>
               <span>Generative design/Simulation-based optimization/Wind turbine/Foundation design</span>
             </ListItem>
           </List>
     
           <WorkImage src="/images/works/framework.jpg" alt="Inkdrop" />
           <WorkImage src="/images/works/process.jpg" alt="Inkdrop" />
         </Container>
       </Layout>
     )
     
     export default Work
     export { getServerSideProps } from '../../components/chakra'