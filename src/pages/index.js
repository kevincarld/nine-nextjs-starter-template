
import Layout from "components/util/Layout"
// chakra
import { Heading, Button } from "@chakra-ui/react"
//
import Container from "components/util/Container"

export default function Home() {
  return (
    <Layout>
      <Container>
        <Heading as="h1">Hello World</Heading>
        <Button>Button</Button>
      </Container>
    </Layout>
  )
}
