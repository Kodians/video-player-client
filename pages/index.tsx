import type { NextPage } from "next";
import { Stack, Box, Link } from "@mui/material";
import VideoCard from "../components/VideoCard";
import NextLink from "next/link";
import { useInfiniteFetch } from "../hooks/useInfiniteFetch";

const Home: NextPage = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteFetch("/videos/thumbnails", {
    getNextPageParam: (_lastPage: any, pages: any) => {
      if (pages.length < 5) {
        return pages.length + 1;
      }
      return undefined;
    },
    staleTime: Infinity,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
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
        {data?.pages.map((page: any) => {
          return page.data.map((item: any) => {
            return (
              <Box key={item.metadata.videoId}>
                <NextLink href={`/videos/${item.metadata.videoId}`} passHref>
                  <Link underline="none">
                    <VideoCard video={item} />
                  </Link>
                </NextLink>
              </Box>
            );
          });
        })}
      </Stack>
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load More
      </button>
      <div>{isFetching && isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default Home;
