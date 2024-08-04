// // import Course from './components/Course';

// // const App = () => {
// //   const courses = [
// //     {
// //       name: 'Half Stack application development',
// //       id: 1,
// //       parts: [
// //         {
// //           name: 'Fundamentals of React',
// //           exercises: 10,
// //           id: 1,
// //         },
// //         {
// //           name: 'Using props to pass data',
// //           exercises: 7,
// //           id: 2,
// //         },
// //         {
// //           name: 'State of a component',
// //           exercises: 14,
// //           id: 3,
// //         },
// //         {
// //           name: 'Redux',
// //           exercises: 11,
// //           id: 4,
// //         },
// //       ],
// //     },
// //     {
// //       name: 'Node.js',
// //       id: 2,
// //       parts: [
// //         {
// //           name: 'Routing',
// //           exercises: 3,
// //           id: 1,
// //         },
// //         {
// //           name: 'Middlewares',
// //           exercises: 7,
// //           id: 2,
// //         },
// //       ],
// //     },
// //   ];

// //   return (
// //     <>
// //       <h1>Web Development Curriculum</h1>
// //       {courses.map((course) => (
// //         <Course key={course.id} course={course} />
// //       ))}
// //     </>
// //   );
// // };

// // ===================================================

// import Note from './components/Note';
// import { useState } from 'react';

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes);
//   const [newNote, setNewNote] = useState('a new note.....');
//   const [showAll, setShowAll] = useState(true);

//   const addNote = (event) => {
//     event.preventDefault();
//     const noteObject = {
//       content: newNote,
//       important: Math.random() < 0.5,
//       id: notes.length + 1,
//     };

//     setNotes(notes.concat(noteObject));
//     setNewNote('');
//   };

//   const handleNoteChange = (event) => {
//     console.log(event.target.value);
//     setNewNote(event.target.value);
//   };

//   const notesToShow = showAll ? notes : notes.filter((note) => note.important);

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all'}
//         </button>
//       </div>
//       <ul>
//         {notesToShow?.map((note) => (
//           <Note key={note.id} note={note} />
//         ))}
//       </ul>

//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type='submit'>save</button>
//       </form>
//     </div>
//   );
// };

// export default App;

// ===========================================================

import Person from './components/Person';
import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Juan Perez' }]);
  const [newName, setNewName] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    const flag = persons.some((person) => person.name === newName);
    if (flag) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const PersonObject = {
      name: newName,
    };
    setPersons(persons.concat(PersonObject));
    setNewName('');
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons?.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
