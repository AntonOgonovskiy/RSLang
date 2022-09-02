import { WordCard } from "../../types/types";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Box, Card, CardContent, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BarChartIcon from '@mui/icons-material/BarChart';
import { deleteUserWord, setUserWord } from "../../api/api";
import styles from "./WordCard.module.css"

const WordCards = (props: WordCard) => {
  const base = 'https://react-learnwords-rslangg.herokuapp.com/'
  const cardImg = `${base}${props.image}`
  const audio1 = new Audio(`${base}${props.audio}`)
  const audio2 = new Audio(`${base}${props.audioMeaning}`)
  const audio3 = new Audio(`${base}${props.audioExample}`)

  const sounds = [audio1, audio2, audio3];
  let i = -1;

  function playSnd() {
    i++;
    if (i === sounds.length) return;
    sounds[i].addEventListener('ended', playSnd);
    sounds[i].play();
  }

  async function addToHard(id: string) {
    const icon = document.getElementById(id)
    if (icon) {
      if (props.complexity === 7) {
        icon.style.color = 'black'
        await deleteUserWord(localStorage.getItem('user'), id, localStorage.getItem('token'))
      } else {
        icon.style.color = 'red'
        await setUserWord(localStorage.getItem('user'), id, { difficulty: 'hard' }, localStorage.getItem('token'))
      }
    }
  }

  return (
    < Card sx={{ width: 450 }
    } >
      <CardMedia
        component="img"
        image={cardImg}
        alt="cardImg"
      />
      <CardContent>
        <Box className={styles.card_example}>
          <Typography gutterBottom variant="h6" component="div">
            {props.word}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.wordTranslate}
          </Typography>
        </Box>
        <Box className={styles.card_example}>
          <Typography gutterBottom variant="h6" component="div">
            {props.transcription}
          </Typography>
          <IconButton aria-label="play/pause" onClick={playSnd} >
            <VolumeUpIcon sx={{ height: 25, width: 25 }} />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.primary" marginBottom={1} dangerouslySetInnerHTML={{ __html: props.textMeaning }} />
        <Typography variant="body2" color="text.secondary" marginBottom={2} dangerouslySetInnerHTML={{ __html: props.textMeaningTranslate }} />
        <Typography variant="body2" color="text.primary" marginBottom={1} dangerouslySetInnerHTML={{ __html: props.textExample }} />
        <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: props.textExampleTranslate }} />
      </CardContent>
      {
        localStorage.getItem('user') ?
          <div className={styles.card_buttons}>
            <Tooltip title={props.complexity === 7 ? "Remove from difficult" : "Add to difficult"}>
              <SchoolIcon id={props._id} className={props.userWord ? `${styles.cardBtn} ${styles.btn_color}` : styles.cardBtn} onClick={() => addToHard(props._id)} />
            </Tooltip>
            <LightbulbIcon className={styles.cardBtn} />
            <BarChartIcon className={styles.cardBtn} />
          </div> :
          ''
      }
    </Card >

  )
}

export default WordCards
