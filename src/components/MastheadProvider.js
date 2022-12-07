import React from 'react';

export default function MastheadProvider({children}) {

  React.useEffect(() => {
    let isMounted = false;

    const fairfaxInit = async () => {
      const fairfax = (await import('fairfax-header')).default

      if (!isMounted) {
        fairfax({
          headerConfig: {
            logoColor: "black",
            textColor: "black",
            bgColor: "white",
            css: {
              boxShadow: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)"
            }
          },
          footerConfig: {
            logoColor: "black",
            textColor: "black",
            bgColor: "white",
          }
        });
      }
    }

    fairfaxInit()

    return () => isMounted = true;

  }, []);

  return (
    <div>
      <header></header>
      {children}
      <footer></footer>
    </div>
  )
}