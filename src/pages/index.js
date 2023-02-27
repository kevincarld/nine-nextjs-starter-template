
import Layout from "components/util/Layout"
// chakra
import { Box, Text } from "@chakra-ui/react"
//
import SliderUpDown from "components/util/Slider/SliderUpDown"
import SliderLeftRight from "components/util/Slider/SliderLeftRight"
import TextWave from "components/TextWave"

export default function Home() {
  return (
    <Layout>

      <TextWave />

      <SliderUpDown />

      <Box bg='white' height='40px'/>

      <SliderLeftRight />
    </Layout>
  )
}
