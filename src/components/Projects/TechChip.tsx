import React from 'react';
import {Chip} from "@mui/material"

interface TechChipProps {
  techName: string,
}

export const TechChip: React.FC<TechChipProps> = ({techName}) => {
  return(
    <Chip label={techName} size='small'/>
  )
}