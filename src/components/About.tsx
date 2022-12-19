import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Element } from "react-scroll";
import pfp from "../assets/pfp.jpg";

const About: React.FC = () => {
  return (
    <Element name="about me">
      <Box
        display="flex"
        height="100vh"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Grid container direction="column" spacing={5}>
          <Grid item>
            <Typography variant="h2" textAlign="center">
              About Me
            </Typography>
          </Grid>

          <Grid item>
            <Grid container justifyContent="center">
              <Grid item>
                <Box
                  component="img"
                  src={pfp}
                  sx={{
                    height: 200,
                    width: 200,
                    borderRadius: 50,
                  }}
                />
              </Grid>
              <Grid item sx={{ maxWidth: 900, ml: 5, mr: 5 }}>
                <Typography variant="h6">
                  Hi! My name is Eric and I'm a recent graduate from the
                  University at Buffalo with a bachelor's degree in computer
                  science.
                </Typography>
                <br />
                <Typography variant="h6">
                  I enjoy building stuff that lives on the internet. I like to
                  create tools in the form of web applications that people find
                  useful and make their life easier. Check out my latest project
                  where I built a big little matcher specifically for Greek
                  orgs!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Element>
  );
};

export default About;
