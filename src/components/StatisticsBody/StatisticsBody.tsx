import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Container, Box } from "@mui/system";
import React from "react";
import { Chart } from "../Chart";
import { statisticsCardsWords, statisticsCardsGames } from "./assets";

const StatisticsBody = () => {
  const labels = ["January", "February", "March"];

  const datasets = [
    {
      label: "Dataset 1",
      data: [30, 22, 18],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [20, 24, 40],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ];

  return (
    <main style={{ flexGrow: "1", padding: "30px 0" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{ alignSelf: "flex-start", pb: "25px" }}
        >
          Сегодня
        </Typography>
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Grid2 container xs={12} sm={6} md={4}>
            {statisticsCardsWords.map((card, index) => (
              <Grid2 xs={12} sm={12} md={12} key={index}>
                {card.body}
              </Grid2>
            ))}
          </Grid2>
          <Grid2 container xs={12} sm={6} md={8}>
            {statisticsCardsGames.map((card, index) => (
              <Grid2 xs={12} sm={12} md={12} key={index}>
                {card.body}
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
        <Typography
          variant="h4"
          component="h4"
          sx={{ alignSelf: "flex-start", padding: "25px 0" }}
        >
          В общем
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "100%",
          }}
        >
          <Chart title="Кол-во слов" labels={labels} datasets={datasets} />
          <Chart
            title="Увеличение изучения слов"
            labels={labels}
            datasets={datasets}
          />
        </Box>
      </Container>
    </main>
  );
};

export default StatisticsBody;
