const Card = ({ name, author, pages, status, remove }) => {
    return(
        <div id="Card" className="flex flex-col items-start justify-evenly p-6 space-y-4  bg-white drop-shadow-md border border-solid border-black rounded w-72 h-[420px] mb-7">
            <h1 className="before:content-['Name:'] before:flex before:flex-col before:text-gray-500 before:text-2xl text-4xl">{name}</h1>
            <h2 className="text-3xl before:content-['Author:'] before:flex before:flex-col before:text-gray-500 before:text-2xl">{author}</h2>
            <h3 className="text-2xl before:content-['Pages:'] before:flex before:flex-col before:text-gray-500 before:text-2xl">{pages}</h3>
            <div className="space-x-3 flex items-center">
                <select value={status} name="Status" id="Status" className="button-style py-[10px] px-1">
                    <option value="Read">Read</option>
                    <option value="To Read">To Read</option>
                    <option value="Reading">Reading</option>
                </select>
                <button onClick={remove} className="button-style">Remove</button>
            </div>
      </div>
    )
}

export default Card;