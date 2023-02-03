import { useContext} from 'react'
import { LocomotiveContext } from './LocomotiveProvider.context'

export function useLocomotive(){
  const context = useContext(LocomotiveContext)

  if (context === undefined) {
    console.warn(
      'react-locomotive-scroll: the context is missing. You may be using the hook without registering LocomotiveScrollProvider, or you may be using the hook in a component which is not wrapped by LocomotiveScrollProvider.'
    )
  }

  return context
}