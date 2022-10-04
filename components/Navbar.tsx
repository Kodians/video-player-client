import { Stack, Link } from '@mui/material';
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
      justifyContent: 'space-between',
    }}
  >
    <NextLink href="/" passHref>
      <Link style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
    </NextLink>
    <SearchBar />
  </Stack>
);

export default Navbar;
