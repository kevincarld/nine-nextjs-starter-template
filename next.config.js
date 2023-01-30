/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    imageSizes: [360,768,1024],
    deviceSizes: [360,768,1024],
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'development' ? undefined : '.' ,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  env: {
    appMeta: {
      canonical: 'canonical in next.config.js', // https://brandedcontent.[masthead].com.au/xxx/xxx"
      brand: 'brand in next.config.js', // e.g Black Hawk
      title: 'title in next.config.js', // e.g Being a good pet parent starts at mealtime
      description: 'description in next.config.js',
      siteName: 'siteName Title in next.config.js', // The Sydney Morning Herald, Good Food
      icon: 'smh', // smh, goodfood, nine
      themeColour: '#0a1633', // hex
      ogImage: 'https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2022/12/lecreuset-social-media-bg-1.jpg',
      date: 'dd-mm-yy', // e.g 03-12-23
      year: 'yyyy', // e.g 2023
    },
    nineScripts: false,
  },
}

module.exports = nextConfig