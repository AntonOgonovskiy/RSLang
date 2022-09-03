import { CircularProgress, Grid, Pagination, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getAllWords, getUserAggregatedWords, getUserHardWords } from '../api/api';
import { WordCard } from '../types/types';
import { LevelsButton } from './LevelsButton';
import WordCards from './WordCard/WordCard';
import BungalowIcon from '@mui/icons-material/Bungalow';
import { Link } from 'react-router-dom';
import GamesButtons from './GamesButtons';


export const TutorialPage = () => {
  const statePage: number = localStorage.getItem('page') ? Number(localStorage.getItem('page')) : 1
  const stateComplexity: number = localStorage.getItem('complexity') ? Number(localStorage.getItem('complexity')) : 1
  const [words, setWords] = useState([]);
  const [page, setPage] = useState(statePage);
  const [complexity, setComplexity] = useState(stateComplexity);
  const [isCardsLoading, setCardsLoading] = useState(false)
  let userId = (localStorage.getItem('user'));
  let token = (localStorage.getItem('token'));

  useEffect(() => {
    savePageState();
    setCardsLoading(true)
    if (localStorage.getItem('user') && complexity === 7) {
      getUserHardWords(userId, token).then(resp => {
        setWords(resp[0].paginatedResults)
        setCardsLoading(false)
      })
    }
    localStorage.getItem('user') ?
      getUserAggregatedWords(userId, token, complexity - 1, page - 1).then(resp => {
        setWords(resp[0].paginatedResults)
        setCardsLoading(false)
      }) :
      getAllWords(complexity - 1, page - 1).then(res => {
        setWords(res)
        setCardsLoading(false)
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, complexity])


  function setFilteredWords(value: []) {
    if (complexity === 7) {
      setWords(value)
    }
  }

  const savePageState = () => {
    localStorage.setItem('page', String(page));
    localStorage.setItem('complexity', String(complexity));
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const setBodyColor = () => {
    document.body.style.background = 'white'
  };

  function changeComplexity(value: number) {
    setComplexity(value)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '97vh' }}>
      {isCardsLoading
        ? <div > <CircularProgress size={150} color="primary" /></div>
        : <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {words.map((word: WordCard) =>
            < Grid item xs={2} sm={4} md={4} key={word._id} display="flex" justifyContent="center" alignItems="center" >
              <WordCards setFilter={setFilteredWords} wordList={words} _id={word._id} image={word.image} audio={word.audio} audioMeaning={word.audioMeaning} audioExample={word.audioExample} textMeaning={word.textMeaning} textExample={word.textExample} transcription={word.transcription} textExampleTranslate={word.textExampleTranslate} textMeaningTranslate={word.textMeaningTranslate} wordTranslate={word.wordTranslate} word={word.word} complexity={complexity} userWord={word.userWord} />
            </Grid>)}
        </Grid>
      }
      <Paper style={{ display: 'flex', alignItems: 'center', margin: 10, padding: 8, justifyContent: 'space-between', width: '95vw' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '13%' }}>
          <Link to="/" onClick={setBodyColor}>
            <BungalowIcon color="primary" fontSize="large" style={{ cursor: 'pointer', width: 56, height: 56 }} />
          </Link>
          <GamesButtons />
        </div>
        {complexity === 7 ?
          '' :
          <Pagination color="primary" style={{ margin: 20 }} count={30} page={page} onChange={handleChange} />
        }
        <LevelsButton choseComplexity={changeComplexity} />
      </Paper >
    </div >
  )
}
