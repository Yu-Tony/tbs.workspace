import React, { useEffect, useState, useContext } from "react"

import {
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    Avatar,
    Tooltip,
    MenuItem,
  } from "@mui/material";
  import { Container, Typography, Button, Grid, Box, Link } from "@mui/material";
  import AdbIcon from '@mui/icons-material/Adb';
  import MenuIcon from '@mui/icons-material/Menu';
  import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
  const pages = ['Sobre mí', 'Mis trabajos', 'Habilidades', 'Contacto'];


  const settings = [];


export default function Navbar()
{
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return(
      <AppBar position="static" sx={{ backgroundColor: "background.dark" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "flex" },
            flexDirection: "row",
            backgroundColor: "background.dark",
            justifyContent: "space-between"
          }}
        >
            {/* Logo pagina big screen*/}
            <Link  href="/"><VideogameAssetIcon color="primary" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></Link>
          


          {/*Resposive sandwich menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color="primary" />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo pagina small screen */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            name
          </Typography>
          <Link  href="/">
            <VideogameAssetIcon color="primary" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          </Link>
          

          {/*Pages */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" }
            }}
          >
            {pages.map((page) => (
     

              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "text.primary", display: "block" }}
               
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    );
}