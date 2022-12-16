import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Intro: React.FC = () => {
  return (
    <Stack
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h2">Eric Velepucha</Typography>
      <Typography variant="h4">Bottom text</Typography>
    </Stack>
  );
};

export default Intro;
