export interface user {
  email: string;
  password: string;
}
export interface WordBody {
  difficulty: string;
  optional: {
    isKnown: boolean
  }
}
export interface statistics {
  learnedWords: number;
  optional: {};
}
export interface settings {
  wordsPerDay: number;
  optional: {};
}
export interface userLogin {
  email: string;
  password: string;
}
export interface WordCard {
  userWord: {
    difficulty: string;
    optional: {
      isKnown: boolean
    },
  },
  _id: string,
  word: string,
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
  textMeaning: string,
  textExample: string,
  transcription: string,
  textExampleTranslate: string,
  textMeaningTranslate: string,
  wordTranslate: string,
  complexity: number,
  wordList: Array<{
    _id: string;
  }>
  setFilter: { (value: any): void }
}
