import React from "react";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from '@mui/icons-material/Article';

const Intro: React.FC = () => {
  return (
    <Stack
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h2" align="center">Eric Velepucha</Typography>
      <Typography variant="h6" align="center">I'm a software engineer that likes to build full stack web applications</Typography>
      <Stack direction="row">
        <IconButton target="_blank" href="https://www.linkedin.com/in/eric-vele/">
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton target="_blank" href="https://github.com/ericv105">
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Button target="_blank" variant="contained" sx={{borderRadius: 5}} endIcon={<ArticleIcon/>} href="/Resume.pdf">
        <Typography variant="button" sx={{textTransform: 'none'}}>
          Resume
        </Typography>
      </Button>
    </Stack>
  );
};

export default Intro;
