import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { TechChip } from "./TechChip";

interface ProjCardProps {
  imageSrc?: string;
  projTitle?: string;
  projDesc?: string;
  githubLink: string;
  liveLink?: string;
  techs: string[]
}

const ProjectCard: React.FC<ProjCardProps> = ({
  imageSrc,
  projTitle,
  projDesc,
  githubLink,
  liveLink,
  techs,
}) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="141"
        image={imageSrc}
        alt="Project ss"
      />
      <CardContent>
        {
          techs.map((tech) => (
            <TechChip techName={tech}/>
          ))
        }
        <Typography variant="h5">{projTitle}</Typography>
        <Typography variant="body2">{projDesc}</Typography>
        <Stack direction="row">
          <IconButton target="_blank" href={githubLink}>
            <GitHubIcon fontSize="small" />
          </IconButton>

          {liveLink ? (
            <IconButton target="_blank" href={liveLink}>
              <LaunchIcon fontSize="small" />
            </IconButton>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
