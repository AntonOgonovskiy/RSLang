import { CircularProgress, Grid, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getAllWords } from '../api/api';
import { WordCard } from '../types/types';
import { LevelsButton } from './LevelsButton';
import WordCards from './WordCard';


export const TutorialPage = () => {
  const statePage: number = localStorage.getItem('page') ? Number(localStorage.getItem('page')) : 1
  const stateComplexity: number = localStorage.getItem('complexity') ? Number(localStorage.getItem('complexity')) : 1
  const [words, setWords] = useState([]);
  const [page, setPage] = useState(statePage);
  const [complexity, setComplexity] = useState(stateComplexity);
  const [isCardsLoading, setCardsLoading] = useState(false)

  useEffect(() => {
    setCardsLoading(true)
    getAllWords(complexity - 1, page - 1).then(res => {
      setWords(res)
      setCardsLoading(false)
    });
    window.addEventListener("beforeunload", () => {
      localStorage.setItem('page', String(page));
      localStorage.setItem('complexity', String(complexity));
    });
  }, [page, complexity])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  function changeComplexity(value: number) {
    setComplexity(value)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {isCardsLoading
        ? <div > <CircularProgress size={150} color="secondary" /></div>
        : <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {words.map((word: WordCard) =>
            <Grid item xs={2} sm={4} md={4} key={word.id} display="flex" justifyContent="center" alignItems="center">
              <WordCards id={word.id} image={word.image} audio={word.audio} audioMeaning={word.audioMeaning} audioExample={word.audioExample} textMeaning={word.textMeaning} textExample={word.textExample} transcription={word.transcription} textExampleTranslate={word.textExampleTranslate} textMeaningTranslate={word.textMeaningTranslate} wordTranslate={word.wordTranslate} word={word.word} />
            </Grid>)}
        </Grid>
      }
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Pagination color="secondary" style={{ margin: 20 }} count={30} page={page} onChange={handleChange} />
        <LevelsButton choseComplexity={changeComplexity} />
      </div>
    </div >
  )
}
