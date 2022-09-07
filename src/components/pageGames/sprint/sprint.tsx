import React, { useState } from "react";
import { items } from "../mainPageGames";
import { getAllWords, getUserAggregatedWords, getUserWordById, updateUserWord } from "../../../api/api";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Timer from './timer';
import { sprintResultRight, GameResult, sprintResultWrong } from '../constants';
import { toGamesFrom } from "components/main/Body/assets";
import { complexityToGame, pageToGame } from "components/TutorialPage";

const Sprint = () => {
  async function setValueRight(id: any) {
    const wordValue = await getUserWordById(localStorage.getItem('user'), id, localStorage.getItem('token')).then((res) => res.data).catch((e) => e.message)
    if (wordValue.optional.sprintRight) {
      wordValue.optional.sprintRight += 1
    } else {
      wordValue.optional.sprintRight = 1
    }
    await updateUserWord(localStorage.getItem('user'), id, { difficulty: wordValue.difficulty, optional: wordValue.optional }, localStorage.getItem('token'))
  }

  async function setValueWrong(id: any) {
    const wordValue = await getUserWordById(localStorage.getItem('user'), id, localStorage.getItem('token')).then((res) => res.data).catch((e) => e.message)
    if (wordValue.optional.sprintWrong) {
      wordValue.optional.sprintWrong += 1
    } else {
      wordValue.optional.sprintWrong = 1
    }
    wordValue.optional.isKnown = false
    await updateUserWord(localStorage.getItem('user'), id, { difficulty: wordValue.difficulty, optional: wordValue.optional }, localStorage.getItem('token'))
  }
  let [score, setScore] = useState(0);
  const [word, setWords] = useState();
  const [id, setId] = useState();
  const [audioWord, setAudioWord] = useState();
  const [toRus, setTranslate] = useState();
  const [number, setNumber] = useState(0);
  const [numberTranslate, setnumberTranslate] = useState(0);
  const addScore = () => {
    score += 10;
  }
  const addItemToArray = (array: GameResult[]) => {
    array.push({ wordEngl: word, translate: toRus, audioRightWord: audioWord });
  }
  const randomItem = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const oneOrZero = Math.round(Math.random());
    if (target.id === 'btn-right') {
      if (number === numberTranslate) {
        addScore();
        setScore(score);
        addItemToArray(sprintResultRight);
        setValueRight(id)
      } else {
        addItemToArray(sprintResultWrong);
        setValueWrong(id)
      }
    } else if (target.id === 'btn-wrong') {
      if (number !== numberTranslate) {
        addScore();
        setScore(score);
        addItemToArray(sprintResultRight);
        setValueRight(id)
      } else {
        addItemToArray(sprintResultWrong);
        setValueWrong(id)
      }
    }
    const randomNumberWord = Math.floor(Math.random() * 19);
    const randomNumberTranslate = Math.floor(Math.random() * 19);
    oneOrZero ? setnumberTranslate(randomNumberWord) : setnumberTranslate(randomNumberTranslate);
    setNumber(randomNumberWord);
  }
  const getwordsCollection = async () => {
    const res = localStorage.getItem('user') ?
      await getUserAggregatedWords(
        localStorage.getItem("user"),
        localStorage.getItem("token"),
        toGamesFrom === 'book' ? complexityToGame - 1 : items.group,
        toGamesFrom === 'book' ? pageToGame - 1 : items.page)
        .then((res) => res[0].paginatedResults) :
      await getAllWords(items.group, items.page);
    setTranslate(res[numberTranslate].wordTranslate);
    setWords(res[number].word);
    setAudioWord(res[numberTranslate].audio);
    setId(res[number]._id)
  }
  getwordsCollection();
  return (
    <div style={{ margin: '0', width: '100vw', height: '100vh', backgroundColor: '#FF7396', paddingTop: '200px' }}>
      <Container maxWidth="sm" style={{ display: 'flex', gap: '40px', alignContent: 'center', flexDirection: 'column' }}>
        <Typography variant="h5" component="h2" style={{ margin: 'auto', color: '#781C68' }}>
          Текущий результат {score}
        </Typography>
        <Card style={{ display: 'flex', width: '300px', flexDirection: 'column', alignItems: 'center', margin: 'auto', backgroundColor: '#D75281' }}>
          <CardContent>
            <Typography variant="h5" component="h2" style={{ color: '#781C68' }}>
              {word}
            </Typography>
            <Typography variant="h6" component="h3" style={{ marginBottom: '20px', color: '#781C68' }}>
              {toRus}
            </Typography>
          </CardContent>
          <CardActions style={{ display: 'flex', gap: '40px' }}>
            <Button variant="contained" color="success" onClick={randomItem} id='btn-right'>right</Button>
            <Button variant="contained" color="warning" onClick={randomItem} id='btn-wrong'>wrong</Button>
          </CardActions>
        </Card>
        <Timer scoreCount={score} />
      </Container>
    </div>
  )
}
export default Sprint;
