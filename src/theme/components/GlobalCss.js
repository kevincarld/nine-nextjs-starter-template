import { Global } from '@emotion/react'

const GlobalCss = () => (
  <Global
    styles={`

      @font-face {
        font-family: 'Heading Font Name';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/headingfont.woff2') format('woff2'), url('./fonts/headingfont.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: 'Body Font Name';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/bodyfont.woff2') format('woff2'), url('./fonts/bodyfont.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      /* https://www.npmjs.com/package/scroller-motion */
      html,
      body {
        overscroll-behavior: none;
      }

      /* spacer */
      p:not(:last-child) {
        margin-bottom: 24px;

        @media(min-width: 1280px) {
          margin-bottom: 30px;
        }
      }

    `}
  />
)

export default GlobalCss