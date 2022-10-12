import type { NextPage } from 'next';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';

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
      <VideoCard video={{ url: "https://source.unsplash.com/random", title:"funny video", description:"this is a simple description"}}/>
      <VideoCard video={{ url: "https://source.unsplash.com/random", title:"fun video", description:"c'est une description"}}/>
      <VideoCard video={{ url: "https://source.unsplash.com/random", title:"greeting video", description:"vidéo trop drole"}}/>
      <VideoCard video={{ url: "https://source.unsplash.com/random", title:"great video", description:"il mange débout"}}/>
    </>
  );
};

export default Home;
