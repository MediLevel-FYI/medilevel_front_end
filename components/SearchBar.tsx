type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className="hidden mx-auto sm:block">
      <label htmlFor="icon" className="sr-only">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-20 flex items-center pl-4 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <input type="text" id="icon" name="icon" className="block px-4 py-2 pr-20 text-sm text-gray-300 bg-transparent border-gray-700 rounded-md shadow-sm pl-11 w-92 md:w-96 focus:z-10 focus:border-gray-900 focus:ring-gray-600 placeholder:text-gray-500" placeholder="Search" />
          <div className="absolute inset-y-0 right-0 z-20 flex items-center pr-4 pointer-events-none">
            <span className="text-gray-500">Ctrl + /</span>
          </div>
      </div>
    </div>
  )
}

export default SearchBar
