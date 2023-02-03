
import Layout from "components/util/Layout"
// chakra
import { Heading, Button } from "@chakra-ui/react"
//
import Slider from "components/util/Slider/Slider"

export default function Home() {
  return (
    <Layout>
      <Heading as="h1">Hello World</Heading>
      <Button>Button</Button>

      <Slider />
    </Layout>
  )
}
