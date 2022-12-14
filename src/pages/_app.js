import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

// import 'swiper/css';
// import "swiper/css/pagination";
// import "swiper/css/navigation";

export default function App({ Component, pageProps }) {
  const isDev = process.env.NODE_ENV === 'development'
  const hasNineScripts = process.env.nineScripts

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Nine starter template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />

        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="2221664741450677" />
        <meta property="og:site_name" content="masthead" />

        <meta property="og:title" content="Brand - Title - masthead" />
        <meta name="twitter:title" content="Brand - Title - masthead" />

        <meta property="og:description" content="desc" />
        <meta name="twitter:description" content="desc" />
        <meta name="description" content="desc" />

        <link rel="canonical" href="https://brandedcontent.smh.com.au/xxx/xxx" />
        <meta property="og:url" content="https://brandedcontent.smh.com.au/xxx/xxx" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image" content="https://live-native-paid-content.pantheonsite.io/wp-content/uploads/xxx" />
        <meta property="og:image:secure_url" content="https://live-native-paid-content.pantheonsite.io/wp-content/uploads/xxx" />
        <meta name="twitter:image" content="https://live-native-paid-content.pantheonsite.io/wp-content/uploads/xxx" />

        <meta name="theme-color" content="#0a1633" />
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
      </Head>

      {!isDev && hasNineScripts &&
      <>
        <Script id="titan">
          {`
            var dataLayer = window.dataLayer || [];

            let pageViewId;
            function uuidv4() {
              return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
              );
            }
            pageViewId = uuidv4();

            var sysEnv = "desktop";
            if (window.innerWidth < 1000) {
              sysEnv = "mobile";
            }

            dataLayer.push({
              page: {
                author: "",
                publishDate: "03-12-22AEST00:00:0000000",
                updateDate: "03-12-22AEST00:00:0000000",
                renderedPlatform: "WEB",
                authoredPlatform: "Pantheon",
                viewID: "",
                type: "Article",
                assetId: "Clipsal",
                contentSource: "SMH",
                primaryTag: "",
                tags: "",
                components: "",
                promotedType: "sponsored",
                sponsored: "true",
                name: "Clipsal",
                template: "paidcontent",
                didMount: "false",
                customReferrer: document.referrer,
                lifecycleType: "single"
              },
              network: {
                deviceID: sysEnv,
                marketingID: ""
              },
              client: {
                deviceType: sysEnv
              },
              section: {
                primaryCategory: "brandDiscover",
                subCategory: ""
              },
              session: {
                adBlocked: "",
                gCookie: "",
                privateBrowsingMode: ""
              },
              subs: {
                memberID: "",
                memberType: "visitor",
                meterCount: "",
                meterPeriodStart: "",
                meterPeriodEnd: ""
              },
              brand: {
                name: "smh",
                Engagement: ""
              }
            });

            // TITAN BASE CONFIG
            var titanEnabled = true;
            var digitalData = {
              "page": {
                  "pageInfo": {
                      "sysEnv": sysEnv,
                      "pageViewId": pageViewId
                  }
              },
              "commercial": {
                  "sponsor": "Clipsal",
                  "type": "sponsored by",
                  "tags": ""
              },
              "titan": {
                  "spa": false,
                  "adSite": "masthead",
                  "adZone": "SinglePageArchitechture",
                  "adKeyValues": {
                      "cat": "Clipsal",
                      "cat1": "2022",
                      "cat2": "TITLE",
                      "ctype": "immersive",
                      "pageviewid": pageViewId
                  },
                  "adSlots": ""
              }
            };
            var titan = titan || {};
            titan.cmd = titan.cmd || []; // TITAN BASE CONFIG END
          `}
        </Script>
        <Script id="gtm">
          {`
          !function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-WV7FLW7",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");
          `}
        </Script>
      </>
      }

      <Component {...pageProps} />

      {!isDev && hasNineScripts &&
      <>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WV7FLW7" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-101266782-31" />
        <Script id="gta">
          {`
            window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments)} gtag("js", new Date()); gtag("config", "UA-101266782-31");
          `}
        </Script>
      </>
      }
    </React.Fragment>
  );
}
