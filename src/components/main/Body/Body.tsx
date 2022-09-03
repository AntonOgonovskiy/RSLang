import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { FC } from "react";
import { links, accordions } from "./assets";
import { Link } from "react-router-dom";
import styles from "./Body.module.css";
import { CustomPaper } from "../../CustomPaper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Body: FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <main style={{ flexGrow: "1", paddingTop: "30px" }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {links.map((link, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Link to={link.link} className={styles.link}>
                <CustomPaper elevation={6}>
                  {link.icon} {link.title}
                </CustomPaper>
              </Link>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: "25px" }}>
          {accordions.map((accordion, index) => (
            <Accordion
              expanded={expanded === accordion.name}
              onChange={handleChange(accordion.name)}
              key={index}
              sx={{
                boxShadow: "0px 10px 10px 4px rgba(34, 60, 80, 0.2);",
                "& .Mui-expanded": {
                  background: "#ef9a9a",
                  borderTopLeftRadius: "6px",
                  borderTopRightRadius: "6px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={accordion.ariaControls}
                id={accordion.id}
              >
                {accordion.accordionSummary}
              </AccordionSummary>
              <AccordionDetails>{accordion.accordionDetails}</AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </main>
  );
};

export default Body;
