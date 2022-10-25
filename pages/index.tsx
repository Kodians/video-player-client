import type { NextPage } from 'next';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';
import Grid from "@mui/material/Grid"
import VideoCard from '../components/VideoCard';
import Link from 'next/link';
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
  const { data, isLoading, isError, error } = useFetch("/videos/thumbnails", {
    staleTime: Infinity
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if(isError) {
    return <h2>{error.message}</h2>
  }


  return (
    <>
      
      {/* <Layout> */}
      <h1>Bonjour</h1>
      {/* </Layout> */}
      <Grid container justifyContent={'space-around'}  alignItems='center'>
        {data?.data?.map((image: any) => {
          const { fileBase64String ,metadata:{title, description,videoId}} = image;
        return (
          <Grid item>
            <Link href={`/videos/${videoId}`} passHref>
              <a>
              <VideoCard video={{ url: `data:image/jpeg;base64,${fileBase64String}`, title, description}}/>
            </a>
            </Link>
        </Grid>
        )
      })}
     </Grid>
    </>
  );
};

export default Home;
