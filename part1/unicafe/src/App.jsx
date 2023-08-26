import { useState } from 'react'

const Display = (props) => {
  const header = props.header
return(
  <>
  <Header header = {header}/>
  </>
)
}

const Statistics = () => {

}

const StatisticLine = () => {

}

const Button = (props) => {
  return(
    <>
    <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const Header = (props) => <><h1>{props.header}</h1></>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([]);

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Display header = 'give feedback'/>
      <Button handleClick = {handleGoodClick} text = 'Good'/>
      <Button handleClick = {handleNeutralClick} text = 'Neutral'/>
      <Button handleClick = {handleBadClick} text = 'Bad'/>
      <Display header = 'statistics'/>
    </div>
  )
}

export default App
