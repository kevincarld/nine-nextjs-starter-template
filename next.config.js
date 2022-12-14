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