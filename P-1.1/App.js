/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

  
import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const pe1=part1+exercises1
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const pe2=part2+exercises2
  const part3 = 'State of a component'
  const exercises3 = 14
  const pe3=part3+exercises3
  const exercisesT=exercises1 + exercises2 + exercises3
  return (
    <div>
      <h1>{course}</h1>
      <p>
        {pe1} 
      </p>
      <p>
        {pe2} {exercises2}
      </p>
      <p>
        {pe3} 
      </p>
      <p>Number of exercises {exercisesT}</p>

    </div>
  )
}

export default App