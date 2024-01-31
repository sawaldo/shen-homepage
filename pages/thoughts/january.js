import {
       Container,
       Heading,
       Text,
       SimpleGrid,
       AspectRatio,
       Box,
       useColorModeValue
     } from '@chakra-ui/react'
import { Title, ThoughtImage, Meta } from '../../components/thought'
import P from '../../components/post_paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import GridItem from '../../components/grid-item'
import Link from 'next/link'
import {  } from 'react-icons/io5'

const Thought = () => (
       <Layout title="Here goes January">
              <Container>
                     <Title>And here goes January</Title>

                     <P>
                     Where should I start? Oh, here is a reminder that 2024 is 8% complete after January.
                     </P>
                     <ThoughtImage src="/images/thoughts/january/progress_bar.jpeg" alt="ProgressBar" />
                     <Heading as="h4" fontSize={14} mb={4} align='center'>
                     2024 progress (from <Link href='https://twitter.com/progressbar202_?lang=en'>@ProgressBar202_</Link>)
                     </Heading>                     
                     <P>
                     Well, January in the Netherlands is generally cold, snowy, a little bit gloomy, and super windy sometimes. 
                     But don't tell me you expect something else other than that.
                     </P>

                     <ThoughtImage src="/images/thoughts/january/967A2A85-5DE2-4354-9F8A-D5CE305AC3DC.jpg" alt="SnowyUT" />
                     <Heading as="h4" fontSize={14} mb={4} align='center'>
                     UT after snow 
                     </Heading>

                     <P>
                     After spending my Christmas vacation in China, I came back to Enschede with 3 more kilograms weight, as well as more severe (yet finally diagnosed) skin problems. 
                     That is why I started using some antibiotics for the treatment, which I was warned that the medication may make my skin hyper-sensitive to the sunlight (even for the Dutch winter sun), therefore, it will be easier for me to get sunburns. 
                     Never thought I will start living a vampire life, thanks to my broken skin.
                     </P>

                     <P>
                     My friends were also back from their vacations, and we started to hang out again. 
                     I finally got my luchador mask from Mexico, as well as my westler name, which is <Text as='i'>Sombra del Tigre</Text>,
                     meaining <Text as='i'>Shadow of the Tiger</Text>, or <Text as='i'>虎影</Text> in Chinese.
                     </P>
                     <ThoughtImage src="/images/thoughts/january/8D54E66B-3039-4298-AAD0-E324393E1A25.JPG" alt="Sombra_del_Tigre" />
                     <Heading as="h4" fontSize={14} mb={4} align='center'>
                     Yes, I met a fan today 
                     </Heading>
                     <P>
                     In case academia doesn't work out, I can always become a luchador. 
                     Still need an entrance song tho. So far I have limited my options to <Text as='i'>The Office theme</Text>, <Text as='i'>Gangnam style</Text>, 
                     and <Text as='i'>take on me</Text>.
                     </P>
                     <P>
                     Also said goodbye to some friends. One guy from Italy spent his entire visiting period
                     in teaching me how to play scopa, and left me with a deck of those special cards.
                     </P>
                     <ThoughtImage src="/images/thoughts/january/B5976CC9-FDF5-47AE-A6DE-B9C16E18A5E1.JPG" alt="Scopa" />
                     <Heading as="h4" fontSize={14} mb={4} align='center'>
                     Yet I'm still confused about the rules
                     </Heading>
                     <P>
                     Some other friends were just graduated. 
                     </P>
                     <ThoughtImage src="/images/thoughts/january/6BA6CE65-FDF0-41C8-A4FA-2D1D14052645.jpg" alt="GoodBye" />
                     <Heading as="h4" fontSize={14} mb={4} align='center'>
                     Goodbye friend
                     </Heading>
                     <P>
                     I told them that we may not see each other much,
                     but I will be thinking about them all the time. 
                     </P>

                     <P>
                     They went first, and I helped them collect the poker cards that fell out of their pockets because they were running too fast. I always ran in the tailwind they left, but somehow I didn’t feel that the wind resistance would be much reduced. It’s just that they hit every high wall that I might have to hit, and fell down every trench that I might have to fall into, and then told me: “There is nothing wrong with this path, so just keep moving forward. But you've used up your one chance to get help...... Goodbye, friend.". 
                     </P>
                  
                     <ThoughtImage src="/images/thoughts/january/520B9B42-E4E6-401F-8945-524B2DB17C6A.JPG" alt="HugItOut" />
                     <Heading as="h4" fontSize={14} mb={4} align='center'>
                     When you need to deal with your inner demon
                     </Heading>
              </Container>
       </Layout>
)

export default Thought
export { getServerSideProps } from '../../components/chakra'
