import React from 'react'

export default function AppMeta() {
  const {
    canonical,
    title,
    description,
    siteName,
    ogImage
  } = process.env.appMeta

  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />

      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="2221664741450677" />
      <meta property="og:site_name" content={siteName} />

      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="description" content={description} />

      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta name="twitter:image" content={ogImage} />
    </>
  )
}
