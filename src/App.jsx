import { useState } from "react";
import Add from "./components/Add";
import Card from "./components/Card";

const App = () => {
  let library = [
    {
      name: 'To Kill A Mockingbird',
      author: 'Harper Lee',
      pages: 336,
      status: 'Read',
    },
    {
        name: 'The Great Gatsby',
        author: 'F.Scott Fitzgerald',
        pages: 180,
        status: 'To Read',
    },
    {
        name: 'The Animal Farm',
        author: 'Geroge Orwell',
        pages: 128,
        status: 'To Read',
    },
    {
        name: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        pages: 194,
        status: 'Reading',
    },
    {
        name: 'Brave New World',
        author: 'Aldous Huxley',
        pages: 268,
        status: 'To Read',
    },
    {
        name: 'Of Mice and Men',
        author: 'John Steinback',
        pages: 103,
        status: 'To Read',
    },
    {
        name: 'Slaughterhouse Five',
        author: 'Kurt Vonnegut Jr',
        pages: 275,
        status: 'To Read',
    },
    {
        name: 'The Stranger',
        author: 'Albert Camus',
        pages: 159,
        status: 'Read',
    },
    {
        name: '2001: A Space Odyssey',
        author: 'Arthur.C.Clarke',
        pages: 297,
        status: 'Read',
    },
    {
        name: 'The death of Ivan Illych',
        author: 'Leo Tolstoy',
        pages: 79,
        status: 'Reading',
    },
    {
        name: 'The Metamorphosis',
        author: 'Franz Kafka',
        pages: 103,
        status: 'To Read',
    }
  ]

  // let newBooks = new Array();
  let [bookArray, setBookArray] = useState(library);

  const addABook = () => {
    let name = document.getElementById("NameInput")
    let author = document.getElementById("AuthorInput")
    let pages = document.getElementById("PagesInput")
    let status = document.getElementById("StatusInput")

    if (name.value.length != 0 && author.value.length != 0 && pages.value.length != 0) {
          let objBook = {
            name: name.value,
            author: author.value,
            pages: pages.value,
            status: status.value,
        }
          setBookArray([...bookArray, objBook]);
        } 
        name.value = '';
        author.value = '';
        pages.value = '';
        let add = document.getElementById('Add');
        add.classList.remove("flex");
        add.classList.add('hidden');
        // console.log(bookArray);
    }

  const showAdd = () => {
    const add = document.getElementById("Add");
    add.classList.remove("hidden");
    add.classList.add("flex");
  }

  // console.log(bookArray);

  // const removeEle = () => {
  //   const newArr = [...bookArray];
  //   newArr.splice(newArr.indexOf(book), 1);
  //   // setBookArray(newArr);
  // }

  console.log(bookArray);

  return(
    <div className="py-6 bg-gray-100 w-screen h-full font-sans text-black flex flex-col justify-start items-center font-semibold">
      <h1 className="uppercase mb-6 font-mono tracking-wider">Library.</h1>
      {bookArray.map((book) => (
        <Card key={book.name} name={book.name} author={book.author} pages={book.pages} status={book.status} remove={() => {
          const newArr = [...bookArray];
          newArr.splice(newArr.indexOf(book), 1);
          setBookArray(newArr);
          // console.log(bookArray);
        }} />
      ))}
      <img onClick={showAdd} src="./assets/add.svg" alt="Add" className="fixed bottom-10 left-[280px] w-[72px] shadow hover:shadow-2xl" />
      <Add addABook={addABook}/>
    </div>
  )
}

export default App;