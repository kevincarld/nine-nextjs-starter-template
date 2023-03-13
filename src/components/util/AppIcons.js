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
              <link rel="apple-touch-icon" sizes="57x57" href="https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/apple-touch-icon-57x57-1.png" />
              <link rel="apple-touch-icon" sizes="72x72" href="https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/apple-touch-icon-72x72-1.png" />
              <link rel="apple-touch-icon" sizes="76x76" href="https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/apple-touch-icon-76x76-1.png" />
              <link rel="apple-touch-icon" sizes="114x114" href="https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/apple-touch-icon-114x114-1.png" />
              <link rel="apple-touch-icon" sizes="120x120" href="https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/apple-touch-icon-120x120-1.png" />
              <link rel="apple-touch-icon" sizes="144x144" href="https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/apple-touch-icon-144x144-1.png" />
              <link rel="apple-touch-icon" sizes="152x152" href="https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/apple-touch-icon-152x152-1.png" />
              <link rel="apple-touch-icon" sizes="180x180" href="https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/apple-touch-icon-180x180-1.png" />
            </>
          )
          break;

        case "nine":
          return (
            <>
              <meta name="theme-color" content={theme} />
              <link rel="shortcut icon"
              href="https://brandedcontent.nine.com.au/wp-content/uploads/2021/01/favicon.ico" />
              <link rel="icon"
              href="https://brandedcontent.nine.com.au/wp-content/uploads/2021/01/favicon.ico" />
              <link rel="apple-touch-icon"
              href="https://brandedcontent.nine.com.au/wp-content/uploads/2022/09/apple-touch-icon.png" />
              <link rel="apple-touch-icon"
              sizes="57x57"
              href="https://brandedcontent.nine.com.au/wp-content/uploads/2022/09/apple-touch-icon-57x57-1.png" />
              <link rel="apple-touch-icon"
              sizes="72x72"
              href="https://brandedcontent.nine.com.au/wp-content/uploads/2022/09/apple-touch-icon-72x72-1.png" />
              <link rel="apple-touch-icon"
              sizes="76x76"
              href="https://brandedcontent.nine.com.au/wp-content/uploads/2022/09/apple-touch-icon-76x76-1.png" />
              <link rel="apple-touch-icon"
              sizes="114x114"
              href="https://brandedcontent.nine.com.au/wp-content/uploads/2022/09/apple-touch-icon-114x114-1.png" />
              <link rel="apple-touch-icon"
              sizes="120x120"
              href="https://brandedcontent.nine.com.au/wp-content/uploads/2022/09/apple-touch-icon-120x120-1.png" />
              <link rel="apple-touch-icon"
              sizes="144x144"
              href="https://brandedcontent.nine.com.au/wp-content/uploads/2022/09/apple-touch-icon-144x144-1.png" />
              <link rel="apple-touch-icon"
              sizes="152x152"
              href="https://brandedcontent.nine.com.au/wp-content/uploads/2022/09/apple-touch-icon-152x152-1.png" />
              <link rel="apple-touch-icon"
              sizes="180x180"
              href="https://brandedcontent.nine.com.au/wp-content/uploads/2022/09/apple-touch-icon-180x180-1.png" />
            </>
          )
          break;

        case "afr":
          return (
            <>
              <meta name="theme-color" content={theme} />
              <link rel="shortcut icon"
                    href="https://brandedcontent.afr.com/wp-content/uploads/2018/07/favicon-4.ico" />
              <link rel="icon"
                    href="https://brandedcontent.afr.com/wp-content/uploads/2018/07/favicon-4.ico" />
              <link rel="apple-touch-icon"
                    href="https://brandedcontent.afr.com/wp-content/uploads/2018/07/apple-touch-icon-3.png" />
              <link rel="apple-touch-icon"
                    sizes="57x57"
                    href="https://brandedcontent.afr.com/wp-content/uploads/2018/07/apple-touch-icon-57x57-3.png" />
              <link rel="apple-touch-icon"
                    sizes="72x72"
                    href="https://brandedcontent.afr.com/wp-content/uploads/2018/07/apple-touch-icon-72x72-3.png" />
              <link rel="apple-touch-icon"
                    sizes="76x76"
                    href="https://brandedcontent.afr.com/wp-content/uploads/2018/07/apple-touch-icon-76x76-3.png" />
              <link rel="apple-touch-icon"
                    sizes="114x114"
                    href="https://brandedcontent.afr.com/wp-content/uploads/2018/07/apple-touch-icon-114x114-3.png" />
              <link rel="apple-touch-icon"
                    sizes="120x120"
                    href="https://brandedcontent.afr.com/wp-content/uploads/2018/07/apple-touch-icon-120x120-3.png" />
              <link rel="apple-touch-icon"
                    sizes="144x144"
                    href="https://brandedcontent.afr.com/wp-content/uploads/2018/07/apple-touch-icon-144x144-3.png" />
              <link rel="apple-touch-icon"
                    sizes="152x152"
                    href="https://brandedcontent.afr.com/wp-content/uploads/2018/07/apple-touch-icon-152x152-3.png" />
              <link rel="apple-touch-icon"
                    sizes="180x180"
                    href="https://brandedcontent.afr.com/wp-content/uploads/2018/07/apple-touch-icon-180x180-3.png" />
            </>
          )
          break;

        case "traveller":
          return (
            <>
              <meta name="theme-color" content={theme} />
              <link rel="shortcut icon"
                    href="https://brandedcontent.traveller.com.au/wp-content/uploads/2018/08/favicon.ico" />
              <link rel="icon"
                    href="https://brandedcontent.traveller.com.au/wp-content/uploads/2018/08/favicon.ico" />
              <link rel="apple-touch-icon"
                    href="https://brandedcontent.traveller.com.au/wp-content/uploads/2018/08/apple-touch-icon.png" />
              <link rel="apple-touch-icon"
                    sizes="57x57"
                    href="https://brandedcontent.traveller.com.au/wp-content/uploads/2018/08/apple-touch-icon-57x57.png" />
              <link rel="apple-touch-icon"
                    sizes="72x72"
                    href="https://brandedcontent.traveller.com.au/wp-content/uploads/2018/08/apple-touch-icon-72x72.png" />
              <link rel="apple-touch-icon"
                    sizes="76x76"
                    href="https://brandedcontent.traveller.com.au/wp-content/uploads/2018/08/apple-touch-icon-76x76.png" />
              <link rel="apple-touch-icon"
                    sizes="114x114"
                    href="https://brandedcontent.traveller.com.au/wp-content/uploads/2018/08/apple-touch-icon-114x114.png" />
              <link rel="apple-touch-icon"
                    sizes="120x120"
                    href="https://brandedcontent.traveller.com.au/wp-content/uploads/2018/08/apple-touch-icon-120x120.png" />
              <link rel="apple-touch-icon"
                    sizes="144x144"
                    href="https://brandedcontent.traveller.com.au/wp-content/uploads/2018/08/apple-touch-icon-144x144.png" />
              <link rel="apple-touch-icon"
                    sizes="152x152"
                    href="https://brandedcontent.traveller.com.au/wp-content/uploads/2018/08/apple-touch-icon-152x152.png" />
              <link rel="apple-touch-icon"
                    sizes="180x180"
                    href="https://brandedcontent.traveller.com.au/wp-content/uploads/2018/08/apple-touch-icon-180x180.png" />
            </>
          )
          break;

        case "brisbanetimes":
          return (
            <>
              <meta name="theme-color" content={theme} />
              <link rel="shortcut icon"
                    href="./bt/favicon.ico" />
              <link rel="icon"
                    href="./bt/favicon.ico" />
              <link rel="apple-touch-icon"
                    href="https://brandedcontent.brisbanetimes.com.au/wp-content/uploads/2023/03/apple-touch-icon.png" />
              <link rel="apple-touch-icon"
                    sizes="57x57"
                    href="https://brandedcontent.brisbanetimes.com.au/wp-content/uploads/2023/03/apple-touch-icon-57x57-1.png" />
              <link rel="apple-touch-icon"
                    sizes="72x72"
                    href="https://brandedcontent.brisbanetimes.com.au/wp-content/uploads/2023/03/apple-touch-icon-72x72-1.png" />
              <link rel="apple-touch-icon"
                    sizes="76x76"
                    href="https://brandedcontent.brisbanetimes.com.au/wp-content/uploads/2023/03/apple-touch-icon-76x76-1.png" />
              <link rel="apple-touch-icon"
                    sizes="114x114"
                    href="https://brandedcontent.brisbanetimes.com.au/wp-content/uploads/2023/03/apple-touch-icon-114x114-1.png" />
              <link rel="apple-touch-icon"
                    sizes="120x120"
                    href="https://brandedcontent.brisbanetimes.com.au/wp-content/uploads/2023/03/apple-touch-icon-120x120-1.png" />
              <link rel="apple-touch-icon"
                    sizes="144x144"
                    href="https://brandedcontent.brisbanetimes.com.au/wp-content/uploads/2023/03/apple-touch-icon-144x144-1.png" />
              <link rel="apple-touch-icon"
                    sizes="152x152"
                    href="https://brandedcontent.brisbanetimes.com.au/wp-content/uploads/2023/03/apple-touch-icon-152x152-1.png" />
              <link rel="apple-touch-icon"
                    sizes="180x180"
                    href="https://brandedcontent.brisbanetimes.com.au/wp-content/uploads/2023/03/apple-touch-icon-180x180-1.png" />
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
