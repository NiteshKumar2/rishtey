"use client";

import React, { useState, useEffect } from "react";
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
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StoreIcon from "@mui/icons-material/Store";

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
  const { data: session } = useState(false); // Placeholder for session data
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLoginPopup, setOpenLoginPopup] = useState(false);
  const [openSignupPopup, setOpenSignupPopup] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleOpenLoginPopup = () => {
    setOpenLoginPopup(true);
    setAnchorEl(null);
  };

  const handleCloseLoginPopup = () => setOpenLoginPopup(false);
  const handleOpenSignupPopup = () => setOpenSignupPopup(true);
  const handleCloseSignupPopup = () => setOpenSignupPopup(false);
  const handleOpenLoginFromSignup = () => {
    setOpenSignupPopup(false);
    setOpenLoginPopup(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        color="default"
        elevation={showNavbar ? 4 : 0}
        sx={{
          transition: "transform 0.3s ease, border 0.3s ease",
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
          borderBottom: showNavbar ? "1px solid #ccc" : "none",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              flexWrap: "wrap",
              py: 1,
            }}
          >
            {/* Left: Logo */}
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <Link href="/">
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: 90, sm: 110 },
                    cursor: "pointer",
                    height: "auto",
                  }}
                  src="/logo.png"
                  alt="Logo"
                />
              </Link>
            </Box>

            {/* Center: Location Search */}
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexGrow: 1,
              }}
            >
              Search....
            </Typography>

            {/* Right: Login and Signup Buttons */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
              }}
            >
              <Stack direction="row" spacing={2}>
                {session ? (
                  <>
                    <Link href={"/createshop"}>
                      <Typography sx={{ color: "#fd3031", mt: 1 }}>
                        <PersonAddIcon />
                        <StoreIcon />
                      </Typography>
                    </Link>
                    <Button
                      variant="text"
                      sx={{ color: "#fd3031" }}
                      onClick={() => signOut()}
                    >
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="text"
                      sx={{ color: "#fd3031" }}
                      onClick={handleOpenLoginPopup}
                    >
                      Log in
                    </Button>
                    <Button
                      variant="text"
                      sx={{ color: "#fd3031" }}
                      onClick={handleOpenSignupPopup}
                    >
                      Sign up
                    </Button>
                  </>
                )}
              </Stack>
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
