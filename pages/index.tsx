import type { NextPage } from "next";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import VideoCard from "../components/VideoCard";
import Link from "next/link";
import { useInfiniteFetch } from "../hooks/useInfiniteFetch";
// export const getStaticProps: GetStaticProps = async () => {
//   // Fetch access token.
//   // Fetch data of types.

//   return {
//     props: {
//       types: [], // Set this to the types returned by the API.
//     },
//   };
// };

// export interface HomePageProps {
//   types: VideosType[];
// }
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
      if (pages.length < 2) {
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
      {/* <Layout> */}
      <h1>Bonjour</h1>
      {/* </Layout> */}
      <Grid container justifyContent={"space-between"} alignItems="center">
        {data?.pages.map((page: any) => {
          return page.data.map((item: any) => {
            return (
              <Grid key={item.metadata.videoId} item>
                <Link href={`/videos/${item.metadata.videoId}`} passHref>
                  <a>
                    <VideoCard video={item} />
                  </a>
                </Link>
              </Grid>
            );
          })
        })}
      </Grid>
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load More
      </button>
      <div>{isFetching && isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default Home;
