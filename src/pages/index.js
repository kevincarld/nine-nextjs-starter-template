
import Layout from "components/Layout"
// chakra
import { Heading, Button } from "@chakra-ui/react"
//
import ScrollMomentum from "components/ScrollMomentum"

export default function Home() {
  return (
    <Layout>
      <ScrollMomentum>
        <Heading as="h1">Hello World</Heading>
        <Button>Button</Button>

      </ScrollMomentum>
    </Layout>
  )
}
