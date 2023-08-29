import { useState } from 'react'

const Render = (props) => {
  const header = props.header
  const text = props.text
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
const Text = (props) => <><p>{props.text}</p></>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState({good: 0, neutral: 0, bad: 0});

  const handleGoodClick = () => {
    setGood(good+1)
    setAll({...allClicks, good: allClicks.good + 1})
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    setAll({...allClicks, neutral: allClicks.neutral + 1})
  }
  const handleBadClick = () => {
    setBad(bad+1)
    setAll({...allClicks, bad: allClicks.bad + 1})
  }

  return (
    <div>
      <Render header = 'give feedback'/>
      <Button handleClick = {handleGoodClick} text = 'Good'/>
      <Button handleClick = {handleNeutralClick} text = 'Neutral'/>
      <Button handleClick = {handleBadClick} text = 'Bad'/>
      <Render header = 'statistics'/>
    </div>
  )
}

export default App
