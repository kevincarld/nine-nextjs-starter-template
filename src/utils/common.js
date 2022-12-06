import { useTheme, useMediaQuery } from "@chakra-ui/react"

export function useResponsive(query, key) {
  const theme = useTheme();

  // const mediaUp = useMediaQuery(theme.breakpoints.up(key));
  const [mediaUp] = useMediaQuery(`(min-width: ${theme.breakpoints[key]})`)

  const [mediaDown] = useMediaQuery(`(max-width: ${theme.breakpoints[key]})`)

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

}