import { Box, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { FC } from "react";
import styles from "./Footer.module.css";
import { creators } from "../../../assets";

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        height: {
          xs: "100px",
          sm: "50px",
        },
      }}
      className={styles.footer_bg}
    >
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="https://rs.school/js/"
          underline="none"
          color="inherit"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div className={styles.svgLogo}></div>
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            padding: {
              xs: "10px 0",
              sm: "0",
            },
          }}
        >
          <Typography>Created at 2022 by:</Typography>
          {creators.map((creator, index) => (
            <Link
              href={creator.link}
              underline="none"
              color="inherit"
              sx={{
                ml: "8px",
                transition: "all ease 0.4s",
                "&:hover": {
                  color: "warning.main",
                },
              }}
              key={index}
            >
              <Typography>{creator.nick}</Typography>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>

  );
};

export default Footer;
