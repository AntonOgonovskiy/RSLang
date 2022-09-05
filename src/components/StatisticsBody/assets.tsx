import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import CircularProgressWithLabel from "../CircularProgressWithLabel";
import styles from "./Statistics.module.css";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

const obj = {
  id: "6311c9702429ee08820a4476",
  learnedWords: 20,
  optional: {
    savannah:
      '[{"rightAnswers":17,"wrongAnswers":3,"wordCounter":20,"bestSeries":6,"createdOn":1662110064057}]',
    audiocall:
      '[{"rightAnswers":19,"wrongAnswers":1,"wordCounter":20,"bestSeries":19,"createdOn":1662228392606}]',
  },
};

export const statisticsCardsWords = [
  {
    body: (
      <Paper elevation={4} className={styles.words__container}>
        <Typography
          variant="h2"
          component="h2"
          color="primary.dark"
          className={styles.newWords__amount}
        >
          0
        </Typography>
        <div style={{ marginLeft: "10px" }}>
          <Typography variant="h4" sx={{ lineHeight: 1 }}>
            кол-во
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ lineHeight: 1 }}
          >
            новых слов
          </Typography>
        </div>
      </Paper>
    ),
  },

  {
    body: (
      <Paper elevation={4} className={styles.words__container_column}>
        <Typography variant="h4" component="h4">
          Аккуратность
        </Typography>
        <CircularProgressWithLabel value={40} size={200} />
      </Paper>
    ),
  },

  {
    body: (
      <Paper elevation={4} className={styles.words__container}>
        <Typography
          variant="h2"
          component="h2"
          color="primary.dark"
          className={styles.newWords__amount}
        >
          0
        </Typography>
        <div style={{ marginLeft: "10px" }}>
          <Typography variant="h4" sx={{ lineHeight: 1 }}>
            слов
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ lineHeight: 1 }}
          >
            было изучено
          </Typography>
        </div>
      </Paper>
    ),
  },
];

export const statisticsCardsGames = [
  {
    body: (
      <Paper elevation={4} className={styles.games__container}>
        <Box className={styles.games__title}>
          <GraphicEqIcon fontSize="large" color="warning" />
          <Typography variant="h5" sx={{ fontSize: "1.75rem" }} component="h5">
            Аудиовызов
          </Typography>
        </Box>
        <List>
          <ListItem sx={{ gap: "30px" }} disablePadding>
            <ListItemIcon>
              <Typography variant="h5" color="black">
                0
              </Typography>
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h6">слов</Typography>}
            />
          </ListItem>
          <ListItem sx={{ gap: "30px" }} disablePadding>
            <ListItemIcon>
              <Typography variant="h5" color="black">
                0%
              </Typography>
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h6">правильных ответов</Typography>}
            />
          </ListItem>
          <ListItem sx={{ gap: "30px" }} disablePadding>
            <ListItemIcon>
              <Typography variant="h5" color="black">
                0
              </Typography>
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h6">серия ответов</Typography>}
            />
          </ListItem>
        </List>
      </Paper>
    ),
  },
  {
    body: (
      <Paper elevation={4} className={styles.games__container}>
        <Box className={styles.games__title}>
          <DirectionsRunIcon fontSize="large" color="success" />
          <Typography variant="h5" sx={{ fontSize: "1.75rem" }} component="h5">
            Спринт
          </Typography>
        </Box>
        <List>
          <ListItem sx={{ gap: "30px" }} disablePadding>
            <ListItemIcon>
              <Typography variant="h5" color="black">
                0
              </Typography>
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h6">слов</Typography>}
            />
          </ListItem>
          <ListItem sx={{ gap: "30px" }} disablePadding>
            <ListItemIcon>
              <Typography variant="h5" color="black">
                0%
              </Typography>
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h6">правильных ответов</Typography>}
            />
          </ListItem>
          <ListItem sx={{ gap: "30px" }} disablePadding>
            <ListItemIcon>
              <Typography variant="h5" color="black">
                0
              </Typography>
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h6">серия ответов</Typography>}
            />
          </ListItem>
        </List>
      </Paper>
    ),
  },
];
