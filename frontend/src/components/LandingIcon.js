"use client";

import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { Icon } from "@iconify/react"; // Ensure you have this installed for icons

const PRODUCT_DESCRIPTION = [
  {
    title: "Future is Secured",
    description: "100% Pass Guarantee",
    icon: "mdi:verified",
  },
  {
    title: "24/7 Customer Support",
    description: "Mail us -",
    icon: "mdi:clock-time-four",
  },
  {
    title: "Verified Updates",
    description: "Lifetime Updates!",
    icon: "mdi:account-check",
  },
];

export default function LandingIcon() {
  return (
    <Container sx={{ marginY: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {PRODUCT_DESCRIPTION.map((item) => (
          <Box
            key={item.title}
            sx={{
              width: { xs: "100%", sm: "calc(33.333% - 16px)" },
              maxWidth: 280,
              textAlign: "center",
              padding: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 2,
                width: 60,
                height: 60,
                backgroundColor: "primary.light",
              }}
            >
              <Icon
                icon={item.icon}
                width={36}
                height={36}
                style={{ marginLeft: "100px", textAlign: "center" }}
              />
            </Box>
            <Typography
              sx={{ color: "text.primary", fontWeight: 600 }}
              variant="subtitle1"
              gutterBottom
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                whiteSpace: "pre-wrap",
              }}
            >
              {item?.description}{" "}
              {item?.description?.includes("Mail us -") && (
                <a
                  href="mailto:x@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  x@gmail.com
                </a>
              )}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
