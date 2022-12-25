import React from "react";
import { tokens } from "../theme";
import { useTheme, Typography } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandeMoreIcon from "@mui/icons-material/ExpandMore";

const FaqAccordion = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandeMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          {data.header}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{data.detail}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqAccordion;
