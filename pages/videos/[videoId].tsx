import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack, Link, Skeleton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NextLink from 'next/link';
import VideoCard from '../../components/VideoCard';

import { useRouter } from 'next/router';
import { useFetchStream } from '../../hooks/useFetchStream';
import { useInfiniteFetch } from '../../hooks/useInfiniteFetch';
function PlayVideo() {
  const router = useRouter();
  const videoId = router.query.videoId;
  //   const { data, isLoading, isError, error } = useFetchStream(
  //     videoId as string,
  //     {
  //       staleTime: Infinity,
  //     }
  //   );

  const [videoUrl, setVideoUrl] = useState<string>();

  const { data, isLoading, isError, error } = useInfiniteFetch(
    '/videos/thumbnails',
    {
      getNextPageParam: (_lastPage: any, pages: any) => {
        if (pages.length < 4) {
          return pages.length + 1;
        }
        return undefined;
      },
      staleTime: Infinity,
    }
  );

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
    return (
      <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        variant="rectangular"
        className="react-player"
      />
    );
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
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {data?.pages.map((page: any) => {
            return page.data.map((item: any) => {
              return <VideoCard video={item} direction="column" />;
            });
          })}
        </Box>
      </Stack>
    </Box>
  );
}

export default PlayVideo;
