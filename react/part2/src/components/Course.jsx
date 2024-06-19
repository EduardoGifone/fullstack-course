const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Course = ({ course }) => {
  const parts = course.parts;

  const total = parts.reduce((acc, current) => acc + current.exercises, 0);

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <h3>total of {total} exercises</h3>
    </>
  );
};

export default Course;
