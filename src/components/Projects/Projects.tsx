import React from "react";
import { Box, Stack } from "@mui/material";
import ProjectCard from "./ProjectCard";
import blmImg from "../../assets/big-little-matcher-ss.png";
import shImg from "../../assets/ScrumHub.png"
import portfolioImg from "../../assets/portfolio-ss.png"

const Projects: React.FC = () => {
  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Stack direction="row" spacing={10}>
        <ProjectCard
          imageSrc={blmImg}
          projTitle="Big Little Matcher"
          projDesc="A web application that automates the matching process between bigs and littles in Greek letter organizations using a modified Gale-Shapely algorithm."
          githubLink="https://github.com/ericv105/Big-Lit-Matcher"
          liveLink="https://big-little-matcher.onrender.com/"
          techs={["JavaScript", "Express", "React", "Node"]}
        />
        <ProjectCard
          imageSrc={shImg}
          projTitle="ScrumHub"
          projDesc="A scrum based project management solution that serves as a one stop shop for maintaining an online project directory and delegating tasks to collaborators."
          githubLink="https://github.com/knights-who-say-c/scrum-hub"
          liveLink="https://scrumhub.onrender.com/"
          techs={["Python", "Flask", "PostgreSQL", "Docker"]}
        />
        <ProjectCard
          projTitle="My Movie List"
          projDesc="A web application that allows user to maintain an online list of movies they like, dislike, have seen, or wish to see. Built using the IMDb"
          githubLink="https://github.com/swasnaiktik/My-Movie-List"
          techs={["Python", "Flask", "PostgreSQL"]}
        />
        <ProjectCard
          imageSrc={portfolioImg}
          projTitle="Portfolio Website"
          projDesc="My personal portfolio website where I showcase my skills and projects"
          githubLink="https://github.com/ericv105/ericv105.github.io"
          liveLink="https://ericv105.github.io/"
          techs={["TypeScript", "React", "MaterialUI"]}
        />
      </Stack>
    </Box>
  );
};

export default Projects;
