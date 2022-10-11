import { Box, Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Feed from './Feed';

const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ backgroundColor: 'white' }}>
        <Navbar />
        <Feed />
        <Container>{children}</Container>
      </Box>
    </>
  );
};
export default Layout;
