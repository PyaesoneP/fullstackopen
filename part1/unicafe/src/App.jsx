import { useState } from 'react'

const Display = () => {
return(
  <>
  <Button />
  </>
)
}

const Statistics = () => {

}

const StatisticLine = () => {

}

const Button = () => {
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return(
    <>
    <button onClick={handleGoodClick}>Good</button>
    <button onClick={handleNeutralClick}>Neutral</button>
    <button onClick={handleBadClick}>Bad</button>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([]);

  return (
    <div>
      <Display />
    </div>
  )
}

export default App
