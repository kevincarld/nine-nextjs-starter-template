import React from 'react';

export default function MastheadProvider({children}) {
  const [mountHead, setMountHead] = React.useState(false)
  React.useEffect(() => {
    const fairfaxInit = async() => {
      const fairfax = (await import('fairfax-header')).default
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
    if(!mountHead){
      fairfaxInit()
      setMountHead(true)
    }
  }, []);

  return (
    <div>
      <header></header>
      {children}
      <footer></footer>
    </div>
  )
}