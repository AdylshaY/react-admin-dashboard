import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandeMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How To Use This Dashboard
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reprehenderit cumque rerum perferendis sit voluptatem obcaecati?
            Iusto culpa deserunt architecto sint praesentium dolores similique?
            Doloribus dolores tempora est saepe quibusdam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reprehenderit cumque rerum perferendis sit voluptatem obcaecati?
            Iusto culpa deserunt architecto sint praesentium dolores similique?
            Doloribus dolores tempora est saepe quibusdam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How To Add User
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reprehenderit cumque rerum perferendis sit voluptatem obcaecati?
            Iusto culpa deserunt architecto sint praesentium dolores similique?
            Doloribus dolores tempora est saepe quibusdam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reprehenderit cumque rerum perferendis sit voluptatem obcaecati?
            Iusto culpa deserunt architecto sint praesentium dolores similique?
            Doloribus dolores tempora est saepe quibusdam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reprehenderit cumque rerum perferendis sit voluptatem obcaecati?
            Iusto culpa deserunt architecto sint praesentium dolores similique?
            Doloribus dolores tempora est saepe quibusdam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
