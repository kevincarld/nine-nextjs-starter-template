
import Layout from "components/util/Layout"
// chakra
import { Center, Heading, Button } from "@chakra-ui/react"
//
import Mover from "components/util/Mover"
import Slider from "components/util/Slider/Slider"

export default function Home() {
  return (
    <Layout>
      <Heading as="h1">Hello World</Heading>
      <Button>Button</Button>

      <Center minH='500px' bg='lightblue'>
        <Mover>
            <Center h='150px' w='400px' bg='beige'>Sample Smooth Parallax</Center>
        </Mover>
      </Center>

      <Center minH='500px' bg='grey'>
        <Mover>
          <Center h='150px' w='400px' bg='beige'>Sample Smooth Parallax</Center>
        </Mover>
      </Center>

      <Center minH='500px' bg='lightblue'>
        <Mover>
          <Center h='150px' w='400px' bg='beige'>Sample Smooth Parallax</Center>
        </Mover>
      </Center>

      <Center minH='500px' bg='grey'>
        <Mover>
          <Center h='150px' w='400px' bg='beige'>Sample Smooth Parallax</Center>
        </Mover>
      </Center>

      <Slider />
    </Layout>
  )
}
