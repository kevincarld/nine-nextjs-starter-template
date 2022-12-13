import { Box } from '@chakra-ui/react';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


// Usage example: <StaticLazyImage alt="test alt" src='/images/hero.jpg' dimensions={[360,768,1024]} sizes="(max-width:768px) 100vw, 50vw" />
// default img tag Usage example: <StaticLazyImage alt="test alt" src='/images/hero.jpg' normal />
function StaticLazyImage({
  src, // image must be inside public folder and filename should start with '/'
  blur=true,
  dimensions=false, // Array of dimensions. NOTE: dimensions must be included in next.config.js (images.imageSizes || images.deviceSizes)
  useWebp=true,
  normal=false,
  fit="initial", // objectfit
  ...rest
}) {

  return (
    <Box
      className="img-parent"
      sx={{
        height: 'full',
        width: 'full',
        display: 'flex',
        overflow: 'hidden',
        '.lazy-load-image-background': {
          flex: 1,
          display: 'flex',
          '>img': {
            w: 'full',
            objectFit: fit
          }
        },
        '>img': {
          w: 'full',
          objectFit: fit
        }
      }}
    >
      {
        normal
          ? <img
              {...rest}
              src={`.${src}`}
            />
          : process.env.NODE_ENV === 'development'
            ? <LazyLoadImage
                {...rest}
                src={`.${src}`}
                {...(blur && { effect: 'blur' })}
              />
            : <LazyLoadImage
                {...rest}
                src={`.${src}`}
                {...(dimensions && { srcSet: generateSrcset(src, useWebp, dimensions) })}
                {...(blur && { effect: 'blur' })}
              />

      }
    </Box>
  );
}

const splitFilePath = ( filePath ) => {
  const filenameWithExtension =
    filePath.split("\\").pop()?.split("/").pop() || "";
  const filePathWithoutFilename = filePath.split(filenameWithExtension).shift();
  const fileExtension = filePath.split(".").pop();
  const filenameWithoutExtension =
    filenameWithExtension.substring(
      0,
      filenameWithExtension.lastIndexOf(".")
    ) || filenameWithExtension;
  return {
    path: filePathWithoutFilename,
    filename: filenameWithoutExtension,
    extension: fileExtension || "",
  };
};

const generateSrcset = ( src, useWebp, dimensions ) => {
  const { path, filename, extension } = splitFilePath(src)

  let string = ''

  dimensions.forEach((dimension, i) => {
    string += `./optimized${path}${filename}-opt-${dimension}.${(useWebp && process.env.optimizer_storePicturesInWEBP) ? 'webp' : extension} ${dimension}w${i !== dimensions.length - 1 ? ',' : ''}`
  })

  return string
}

export default StaticLazyImage;