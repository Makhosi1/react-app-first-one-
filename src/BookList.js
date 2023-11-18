import React, { useEffect } from 'react';


const bookLists = ['Half of a yellow sun', "American", 'Ghana must go'];

class BookList extends React.Component {
    render() {
        return (
            <div className='booklist'>
                <h1> Books for {this.props.name}</h1>
                <ul>
                    {bookLists.map(item => (
                        <li key={item}> {item}</li>
                    ))}
                </ul>

            </div>
        )
    }

}

export  default BookList;

export function Counter (){
    const[count,setCount] = React.useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() =>{
        // dom manipulation, data fetching thats the use of useEffect
        document.title = `${count} Book(s) counted`
    })

    return(
        <div>
            <p>Count:{count} </p>
            <button onClick={increment}>Increment count</button>
        </div>
    )
}