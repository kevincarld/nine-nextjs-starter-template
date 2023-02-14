import React from 'react';
import { Box } from '@chakra-ui/react';
export default function MastheadProvider({children}) {
  const hasNineScripts = process.env.nineScripts

  // set default config
  const config = {
    headerConfig: {
      logoColor: "white",
      textColor: "white",
      bgColor: "#0A1633",
      css: {
        boxShadow: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)",
        position: 'fixed',
        top: '0px',
        zIndex: '9999999'
      }
    },
    footerConfig: {
      logoColor: "white",
      textColor: "white",
      bgColor: "#0A1633",
    },
  }

  React.useEffect(() => {
    let isMounted = false;

    const fairfaxInit = async () => {
      const runscript = (await import('fairfax-header')).default

      // TODO: enable mastheadoverride when nine-immersive header is updated
      // const runscript = (await import('nine-immersive-header')).default

      if (!isMounted) {
        runscript({
          headerConfig: config.headerConfig,
          footerConfig: config.footerConfig
        });
      }
    }

    fairfaxInit()

    return () => isMounted = true;

  }, [config]);

  if(!hasNineScripts) return children

  return (
    <Box as='main'>
      <header></header>

        {children}

      <footer></footer>
    </Box>
  )
}