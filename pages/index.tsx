import type { NextPage } from 'next';
import { Stack, Box, Link } from '@mui/material';
import VideoCard from '../components/VideoCard';
import NextLink from 'next/link';
import { Store } from '../utils/store';
import { useContext, useEffect, useRef } from 'react';
import { useInfiniteFetch } from '../hooks/useInfiniteFetch';
import VideoSkeleton from '../components/Skeleton';

const Home: NextPage = () => {
  let {
    state: { videos, categoryId },
    dispatch,
  }: any = useContext(Store);

  let url = useRef('/videos/thumbnails');

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteFetch(url.current, {
    getNextPageParam: (_lastPage: any, pages: any) => {
      if (pages.length < 5) {
        return pages.length + 1;
      }
      return undefined;
    },
    staleTime: Infinity,
  });

  useEffect(() => {
    if (categoryId) {
      videos.length = 0;
      url.current = `/categories/${categoryId}/videos/thumbnails`;
    }
    data?.pages.forEach((page) => {
      page?.data.forEach((item: any) => {
        videos.push(item);
      });
    });
    dispatch({ type: 'VIDEOS_CHANGED', payload: videos });
  }, [videos, categoryId, data?.pages, dispatch]);

  if (isLoading) {
    return (
      <>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="start"
          alignItems="start"
          gap={2}
        >
          <VideoSkeleton skeletons={4} />
        </Stack>
      </>
    );
  }

  if (isError) {
    return <h2>{error instanceof Error && error.message}</h2>;
  }

  return (
    <>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="start"
        alignItems="start"
        gap={2}
      >
        {videos.map((item: any) => {
          return (
            <Box key={item.metadata.videoId}>
              <NextLink href={`/videos/${item.metadata.videoId}`} passHref>
                <Link underline="none">
                  <VideoCard video={item} />
                </Link>
              </NextLink>
            </Box>
          );
        })}
        {isFetching && isFetchingNextPage && <VideoSkeleton skeletons={4} />}
      </Stack>
      <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
        Load More
      </button>
      <div>{isFetching && isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  );
};

export default Home;
