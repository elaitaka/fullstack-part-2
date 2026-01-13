import { useState, useEffect } from "react"
import axios from "axios"

import "./App.css"
import PrintoutPersons from "./components/PrintoutPersons"
import {hello} from './components/Model.js'

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newPerson, setNewPerson] = useState("");
  const [searchPerson, setSearchPerson] = useState("");

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  /* 
  Add new person into person-array object
  */
  const addPerson = (event) => {
    event.preventDefault();

    console.log(
      "addPerson and Phone number is:",
      !event.target.phoneNumber.value
    );

    persons.some(
      (person) =>
        person.name === newPerson ||
        (person.phoneNumber === event.target.phoneNumber.value &&
          !!event.target.phoneNumber.value)
    )
      ? alert(
          `${newPerson} or ${event.target.phoneNumber.value} is already added to phonebook`
        )
      
      : setPersons(hello(newPerson, event.target.phoneNumber.value,persons));
  };

  /* 
  Feed new person
  */
  const addNewPerson = (event) => {
    console.log("Add new Person:", event.target.value);
    setNewPerson(event.target.value);
  };

  /*
  Filter persons based on search input
  */
  const filteredPersons =
    searchPerson === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchPerson.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        <label htmlFor="searchPerson">Search person </label>
        <input
          value={searchPerson}
          onChange={(e) => setSearchPerson(e.target.value)}
          type="text"
          placeholder="Search person's name"
          id="searchPerson"
          name="searchPerson"
        />
      </div>
      <form onSubmit={addPerson}>
        <div>
          <label htmlFor="filterPersons">Name of person to be added </label>
          <input
            type="text"
            placeholder="Person's name to be added"
            pattern="[A-Za-z ']+"
            onChange={addNewPerson}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phonenumber </label>
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
        <PrintoutPersons persons={filteredPersons} />
      </div>
    </div>
  );
};

export default App;
