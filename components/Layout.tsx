import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Feed from './Feed';

const Layout = () => {
  return (
    <>
      <Box sx={{ backgroundColor: 'white' }}>
        <Navbar />
        <Feed />
      </Box>
    </>
  );
};
export default Layout;
