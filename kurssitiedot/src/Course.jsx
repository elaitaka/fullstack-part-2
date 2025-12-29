/* Component Course which lists courses and their parts */
const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Header name={course.name} />
          {course.parts.map((part) => (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          ))}
          <Total total={course} />
        </div>
      ))}
    </>
  );
};

/* Function counted total exercises */
const Total = (props) => {
  let sum = props.total.parts.reduce(function (prev, current) {
    return prev + +current.exercises;
  }, 0);

  return <div>Total number of exercises: {sum}</div>;
};

/* Function Header which displays headers */
const Header = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

export default Course;
