import axios from "axios"

export function hello(name, phoneNumber, persons) {

    const personObject = { name, phoneNumber,}; 

    axios
        .post("http://localhost:3001/persons", personObject)
        .then((response) => {
            console.log("here message sended to database", response);
        }).catch((error) => {
            console.error("There was an error!", error);
        })

    console.log("Hello from Model.js:", name, phoneNumber);
    return persons.concat( personObject );
}