import React from 'react';
//chakra
import { Box } from '@chakra-ui/react';
//
import { useInView } from "framer-motion"

export default function BrightCoveVideo({script, dataPlayer, dataVideoId, ...rest}) {

  const ref = React.useRef(null)
  const isInView = useInView(ref, { margin: '0px 0px -150px 0px'})

  React.useEffect(() => {
    const jsScript = document.createElement('script');
    jsScript.src = script;
    jsScript.async = true;
    document?.body?.appendChild(jsScript);

    return () => {
      document?.body?.removeChild(jsScript);
    }
  }, [])

  React.useEffect(() => {
    const video = document.querySelector('.video-js');
    const videoID = video?.getAttribute('id');
    const player = window?.videojs?.getPlayer(videoID);


    if(video && player){
      if (isInView) {
        if (player.currentTime() !== 0 || player.currentTime() === 0) {
          player.ready(async () => {
            const promise = player.play();
            if (promise !== undefined) {
              promise
                .then(() => {})
                .catch(() => {
                  // console.log("Video: PAWING");
                  player.play();
                });
            }
          });
        }
      } else if (!player.paused()) {
        player.pause();
      } else {
        player.pause();
      }
    }
  }, [isInView])

  if(!script || !dataPlayer || !dataVideoId) return null

  return (
    <Box
      class="vid-container"
      ref={ref}
      sx={{
        'video-js.video-js.vjs-fluid:not(.vjs-audio-only-mode)': {
          paddingTop: '56.25%',
        },
      }}
      {...rest}
    >
      <video-js
        data-account="6165065566001"
        data-player={dataPlayer}
        data-embed="default"
        data-video-id={dataVideoId}
        data-playlist-id=""
        data-application-id=""
        class="vjs-fluid"
        loop
        muted
      />
    </Box>
  )
}