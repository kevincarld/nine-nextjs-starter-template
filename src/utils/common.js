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

export function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = React.useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  React.useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

// usage: mock('1920x600', 'Text here')
export const mock = (dimensions, text='Img', color="gray") => {
  const colors = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
    yellow: "FFFF00",
    orange: "FFA500",
    purple: "800080",
    pink: "FFC0CB",
    gray: "808080",
    maroon: "800000",
    navy: "000080",
    olive: "808000",
    teal: "008080",
    silver: "C0C0C0",
    gold: "FFD700",
    indigo: "4B0082",
    magenta: "FF00FF",
    turquoise: "40E0D0",
    peach: "FFDAB9",
    coral: "FF7F50"
  }
  let newText = text.toString().replaceAll(' ', '+')
  return `https://via.placeholder.com/${dimensions}/${colors[color]}?text=${newText}`
}