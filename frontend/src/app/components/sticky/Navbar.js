"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CardMedia,
  Container,
  Toolbar,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StoreIcon from '@mui/icons-material/Store';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
});

export default function Navbar() {
  const { data: session } = useState(false); // Get the session data
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLoginPopup, setOpenLoginPopup] = useState(false);
  const [openSignupPopup, setOpenSignupPopup] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenLoginPopup = () => {
    setOpenLoginPopup(true);
    setAnchorEl(null);
  };

  const handleCloseLoginPopup = () => setOpenLoginPopup(false);

  const handleOpenSignupPopup = () => {
    setOpenSignupPopup(true);
    setOpenLoginPopup(false); // Close login popup
  };

  const handleCloseSignupPopup = () => setOpenSignupPopup(false);

  const handleOpenLoginFromSignup = () => {
    setOpenSignupPopup(false); // Close signup popup
    setOpenLoginPopup(true); // Open login popup
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="default">
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              flexWrap: "wrap",
              display: "flex",
              py: 1,
              
            }}
          >
            {/* Left: Logo */}
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                <Link href="/" >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: 90, sm: 110 },
                      cursor: "pointer",
                      height: "auto",
                      marginLeft: -3,
                      marginRight: 0.2,
                    }}
                    src="/logo.png"
                    alt="Logo"
                  />
                </Link>
              </Box>

              {/* Center: Location Search */}
              <Typography sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexGrow: 1,
        gap: 0.1,
        p: 0,
        flexWrap: "wrap",
        mr: { xs: -0.5, sm: 10, md: 10 },
      }}>
                        Search....
                        </Typography>

              {/* Right: Login and Signup Buttons */}
              <Box
                sx={{
                  display: { xs: "none", sm: "flex", md: "flex" },
                  alignItems: "center",
                }}
              >
                <Stack direction="row" spacing={2}>
                  {session ? (
                    <>
                      <Link href={"/createshop"}>
                        <Typography style={{ marginTop: 9,color:"#fd3031" }}>
                        <PersonAddIcon/><StoreIcon />
                        </Typography>
                      </Link>
                      <Button
                        variant="text"
                        color="rgb(254 149 144)"
                        onClick={() => signOut()}
                        sx={{ minWidth: "100px", color:"#fd3031" }}
                      >
                        Log out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="text"
                        color="rgb(254 149 144)"
                        onClick={handleOpenLoginPopup}
                        sx={{ minWidth: "100px",color:"#fd3031" }}
                      >
                        Log in
                      </Button>
                      <Button
                        variant="text"
                        color="rgb(254 149 144)"
                        onClick={handleOpenSignupPopup}
                        sx={{ minWidth: "100px",color:"#fd3031" }}
                      >
                        Sign up
                      </Button>
                    </>
                  )}
                </Stack>
              </Box>

              {/* Mobile: Menu for Login and Signup */}
              <Box
                sx={{
                  display: { xs: "flex", sm: "none", md: "none" },
                  marginRight:-3.8,
                  alignItems: "center",
                  
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {session
                    ? [
                      <MenuItem key="shop">
                        <Link href="/createshop">
                          <Typography style={{ marginTop: 9, textAlign: "center",color:"#fd3031" }}>
                          <PersonAddIcon/><StoreIcon />
                          </Typography>
                        </Link>
                      </MenuItem>,
                      <MenuItem key="logout"   sx={{color:"#fd3031" }} onClick={() => signOut()}>
                        Log out
                      </MenuItem>,
                    ]
                    : [
                      <MenuItem key="login"  sx={{color:"#fd3031" }} onClick={handleOpenLoginPopup}>
                        Log in
                      </MenuItem>,
                      <MenuItem key="signup"  sx={{color:"#fd3031" }} onClick={handleOpenSignupPopup}>
                        Sign up
                      </MenuItem>,
                    ]}
                </Menu>

              </Box>
            </Box>
          </Toolbar>
        </Container>

        {/* Login and Signup Popups */}
        <LoginPopup
          open={openLoginPopup}
          onClose={handleCloseLoginPopup}
          handleOpenSignupPopup={handleOpenSignupPopup}
        />
        <SignupPopup
          open={openSignupPopup}
          onClose={handleCloseSignupPopup}
          handleOpenLoginFromSignup={handleOpenLoginFromSignup}
        />
      </AppBar>
    </ThemeProvider>
  );
}
