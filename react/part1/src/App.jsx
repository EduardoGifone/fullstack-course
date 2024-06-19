// =================================================================

// const Hello = (props) => {
//   console.log(props);
//   return(
//     <>
//       <p>Hello World! {props.name} you're {props.age} years old</p>
//     </>
//   )
// }


// function App() {
//   const name = "Licelith";
//   const age = "48";

//   const friends = [
//     {name: "Brayam", age:23},
//     {name: "Alexis", age:23}
//   ];

//   const friends2 = ["Brayam", "Alexis"];
//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name="Eduardo" age={10+13}/>
//       <Hello name={name} age={age}/>

//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>

//       <p>{friends2}</p>
//     </>
//   )
// }

// export default App

// =================================================================

// const Header = ({course}) => {
//   return(
//     <>
//     <h1>{course}</h1>
//     </>
//   );
// };

// const Part = ({part, exercise}) => {
//   return(
//     <>
//     <p>
//       {part} {exercise}
//     </p>
//     </>
//   );
// };

// const Content = ({parts}) => {
//   return(
//     <>
//     <Part part={parts[0].name} exercise={parts[0].exercise}/>
//     <Part part={parts[1].name} exercise={parts[1].exercise}/>
//     <Part part={parts[2].name} exercise={parts[2].exercise}/>
//     </>
//   );
// };

// const Total = ({parts}) => {
//   return (
//     <>
//     <p>
//       Total {parts.reduce((acc, current) => acc + current.exercise, 0)}
//     </p>
//     </>
//   );
// };

// const App = () => {
//   const course = {
//     name : 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercise : 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercise : 7 
//       },
//       {
//         name: 'State of a component',
//         exercise : 14
//       }
//     ]
//   };

//   return (
//     <>
//     <Header course={course.name}/>
//     <Content parts={course.parts}/>
//     <Total parts={course.parts}/>
//     </>
//   )
// };

// export default App;

// =================================================================

// const Hello = ({name,age}) => {

//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// export default App;

// =================================================================

// import { useState } from "react";

// const Display = ({counter}) => {
//   return(
//     <>
//     <div>{counter}</div>
//     </>
//   );
// };

// const Button = ({onClick, text}) => {
//   return(
//     <>
//     <button onClick={onClick}>{text}</button>
//     </>
//   );
// };

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseByOne = () => setCounter(counter+1);
//   const decreaseByOne = () => setCounter(counter-1);
//   const resetToZero = () => setCounter(0);


//   return (
//     <>
//     <Display counter={counter}/>
//     <Button onClick={increaseByOne} text="plus"/>
//     <Button onClick={decreaseByOne} text="minus"/>
//     <Button onClick={resetToZero} text="reset"/>
//     </>
//   )
// }

// export default App;

// =================================================================

// import { useState } from "react";

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }


// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}

//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// export default App;

// =================================================================

// import { useState } from "react";

// const Title = ({title}) => {
//   return(
//     <>
//     <h2>{title}</h2>
//     </>
//   );
// };

// const Button = ({text, handleClick}) => {
//   return(
//     <>
//     <button onClick={handleClick}>{text}</button>
//     </>
//   );
// };

// const StatisticLine = ({text, value}) => {
//   return(
//     <>
//     <tr>
//       <td>{text}</td>
//      <td>{value}</td>
//     </tr>
//     </>
//   );
// };

// const Statistics = ({good, neutral, bad}) => {

//   if (!good && !neutral && !bad)
//     return(
//       <>
//       <Title title='statistics'/>
//       <p>No feedback given</p>
//       </>
//     );

//   const total = good + neutral + bad;
//   const average = total === 0 ? 0 : (good*1 + neutral*0 + bad*-1)/total;
//   const positive = total === 0 ? 0 : good / total * 100;

//   return(
//     <>
//     <Title title='statistics'/>
//     <table>
//       <tbody>
//         <StatisticLine text='good' value={good}/>
//         <StatisticLine text='neutral' value={neutral}/>
//         <StatisticLine text='bad' value={bad}/>
//         <StatisticLine text='all' value={total}/>
//         <StatisticLine text='average' value={average}/>
//         <StatisticLine text='positive' value={positive}/>
//       </tbody>
//     </table>
//     </>
//   );
// };

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const handleClick = (value, setValue) => {
//     setValue(value+1);
//   };


//   return(
//     <>
//     <Title title='give feedback'/>
//     <Button handleClick={() => handleClick(good, setGood)} text='good'/>
//     <Button handleClick={() => handleClick(neutral, setNeutral)} text='neutral'/>
//     <Button handleClick={() => handleClick(bad, setBad)} text='bad'/>
//     <Statistics good={good} neutral={neutral} bad={bad}/>
//     </>
//   );

// };

// export default App;

// =================================================================

import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const generateRandomAnecdote = () => {
    setSelected(Math.ceil(Math.random() * (anecdotes.length - 1)));
  };

  const voteAnecdote = () => { 
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy)
  };

  const maxVoted = () => votes.indexOf(Math.max(...votes));

  return (
    <>
    <h2>Anecdote of the day</h2>
    <p>{anecdotes[selected]}</p>
    <p>has {votes[selected]} votes</p>
    <button onClick={voteAnecdote}>vote</button>
    <button onClick={generateRandomAnecdote}>next anecdote</button>

    <h2>Anecdote with most votes</h2>
    <p>{anecdotes[maxVoted()]}</p>
    <p>has {votes[maxVoted()]} votes</p>
    </>
  );
};

export default App;