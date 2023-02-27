
import Layout from "components/util/Layout"
// chakra
import { Heading, Button } from "@chakra-ui/react"
//
import SliderUpDown from "components/util/Slider/SliderUpDown"
import SliderLeftRight from "components/util/Slider/SliderLeftRight"

export default function Home() {
  return (
    <Layout>
      <SliderUpDown />
      {/* <SliderLeftRight /> */}
    </Layout>
  )
}
