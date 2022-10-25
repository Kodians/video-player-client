import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack, Link } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NextLink from 'next/link';

import { useRouter } from 'next/router';
import { useFetchStream } from '../../hooks/useFetchStream';

function PlayVideo() {
  const router = useRouter();
  const videoId = router.query.videoId;
  const { data, isLoading, isError, error } = useFetchStream(
    videoId as string,
    {
      staleTime: Infinity,
    }
  );

  const [videoUrl, setVideoUrl] = useState<string>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:3000/videos/${videoId}?cacheId=${videoId}`
      );
      const newResponse = new Response(response.body);
      const blob = await newResponse.blob();
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
    })();
  }, [videoId]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    console.log('erreur', error.message);
    return <h2>{error.message}</h2>;
  }

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            {videoUrl && (
              <ReactPlayer url={videoUrl} className="react-player" controls />
            )}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default PlayVideo;
