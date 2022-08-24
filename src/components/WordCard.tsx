import { WordCard } from "../types/types";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
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
  return (
    <Card sx={{ width: 450 }}>
      <CardMedia
        component="img"
        image={cardImg}
        alt="cardImg"
      />
      <CardContent>
        <Box sx={{ height: 35, display: 'flex', alignItems: 'center', pb: 1, justifyContent: 'space-around' }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.word}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.wordTranslate}
          </Typography>
        </Box>
        <Box sx={{ height: 35, display: 'flex', alignItems: 'center', pb: 1, justifyContent: 'space-around' }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.transcription}
          </Typography>
          <IconButton aria-label="play/pause" onClick={playSnd} >
            <VolumeUpIcon sx={{ height: 30, width: 30 }} />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.primary" marginBottom={1} dangerouslySetInnerHTML={{ __html: props.textMeaning }} />
        <Typography variant="body2" color="text.secondary" marginBottom={2} dangerouslySetInnerHTML={{ __html: props.textMeaningTranslate }} />
        <Typography variant="body2" color="text.primary" marginBottom={1} dangerouslySetInnerHTML={{ __html: props.textExample }} />
        <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: props.textExampleTranslate }} />
      </CardContent>
    </Card >
  )
}

export default WordCards

