import { useState } from 'react'
import Nav from './Components/Navbar.jsx'
import Card from './Components/Card.jsx'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  return (
    <>
    < Nav 
    score = {score}
    bestScore = {bestScore}
    />
    <div className='Rules'>
      <p>Click on one of the images below, but don't click the same image twice!!</p>
    </div>
    <Card 
    score = {score}
    setScore = {setScore}
    bestScore = {bestScore}
    setBestScore = {setBestScore}
    />
    </>
  )
}

export default App
