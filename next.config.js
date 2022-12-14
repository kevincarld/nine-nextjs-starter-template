/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    imageSizes: [360,768,1024],
    deviceSizes: [360,768,1024],
    unoptimized: true,
  },
  // assetPrefix: '.', //uncomment when exporting bcoz this stops browser hot reload (this is needed when exporting to correct paths)
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
      title: 'title in next.config.js', // Brand - Title - masthead
      description: 'description in next.config.js',
      siteName: 'siteName Title in next.config.js', // The Sydney Morning Herald, GOODFOOD
      icon: 'smh', // smh, goodfood
      themeColour: '#0a1633', // hex
      ogImage: 'https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2022/12/lecreuset-social-media-bg-1.jpg',
    },
    nineScripts: true,
    // TODO: add npm link here for optimizer
    optimizer_imageFolderPath: "public/images",
    optimizer_destinationBase: "public/optimized",
    optimizer_exportFolderPath: "out",
    optimizer_quality: 75,
    optimizer_storePicturesInWEBP: true,
  },
}

module.exports = nextConfig