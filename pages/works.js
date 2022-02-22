import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section';
import { WorkGridItem } from "../components/grid-items";
import Layout from '../components/layouts/article'
import thumbInkdrop from '../public/images/works/inkdrop_01.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbAppstore from '../public/images/works/appstore.png'



const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="inkdrop" title="inkdrop" thumbnail={thumbInkdrop}>
                        Descrizione del progetto
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="walknote" title="walknote" thumbnail={thumbWalknote}>
                        Descrizione del progetto
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="appstore" title="appstore" thumbnail={thumbAppstore}>
                        Descrizione del progetto
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works