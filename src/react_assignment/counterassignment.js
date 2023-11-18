export default function BookCounter({infoProps}) {

    let { name, books } = infoProps;
    console.log(name);
    return ( 
        <div>
            <h1> Welcome to my Library</h1>
            <h4>{name}'s Books </h4>
            <button> Count Books</button>
            <ul>
                {books.map(book => (
                    < li key ={book}>{book}</li>
                ))}
        </ul>

        </div >

    )


}