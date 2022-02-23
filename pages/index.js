import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, useColorModeValue, Link, SimpleGrid, ListItem, List, Icon } from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-items'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoDiscord} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
const Page = () => {
    const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`
    return(
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} mb={6} p={3} align="center">
                Benvenuto su InTouchDesign
            </Box>
            
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        InTouchDesign
                    </Heading>
                    <p>Web Agency - Realizzazione Siti Internet / E-Commerce / Applicazioni Mobile</p>
                </Box>
                <Box flexShrink={0} mt={{ base:4,  md:0}} ml={{ md:6 }} align="center">
                    <Image //borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                   // borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    //borderRadius="full" 
                    src={logoImg}
                    alt="Profile Image" />
                </Box>
            </Box>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna ex, vulputate vel elit nec, malesuada vulputate nisi. Praesent feugiat urna sit amet odio lobortis, quis fringilla sem suscipit. Morbi vel ex pulvinar neque posuere vestibulum id id metus. Cras tincidunt, orci quis elementum blandit, ex neque aliquet dui, nec iaculis leo velit quis dolor. Sed tincidunt rutrum vestibulum. Etiam vitae libero consectetur, viverra neque at, ultricies eros. Ut ultricies neque vel justo bibendum tincidunt {' ' } 
                <NextLink href="/works/inkdrop"><Link>Inkdrop</Link></NextLink>.</Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={ <ChevronRightIcon /> } colorScheme="teal">
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>
                        1980 Nato a Bojano (CB)
                    </BioYear>
                </BioSection>
                <BioSection>
                    <BioYear>
                        2000 Diploma Perito Informatico
                    </BioYear>
                </BioSection>
                <BioSection>
                    <BioYear>
                        2005 Università Ing. Informatica Politecnico di Torino
                    </BioYear>
                </BioSection>
                <BioSection>
                    <BioYear>
                        2015 ad oggi InTouchDesign
                    </BioYear>
                </BioSection>
                </Section>   
                <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I Love
                </Heading>          
                <Paragraph>Musica, Viaggiare, {' '}<Link href="https://instagram.com/ikaroweb" target="_blank">Mangiare</Link></Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                           <Link href='github' target="_blank">
                               <Button 
                               variant="ghost" 
                               colorScheme="teal" 
                               leftIcon={<Icon as={IoLogoGithub} />}
                               > 
                                   @ikaroweb
                               </Button>
                               </Link> 
                        </ListItem>
                        <ListItem>
                           <Link href='github' target="_blank">
                               <Button 
                               variant="ghost" 
                               colorScheme="teal" 
                               leftIcon={<Icon as={IoLogoTwitter} />}
                               > 
                                   @ikaroweb
                               </Button>
                               </Link> 
                        </ListItem>
                        <ListItem>
                           <Link href='github' target="_blank">
                               <Button 
                               variant="ghost" 
                               colorScheme="teal" 
                               leftIcon={<Icon as={IoLogoInstagram} />}
                               > 
                                   @ikaroweb
                               </Button>
                               </Link> 
                        </ListItem>
                        <ListItem>
                           <Link href='github' target="_blank">
                               <Button 
                               variant="ghost" 
                               colorScheme="teal" 
                               leftIcon={<Icon as={IoLogoDiscord} />}
                               > 
                                   @ikaroweb
                               </Button>
                               </Link> 
                        </ListItem>
                    </List>
                    <SimpleGrid columns={[1,2,2]} gap={6}>
                        <GridItem href="/" title="titolo link al sito" thumbnail={thumbYouTube}>My Youtube Channel</GridItem>
                        <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
                    </SimpleGrid>
                </Section>
        </Container>  
        </Layout>
    )
}

export default Page