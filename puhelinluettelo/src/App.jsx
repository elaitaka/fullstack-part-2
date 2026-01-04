import { useState } from "react";

import "./App.css";
import PrintoutPersons from "./components/PrintoutPersons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Markus", phoneNumber: "040-123456" },
    { name: "Arto Hellas", phoneNumber: "040-12345" },
    { name: "Ada Lovelace", phoneNumber: "39-44-5323523" },
    { name: "Dan Abramov", phoneNumber: "12-43-234345" },
    { name: "Mary Poppendieck", phoneNumber: "39-23-6423122" },
  ]);

  const [newPerson, setNewPerson] = useState("a new person's name");

  /* 
  Add new person into person-array object
  */
  const addPerson = (event) => {
    event.preventDefault();

    console.log("Phone number is:", !event.target.phoneNumber.value);

    persons.some(
      (person) =>
        person.name === newPerson ||
        (person.phoneNumber === event.target.phoneNumber.value &&
          !!event.target.phoneNumber.value)
    )
      ? alert(
          `${newPerson} or ${event.target.phoneNumber.value} is already added to phonebook`
        )
      : setPersons(
          persons.concat({
            name: newPerson,
            phoneNumber: event.target.phoneNumber.value,
          })
        );
  };

  /* 
  Feed new person
  */
  const addNewPerson = (event) => {
    console.log("Add new Person:", event.target.value);
    setNewPerson(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name
          <input
            type="text"
            placeholder="Persons name"
            pattern="[A-Za-z ']+"
            //value={newPerson}
            onChange={addNewPerson}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phonenumber:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+358 40 123 4567"
            pattern="[+][0-9]{1,4}[0-9]{1,10}"
          />
        </div>
        <div>
          <button type="submit">Add new name</button>
        </div>
        <div>debug: {newPerson}</div>
      </form>
      <h2>Persons's numbers</h2>
      <div>
        <PrintoutPersons persons={persons} />
      </div>
    </div>
  );
};

export default App;
