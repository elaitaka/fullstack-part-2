const PrintoutPersons = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.phoneNumber}
        </div>
      ))}
    </>
  );
};

export default PrintoutPersons;
