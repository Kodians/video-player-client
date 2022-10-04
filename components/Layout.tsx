import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Feed from './Feed';

const Layout = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Feed />
      </Box>
    </>
  );
};
export default Layout;
