const Add = ({ addABook }) => {
    const closeButton = () => {
        let add = document.getElementById('Add');
        add.classList.remove("flex");
        add.classList.add('hidden');
    }

    return(
        <div id="Add" className="fixed z-50 bg-gray-100 hidden flex-col justify-center items-center h-screen w-screen top-0 space-y-10">
            <h1 className="font-mono tracking-wider text-4xl uppercase">Add a book.</h1>
            <img onClick={closeButton} src="./assets/close.svg" alt="Close" className="absolute top-[-20px] left-[310px] md:left-[1200px] md:top-0" />
            <input id="NameInput" type="text" placeholder="Name"  className="input-style" />
            <input id="AuthorInput" type="text" placeholder="Author" className="input-style" />
            <input id="PagesInput" type="text" placeholder="Pages" className="input-style" />
            <div className="flex justify-center items-center flex-col space-y-4 w-screen">
                <select id="StatusInput" name="Status" className="button-style py-4 text-center w-[80%] md:w-[30%]">
                    <option value="Read">Read</option>
                    <option value="To Read">To Read</option>
                    <option value="Reading">Reading</option>
                </select>
                <button onClick={addABook} type="submit" className="button-style py-4 w-[80%] md:w-[30%]">Add</button>
            </div>
      </div>
    )
}

export default Add;