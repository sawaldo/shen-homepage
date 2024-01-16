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
      Metamodel-based generative design of wind turbine foundations <Badge>2022</Badge>
      </Title>
      <P>
      Wind turbines play an integral role in energy transition agendas. The optimized design of wind turbine foundations is a complex and intricate task that requires iterative running of computationally-intensive and time-consuming finite element models. However, given the popularity of these structures over the past two decades, there is a wealth of data from the designs of the past projects that can be used for the data-driven modeling of these structures. Given the demonstrated accuracy and success of metamodels as an alternative approach for other computationally-intensive simulation-based problems, this study aims to develop a generative-design framework for the optimization of wind turbine foundations using a metamodel, as a complementary step to more accurate finite element modeling, to reduce the overall design time without compromising the accuracy. To this end, first, the random forest method is used to develop a multi-output metamodel for the wind turbine foundations based on a set of historical data. Then, a metaheuristic method, i.e., NSGA II, is adopted to optimize the design process based on the developed metamodel. In a case study, a wind turbine foundation was designed using the proposed framework and the accuracy of the output was assessed in terms of the ultimate bending moment. The results of the case study indicate that the proposed method provides a significant time gain (i.e., 99.93%) without compromising the accuracy (i.e., 1.75% for the percent error). Besides, the conducted study also offers designers a better understanding of the importance of each design variable and how certain design variables influence the moment-rotation behavior of the wind turbine foundation
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

      <WorkImage src="/images/works/framework.jpg" alt="MetaModel" />
      <WorkImage src="/images/works/process.jpg" alt="MetaModel" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'