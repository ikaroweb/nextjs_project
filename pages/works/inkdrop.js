import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return(
        <Layout title="InkDrop">
            <Container>
                <Title>
                    InkDrop <Badge>2016</Badge>
                </Title>
                <P>ffahlskjfsdaklfdsahklfjdshklafsjhfdskl</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.inkdrop.app">
                        https://www.inkdrop.app <ExternalLinkIcon mx="2px" />
                        </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>Windows/macOs/Linux/iOs/Android</span>
                        </ListItem> 
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>NodeJS, Electron, React Native</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Blogpost</Meta>
                            <Link href=""> www.google.com <ExternalLinkIcon mx="2px" /></Link>
                        </ListItem>
                </List>
                <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop"/>
                <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop"/>

            </Container>
        </Layout>
    )
}

export default Work