import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const accordion = [
  {
    id: 1,
    accordionSummary: "An Important question",
    accordionDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit vitae molestiae iste omnis sapiente tenetur et debitis non quod!",
  },
  {
    id: 2,
    accordionSummary: "An Important answer",
    accordionDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit vitae molestiae iste omnis sapiente tenetur",
  },
  {
    id: 3,
    accordionSummary: "Important question",
    accordionDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit vitae molestiae iste omnis sapiente tenetur et debitis non quod!",
  },
  {
    id: 4,
    accordionSummary: "A question",
    accordionDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit vitae molestiae iste omnis  molestiae iste omnis sapiente tenetur et debitis non quod!",
  },
  {
    id: 4,
    accordionSummary: "An Important question",
    accordionDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit vitae molestiae iste omnis sapiente tenetur et debitis non quod!  consectetur adipisicing elit. Quos velit vitae molestiae iste omnis sapiente tenetur et debitis non quod!",
  },
  {
    id: 5,
    accordionSummary: "An Important question",
    accordionDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit vitae molestiae iste omnis sapiente tenetur et debitis non quod! sit amet consectetur adipisicing elit. Quos velit vitae molestiae iste omnis sapiente tenetur et debitis non quod!",
  },
];

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {accordion.map(({ id, accordionSummary, accordionDetails }) => {
        return (
          <Accordion sx={{ m: "20px" }} key={id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                {accordionSummary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{accordionDetails}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default FAQ;
