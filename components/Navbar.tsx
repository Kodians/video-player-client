import { Stack, Link, Grid, Button, Menu, MenuItem } from '@mui/material';
import NextLink from 'next/link';
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../utils/store';
import { logo } from '../utils/constants';
import SearchBar from '../components/SearchBar';
import { UrlObject } from 'url';
import jsCookie from 'js-cookie';

const Navbar = () => {
  const router = useRouter();
  const { state, dispatch }: any = useContext(Store);
  const { userInfo } = state;

  const [anchorEl, setAnchorEl] = useState(null);

  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const loginMenuCloseHandler = (e: any, redirect: string | UrlObject) => {
    setAnchorEl(null);
    if (redirect) {
      console.log(redirect);
      router.push(redirect);
    }
  };

  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    jsCookie.remove('userInfo');
    router.push('/');
  };

  return (
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
      {userInfo ? (
        <>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={loginClickHandler}
            style={{ color: 'white', fontWeight: 'bold' }}
          >
            {userInfo.firstName}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={(e) => loginMenuCloseHandler(e)}
          >
            <MenuItem onClick={(e) => loginMenuCloseHandler(e, '/profile')}>
              Profile
            </MenuItem>
            <MenuItem onClick={logoutClickHandler}>Déconnexion</MenuItem>
          </Menu>
        </>
      ) : (
        <NextLink href="/account/signin" passHref>
          <Link style={{ color: 'white', fontWeight: 'bold' }}>Connexion</Link>
        </NextLink>
      )}
    </Stack>
  );
};

export default Navbar;
