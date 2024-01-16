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
// import thumbPortfolio from '../public/images/thoughts/youtube-how-to-build-portfolio.jpg'
import {  } from 'react-icons/io5'

const Thought = () => (
       <Layout title="How I built my first portfolio website">
              <Container>
                     <Title>I built my portfolio website</Title>

                     <P>
                            It has been a while since I wanted to build my own portfolio website, but I never really started, 
                            primarily because I was unsure about the tech I needed.
                            I don't really have a background in web development. I've done some maintenance work on 
                            the website of our research group, but I mainly used the services
                            provided by Wix.com. So basically everything is there already. The design is 
                            nothing more than dragging a few blocks and icons from
                            the panel. I initially thought about just simply using Wix.com to build and host my own homepage.
                            However, as someone who has a big ego to deal with, I eventually 
                            accepted it was my fate to dive into the world of web development.
                            Luckily, I am quite enjoying the process, as well as the end result, although
                            I have only built the initial framework of the website in the first version, 
                            and I will need to gradually enrich the content of the website in the future. 
                            Of course, the biggest challenge is always to maintain the enthusiasm 😂.
                     </P>
                
                     <ThoughtImage src="/images/thoughts/homepage_dev.png" alt="MetaModel" />
                     <Heading as="h4" fontSize={14} mb={4} align='center'>
                     A snapshot 
                     </Heading>

                     <P>
                            I am not going to talk about the details of how I built this website. And quite frankly,
                            since 
                            this homepage is greatly inspired, or even "copied", from the homepage of Matsuyama-kun (松山 くん?),
                            I'm still not that confident to say that I have mastered the skills I need.
                            After seeing this, if you are still curious about the details, you can refer to this video below. 
                            It is a tutorial video made by Matsuyama-kun himself, and a big shout-out to him.
                     </P>
                     {/* <Section delay={0.1}>
                            <SimpleGrid columns={[1, 1, 1]} gap={6}>
                            <GridItem
                            title="How to build a portfolio website"
                            thumbnail={thumbPortfolio}
                            href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
                            />
                            </SimpleGrid>
                     </Section> */}
                     <ThoughtImage src="/images/thoughts/youtube-how-to-build-portfolio.jpg" alt="MetaModel" />
                     <Heading as="h4" fontSize={14} mb={4} align='center'>
                     Click <Text as='u'><Link href="https://www.youtube.com/watch?v=bSMZgXzC9AA">here</Link></Text> to watch the tutorial video 
                     </Heading>

                     <P>
                     Alright, I did make something myself. 
                     I added a few features to the original version, such as the timeline of my education background.
                     Well, it is not that fancy, and far from what I initially imagined, but I'm getting there.

                     </P>
                     <P>
                     I also adjusted the structure of the website a little bit. 
                     
                     In the <Text as='b'><Link href="/works">Works</Link></Text> page, you can find everything related to my work. 
                     Currently, I have only added two project outputs from my previous and current research, but I'm getting there (hopefully). 
                     I also plan to add more work-unrelated projects. There were a few internal jokes in our office, regarding
                     how I should build an app to help each of us to quickly match with a sugar mommy/daddy. 
                     I hope my supervisors won't see this, but since they have also gone through this page in 
                     their academic lives, they should be able to understand our needs, from both the financial and emotional perspectives. But joking aside,
                     I do hope I can develop something cool with my spare time (should I also claim the 
                     time when I cannot focus in the office as my spare time?). 
                     </P>
                     <P>
                     In the <Text as='b'><Link href="/thoughts">Thoughts</Link></Text> page, I will regularly put some
                     posts there. It could be short articles, Plogs (apparently they are similar to Vlogs but with pictures and embedded captions), 
                     maybe diaries (?), or some notes...... I don't know, but we will see. But what I am thinking now is a scene from
                     the Office, where Creed asks Ryan to help him set up a blog, and Ryan just created a Word document for him to protect the 
                     world from Creed's brain. Well, I guess it's too late, I have already started this page and my thoughts have
                      spread on the Internet. Now thinking about it, I could have just used the domain name that Ryan set up for Creed, which is 
                     www.creedthoughts.gov.www/creedthoughts. But sheni.nl is good enough, it has my name and where I'm living now in it.
                     </P>
                     <P>
                     I still need to complete the <Text as='b'><Link href="/about">About</Link></Text> page. It's a little bit tricky, because I don't want it to be
                     repetitive with the homepage. I will try to make it more personal, and maybe add some fun facts about me.
                     </P>
                     <P>
                     Okeydokey, that's it for now. 
                     I will finish this post with some amazing pictures of me, taken by my friend when I was doing my job as a cameraman.
                     during Denis's PhD defense today. Sayonara さよなら!
                     </P>
                     <ThoughtImage src="/images/thoughts/91d660d0-5d00-4995-8bab-ca85e05a7aea.JPG" alt="shen_1" />
                     <Heading as="h4" fontSize={14} mb={4} align='center'>
                     Almost a National Geographic photographer
                     </Heading>
                     <ThoughtImage src="/images/thoughts/c7665d76-e0f7-4465-82a9-bd308fd8c392.JPG" alt="shen_2" />
                     <Heading as="h4" fontSize={14} mb={4} align='center'>
                     I think I closed the wrong eye, that's why I couldn't see anything
                     </Heading>
              </Container>
       </Layout>
)

export default Thought
export { getServerSideProps } from '../../components/chakra'
