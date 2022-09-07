import { WordCard } from "../../types/types";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Box, Card, CardContent, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { deleteUserWord, getUserWordById, setUserWord, updateUserWord } from "../../api/api";
import styles from "./WordCard.module.css"
import StatisticIcon from "../StatisticIcon/StatisticIcon";
import { useEffect } from "react";

const WordCards = (props: WordCard) => {
  const base = 'https://react-learnwords-rslangg.herokuapp.com/'
  const cardImg = `${base}${props.image}`
  const audio1 = new Audio(`${base}${props.audio}`)
  const audio2 = new Audio(`${base}${props.audioMeaning}`)
  const audio3 = new Audio(`${base}${props.audioExample}`)
  useEffect(() => {
    checkPageKnownWords()
  })

  const sounds = [audio1, audio2, audio3];
  let i = -1;

  function playSnd() {
    i++;
    if (i === sounds.length) return;
    sounds[i].addEventListener('ended', playSnd);
    sounds[i].play();
  }

  async function addToHard(id: string) {
    if (props.complexity === 7) {
      const arr = props.wordList.filter((item) => {
        return item._id !== id
      })
      props.setFilter(arr)
    }
    const icon = document.getElementById(`${props._id}_difficulty`)
    if (icon) {
      if (props.complexity === 7) {
        icon.style.color = 'black'
        await deleteUserWord(localStorage.getItem('user'), id, localStorage.getItem('token'))
      } else {
        icon.style.color = 'red'
        await setUserWord(localStorage.getItem('user'), id, { difficulty: 'hard', optional: { isKnown: false } }, localStorage.getItem('token'))
      }
    }
  }

  async function addToKnown(id: string) {
    const iconDifficulty = document.getElementById(`${props._id}_difficulty`)
    const iconKnown = document.getElementById(`${props._id}_known`)
    if (iconDifficulty) iconDifficulty.style.color = 'black'
    const response = await getUserWordById(localStorage.getItem('user'), id, localStorage.getItem('token'))
      .then((item) => item.data?.optional)
      .catch((e) => e.message)
    if (iconKnown) {
      iconKnown.style.color = 'yellow'
      if (response) {
        console.log(response)
        await updateUserWord(localStorage.getItem('user'), id, { difficulty: "easy", optional: { isKnown: true } }, localStorage.getItem('token'))
      } else {
        setUserWord(localStorage.getItem('user'), id, { difficulty: "easy", optional: { isKnown: true } }, localStorage.getItem('token'))
      }
    }
    checkPageKnownWords()
  }

  function checkPageKnownWords() {
    const arr = props.wordList.filter((item) => {
      return document.getElementById(`${item._id}_known`)?.style.color === 'yellow' || item.userWord?.optional?.isKnown === true
    })
    props.checkKnowledge(arr.length === 20 ? true : false)
  }

  function checkKnown() {
    props.userWord?.optional?.isKnown === true || document.getElementById(`${props._id}_known`)?.style.color === 'yellow' ?
      console.log('unavailible') :
      addToHard(props._id)
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
              <SchoolIcon id={`${props._id}_difficulty`}
                className={props.userWord?.difficulty === "hard" ? `${styles.cardBtn} ${styles.btn_color_red}` : styles.cardBtn}
                onClick={() => checkKnown()} />
            </Tooltip>
            <Tooltip title="Add to learned">
              <LightbulbIcon id={`${props._id}_known`}
                className={props.userWord?.optional?.isKnown === true ? `${styles.cardBtn} ${styles.btn_color_yellow}` : styles.cardBtn}
                onClick={() => addToKnown(props._id)} />
            </Tooltip>
            <StatisticIcon word={props} />
          </div> :
          ''
      }
    </Card >

  )
}

export default WordCards
