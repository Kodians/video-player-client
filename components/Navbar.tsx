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
    <div style={{ marginLeft: '30%' }}>
      <SearchBar />
    </div>
  </Stack>
);

export default Navbar;
