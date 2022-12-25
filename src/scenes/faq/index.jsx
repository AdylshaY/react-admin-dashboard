import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandeMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { mockFaqData } from "../../data/mockData";
import FaqAccordion from "../../components/FaqAccordion";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
      {mockFaqData.map((item) => (
        <FaqAccordion data={item} key={item.id} />
      ))}
    </Box>
  );
};

export default FAQ;
