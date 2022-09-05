import MenuBookIcon from "@mui/icons-material/MenuBook";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  CardContent,
  Avatar,
  Grid,
  Link,
  Chip,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { creators } from "../../../assets";

export let toGamesFrom = 'game'

export const links = [
  { icon: <MenuBookIcon onClick={() => toGamesFrom = 'book'} />, link: "/tutorial", title: "Учебник" },
  { icon: <BarChartIcon />, link: "/statistics", title: "Статистика" },
  { icon: <SportsEsportsIcon onClick={() => toGamesFrom = 'game'} />, link: "/games", title: "Игры" },
];

const lists = [
  {
    icon: <WhatshotIcon sx={{ fill: "#f44336", fontSize: "35px" }} />,
    title: "Наши курсы эффективно развивают навыки устной и письменной речи",
  },
  {
    icon: <AddTaskIcon color="success" sx={{ fontSize: "28px" }} />,
    title: "С нашим игровым подходом ежедневные занятия входят в привычку",
  },
  {
    icon: (
      <SentimentSatisfiedAltIcon sx={{ fill: "#e0c1a0", fontSize: "30px" }} />
    ),
    title:
      "Эффективное обучение не должно быть скучным! Интересные задания дают стимул заниматься каждый день.",
  },
];

export const accordions = [
  {
    name: "panel1",
    ariaControls: "panel1bh-content",
    id: "panel1bh-header",
    accordionSummary: (
      <Typography variant="h6" sx={{ width: "100%", textAlign: "center" }}>
        Учите английский онлайн уже сейчас!
      </Typography>
    ),
    accordionDetails: (
      <Container sx={{ padding: "15px 0" }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: "15px" }}>
          Hello, friend!
        </Typography>
        <Typography variant="h6">
          Теперь учить английский язык легко и увлекательно! Играйте в мини-игры
          и учите запоминайте слова. Словарь содержит все слова, которые раньше
          встречались в играх. Повторяйте их каждый день для закрепления
          результата.
        </Typography>

        <List sx={{ padding: "25px 50px 10px" }}>
          {lists.map((list, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton>
                <ListItemIcon>{list.icon}</ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h6">{list.title}</Typography>}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    ),
  },
  {
    name: "panel2",
    ariaControls: "panel2bh-content",
    id: "panel2bh-header",
    accordionSummary: (
      <Typography variant="h6" sx={{ width: "100%", textAlign: "center" }}>
        Наша команда
      </Typography>
    ),
    accordionDetails: (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        sx={{ padding: "20px 0" }}
      >
        {creators.map((creator, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Card sx={{ boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)" }}>
              <CardContent sx={{ display: "flex" }}>
                <Avatar alt={creator.nick} src={creator.img} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Link
                    href={creator.link}
                    underline="none"
                    color="inherit"
                    sx={{
                      mb: "7px",
                      transition: "all ease 0.4s",
                      "&:hover": {
                        color: "secondary.main",
                      },
                    }}
                  >
                    <Typography>{creator.nick}</Typography>
                  </Link>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      gap: "8px",
                      width: "100%",
                    }}
                  >
                    {creator.badges.map((badge, index) => (
                      <Chip
                        label={badge}
                        size="small"
                        variant="outlined"
                        sx={{
                          color: creator.colors[index],
                          borderColor: creator.colors[index],
                        }}
                        key={index}
                      />
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    ),
  },
];
