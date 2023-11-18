import logo from './logo.svg';
import './App.css';
import BookList, { Counter } from './BookList';
import data from './react_assignment/counterassignment.json';
import { useState } from 'react';
import BookCounter from './react_assignment/counterassignment';


const name = "Nomakhosi Mabusa" //can create the javascript variable outside or 


function App() {

  const {userInfo} = data;

  const filmLists = ['Big Bang Theory', 'Sleepy Hollow', 'Modern Family'] // or create inside the function before the return statement
  console.log(userInfo);

  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{fontSize: '30px', color: '#cc0000', textTransform: 'uppercase' }}>This is React ...</h1>
      </header>
      <ul>
        {
          filmLists.map(list => (
            <li>{list}</li>
          ))
        }
      </ul>
      <h3 style ={{color:"green"}}>{name} </h3>

      <BookList name={name}/>
      <BookCounter infoProps ={userInfo} />

    </div>
  );
}

// 14/11/2023
// array desctruring
let arrayOfItems = ['Makhosi', "Mabusa", 33];

console.log(arrayOfItems[0]);

const[firstName, lastName , age, height = 55.5] = arrayOfItems;
console.log(firstName);
console.log(age);
console.log(height);

// object desctructing
const book = {
  "id": 1,
  "volumeInfo": {
    "title": "The Girl Who Smiled Beads ",
    "authors": ["Clemetine Wamariya", "Coco Nyathi"],
    "description": "When Clem was a six years old she travelled a long distance to ....",
  },
  "price": 9.99
}

let {id, volumeInfo: { title, authors: [author1, author2], description },price} = book;
console.log(id);
console.log(price);
console.log(author2);



export default App;

/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/