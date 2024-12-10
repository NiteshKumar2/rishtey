"use client";

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import SignupPopup from "./sticky/SignupPopup";
import LoginPopup from "./sticky/LoginPopup"; // Import the LoginPopup component

function LandingBanner() {
  const router = useRouter();
  const [openSignupPopup, setOpenSignupPopup] = useState(false);
  const [openLoginPopup, setOpenLoginPopup] = useState(false);

  // Handlers for Signup Popup
  const handleOpenSignupPopup = () => setOpenSignupPopup(true);
  const handleCloseSignupPopup = () => setOpenSignupPopup(false);

  // Handlers for Login Popup
  const handleOpenLoginPopup = () => setOpenLoginPopup(true);
  const handleCloseLoginPopup = () => setOpenLoginPopup(false);

  const handleOpenLoginFromSignup = () => {
    setOpenSignupPopup(false); // Close Signup Popup
    setOpenLoginPopup(true); // Open Login Popup
  };


  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${"/banner.jpg"})`,
        margin: 0,
        padding: 0,
        borderRadius: 0,
        height: {
          xs: 380,
          sm: 470,
          md: 590,
          lg: 590,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          color="inherit"
          gutterBottom
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "3.5rem",
            },
            margin: 0,
          }}
        >
          Rishtey
        </Typography>

        <Typography
          variant="h5"
          color="inherit"
          paragraph
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            margin: 2.5,
            color: "white",
          }}
        >
          This revision emphasizes both the action of bringing people together
          and the positive outcome of connection.
        </Typography>

        <Button
          color="info"
          variant="contained"
          onClick={handleOpenSignupPopup}
        >
          Let's connect
        </Button>
      </Box>

      {/* Signup Popup */}
      <SignupPopup
        open={openSignupPopup}
        onClose={handleCloseSignupPopup}
        handleOpenLoginFromSignup={handleOpenLoginFromSignup}
      />

      {/* Login Popup */}
      <LoginPopup
        open={openLoginPopup}
        onClose={handleCloseLoginPopup}
      />
    </Paper>
  );
}

export default LandingBanner;
