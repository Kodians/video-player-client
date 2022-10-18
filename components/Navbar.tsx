import { Stack, Link, Grid } from '@mui/material';
import NextLink from 'next/link';

import { logo } from '../utils/constants';
import SearchBar from '../components/SearchBar';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
    }}
  >
    <NextLink href="/" passHref>
      <Link style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
    </NextLink>
    <strong style={{ color: 'white', marginLeft: '2%' }}>MiageTube</strong>
    <Grid
      container
      // columns={{ xs: 4, sm: 8, md: 12 }}
      alignItems="center"
      justifyContent="center"
    >
      <SearchBar />
    </Grid>
  </Stack>
);

export default Navbar;
