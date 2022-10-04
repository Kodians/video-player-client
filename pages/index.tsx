import type { NextPage } from 'next';
import Layout from '../components/Layout';

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
  return <Layout></Layout>;
};

export default Home;
