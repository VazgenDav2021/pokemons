import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ImageListItem from '@mui/material/ImageListItem';
import logo from '../img/logo.png';
import { ImageList } from '@mui/material';
import { TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchingValue } from '../redux/pokemonSlice';
import { useStyles } from '../theme';

const pages = ['Home', 'Products', 'Blog', 'About US'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// Define an IconButtonn component which will open and close nav menu
const IconButtonn = ({ handleOpenNavMenu }) => {
  const onOpenNavMenu = (event) => {
    if (typeof handleOpenNavMenu === 'function') {
      handleOpenNavMenu(event);
    }
  };

  return (
    <IconButton
      edge="end"
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={onOpenNavMenu}
      color="inherit"
      sx={{
        color: '#0c4a87'
      }}>
      <MenuIcon />
    </IconButton>
  );
};

function Navbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { searchingValue } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearch = (e) => {
    dispatch(setSearchingValue(e.target.value));
  };

  const styles = useStyles();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fae41e' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <ImageList className={styles.logoBlock}>
            <Link href="#">
              <ImageListItem>
                <img src={logo} />
              </ImageListItem>
            </Link>
          </ImageList>
          <Box className={styles.navbarMobile}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}>
              {/* Map over the pages array and return a MenuItem component for each page */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className={styles.navbar}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu}>
                {page}
              </Button>
            ))}
          </Box>
          {!isSmallScreen ? (
            <Toolbar>
              <TextField
                label="Search"
                variant="outlined"
                onChange={handleSearch}
                value={searchingValue}
              />
            </Toolbar>
          ) : null}
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Remy Sharp" sx={{ backgroundColor: '#e3e5d8' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {/*// Map over the settings array and return a MenuItem component for each setting*/}
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {isSmallScreen ? <IconButtonn handleOpenNavMenu={handleOpenNavMenu} /> : null}
        </Toolbar>
        {isSmallScreen ? (
          <Toolbar sx={styles.toolbar}>
            <TextField
              onChange={handleSearch}
              value={searchingValue}
              label="Search"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </Toolbar>
        ) : null}
      </Container>
    </AppBar>
  );
}

export default Navbar;
