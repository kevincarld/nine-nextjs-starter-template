
import Layout from "components/Layout"
// chakra
import { Heading, Button } from "@chakra-ui/react"
// blocks
// import { Hero } from "blocks"

export default function Home() {
  return (
    <Layout>
      <Heading as="h1">Hello World</Heading>
      <Button>Button</Button>

      {/* <Hero /> */}
    </Layout>
  )
}
