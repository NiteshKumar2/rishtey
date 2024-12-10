import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  CardActionArea,
  Link,
  Stack,
} from "@mui/material";

export default function LandingCard() {
  return (
    <Container sx={{ marginY: 10 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Millions of Happy Stories
      </Typography>

      <Stack
        spacing={4}
        direction={{ xs: "column", sm: "row" }} // Stack items in column on small screens, row on larger screens
        justifyContent="center"
        alignItems="center" // Center items horizontally
      >
        <Link href="/shopnearme?gender=female" underline="none">
          <Card sx={{ width: { xs: 320, sm: 360, md: 360 }, margin: "0 auto" }}>
            {" "}
            {/* Set width directly */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="220"
                image="couple1.jpg"
                alt="Order Online"
                style={{ borderRadius: "5px" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Poonam & Anand
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We met on Rishtey, and it was truly amazing how our thoughts
                  and aspirations aligned perfectly. Despite having kids on both
                  sides, which initially made things seem challenging, this
                  platform gave us plenty of opportunities to connect. The large
                  database and thoughtful matchmaking features were instrumental
                  in helping us find each other. We would like to extend a
                  heartfelt thanks to the Rishtey team for making this possible.
                  We have given our authorization to promote our pictures
                  through the online platform to inspire other members. Kindly
                  share the link to the platform where you plan to publish our
                  story. Thank you once again!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link href="/shopnearme?gender=male" underline="none">
          <Card sx={{ width: { xs: 320, sm: 380, md: 380 }, margin: "0 auto" }}>
            {" "}
            {/* Set width directly */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="220"
                image="couple3.jpg"
                alt="Shop Review"
                style={{ borderRadius: "5px" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Rahul and Neha
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We met on Rishtey, and it was truly amazing how our thoughts
                  and aspirations aligned perfectly. Despite having kids on both
                  sides, which initially made things seem challenging, this
                  platform gave us plenty of opportunities to connect. The large
                  database and thoughtful matchmaking features were instrumental
                  in helping us find each other. We would like to extend a
                  heartfelt thanks to the Rishtey team for making this possible.
                  We have given our authorization to promote our pictures
                  through the online platform to inspire other members. Kindly
                  share the link to the platform where you plan to publish our
                  story. Thank you once again!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link href="/shopnearme?gender=child" underline="none">
          <Card sx={{ width: { xs: 320, sm: 380, md: 380 }, margin: "0 auto" }}>
            {" "}
            {/* Set width directly */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="220"
                image="couple2.jpg"
                alt="Night Shopping"
                style={{ borderRadius: "5px" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Ankit and Ankita
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We met on Rishtey, and it was truly amazing how our thoughts
                  and aspirations aligned perfectly. Despite having kids on both
                  sides, which initially made things seem challenging, this
                  platform gave us plenty of opportunities to connect. The large
                  database and thoughtful matchmaking features were instrumental
                  in helping us find each other. We would like to extend a
                  heartfelt thanks to the Rishtey team for making this possible.
                  We have given our authorization to promote our pictures
                  through the online platform to inspire other members. Kindly
                  share the link to the platform where you plan to publish our
                  story. Thank you once again!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Stack>
    </Container>
  );
}
