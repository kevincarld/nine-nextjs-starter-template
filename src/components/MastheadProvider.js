import React from 'react';

export default function MastheadProvider({children}) {
  // set default config
  const config = {
    headerConfig: {
      logoColor: "white",
      textColor: "white",
      bgColor: "#0A1633",
      css: {
        boxShadow: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)",
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

  return (
    <div>
      <header></header>
      {children}
      <footer></footer>
    </div>
  )
}