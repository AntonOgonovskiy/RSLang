export async function getWords() {
  const response = await fetch('https://react-learnwords-rslangg.herokuapp.com/words')
  const data = await (response.json())
  console.log(data)
}
