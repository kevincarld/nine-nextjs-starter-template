import React from 'react'

// types: smh, goodfood
export default function AppIcons({type="smh", theme="#0a1633"}) {

  const renderAppIcons = (theme="#0a1633") => {
    switch (type) {
        case "smh":
          return (
            <>
              <meta name="theme-color" content={theme} />
              <link rel="shortcut icon" href="https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/favicon.ico" />
              <link rel="icon" href="https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/favicon.ico" />
              <link rel="apple-touch-icon"
                href="https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-4.png" />
              <link rel="apple-touch-icon" sizes="57x57"
                href="https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-57x57-4.png" />
              <link rel="apple-touch-icon" sizes="72x72"
                href="https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-72x72-4.png" />
              <link rel="apple-touch-icon" sizes="76x76"
                href="https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-76x76-4.png" />
              <link rel="apple-touch-icon" sizes="114x114"
                href="https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-114x114-4.png" />
              <link rel="apple-touch-icon" sizes="120x120"
                href="https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-120x120-4.png" />
              <link rel="apple-touch-icon" sizes="144x144"
                href="https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-144x144-4.png" />
              <link rel="apple-touch-icon" sizes="152x152"
                href="https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-152x152-4.png" />
              <link rel="apple-touch-icon" sizes="180x180"
                href="https://brandedcontent.smh.com.au/wp-content/uploads/2018/06/apple-touch-icon-180x180-4.png" />
            </>
          )
          break;

        case "goodfood":
          return (
            <>
              <meta name="theme-color" content={theme} />
              <link rel="shortcut icon"
                    href="https://brandedcontent.goodfood.com.au/wp-content/uploads/2021/03/favicon.ico" />
              <link rel="icon"
                    href="https://brandedcontent.goodfood.com.au/wp-content/uploads/2021/03/favicon.ico" />
              <link rel="apple-touch-icon"
                    href="https://brandedcontent.goodfood.com.au/wp-content/uploads/2021/03/apple-touch-icon-1.png" />
              <link rel="apple-touch-icon"
                    sizes="57x57"
                    href="https://brandedcontent.goodfood.com.au/wp-content/uploads/2021/03/apple-touch-icon-57x57-1.png" />
              <link rel="apple-touch-icon"
                    sizes="72x72"
                    href="https://brandedcontent.goodfood.com.au/wp-content/uploads/2021/03/apple-touch-icon-72x72-1.png" />
              <link rel="apple-touch-icon"
                    sizes="76x76"
                    href="https://brandedcontent.goodfood.com.au/wp-content/uploads/2021/03/apple-touch-icon-76x76-1.png" />
              <link rel="apple-touch-icon"
                    sizes="114x114"
                    href="https://brandedcontent.goodfood.com.au/wp-content/uploads/2021/03/apple-touch-icon-114x114-1.png" />
              <link rel="apple-touch-icon"
                    sizes="120x120"
                    href="https://brandedcontent.goodfood.com.au/wp-content/uploads/2021/03/apple-touch-icon-120x120-1.png" />
              <link rel="apple-touch-icon"
                    sizes="144x144"
                    href="https://brandedcontent.goodfood.com.au/wp-content/uploads/2021/03/apple-touch-icon-144x144-1.png" />
              <link rel="apple-touch-icon"
                    sizes="152x152"
                    href="https://brandedcontent.goodfood.com.au/wp-content/uploads/2021/03/apple-touch-icon-152x152-1.png" />
              <link rel="apple-touch-icon"
                    sizes="180x180"
                    href="https://brandedcontent.goodfood.com.au/wp-content/uploads/2021/03/apple-touch-icon-180x180-1.png" />
            </>
          )
          break;


        default:
          return null;
    }
  };

  return (
    <>
      { renderAppIcons(theme) }
    </>
  )
}
