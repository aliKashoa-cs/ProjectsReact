import { useState } from 'react'


const Header = ({text}) => (
    <h1>{text}</h1>
);


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const randomNumber = Math.floor(Math.random() * (anecdotes.length));
  const [selected, setSelected] = useState(randomNumber)
  const changeAnecdotes = () => {
    const randomNumber = Math.floor(Math.random() * (anecdotes.length));
    setSelected(randomNumber)
  }
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0,4:0, 5: 0, 6: 0, 7: 0})
  const UpVoteCurrent = ()=>{
    const newVotes = {...votes}
    newVotes[selected] = newVotes[selected] + 1
    setVotes(newVotes)
  }
  const argmax = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);

  console.log(votes)
  return (
      <div>
        <Header text="Anecdote of the day"></Header>
        <div>  {anecdotes[selected]}</div>

        <br/>
        <button onClick={UpVoteCurrent}>vote</button>
        <button onClick={changeAnecdotes}>next anecdote</button>
        <Header text="Anecdote with most votes"></Header>
        {anecdotes[argmax]}
      </div>
  )
}

export default App