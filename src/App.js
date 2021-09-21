import logo from './logo.svg';
import './App.css';
import contactsJSON from "./contacts.json";

import React, { useState } from 'react';



function App() {

  const [contacts, setContacts] = useState(contactsJSON.slice(0,5));

  const addRandomContact = () => {
    const index = Math.floor(Math.random() * contactsJSON.length);
    const newRandomContact = contactsJSON[index];
    contactsJSON.slice(index, 1);
    setContacts([newRandomContact, ...contacts]);
  };


  const sortByName = () => {
  
    contacts.sort((a , b) => a.name.localeCompare(b.name))
    setContacts([...contacts]) //Spread operator creates a new array
  
  };


const sortByPopularity = () => {
  
  contacts.sort((a , b) => (b.popularity - a.popularity))
  setContacts([...contacts])

};
  
  const deleteContact = (id) => {
    setContacts(contacts.filter((contacts) => contacts.id !== id ));

  }
     
  const [wonOscar, setWonOscar] = useState(true);
     
  const [wonEmmy, setWonEmmy] = useState(true);

 
  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={addRandomContact}>Add Random Contact</button>
    <button onClick={sortByPopularity}>Sort by Popularity</button>
    <button onClick={sortByName}>Sort by Name</button>
    
    <table>
    <tr>
     <th>Picture</th>
     <th>Name</th>
     <th>Popularity</th>
     <th>Won Oscar</th>
     <th>Won Emmy</th>
     <th>Actions</th>
     </tr>   

     {contacts.map(contacts => {
      
    return (
      <tr>

        <td><img src={contacts.pictureUrl} alt="pic" width= "100px"/></td> 
        <td>{contacts.name}</td>
        <td>{contacts.popularity}</td>
        <td>{contacts.wonOscar ? "🏆 " : ""}</td>
        <td>{contacts.wonEmmy ? "🌟" : ""}</td>
        <td> <button onClick={() => {deleteContact(contacts.id)}}>Delete Contact</button></td>
       </tr>
    )



     })}





    </table>
   </div>
    
  );
}

export default App;
