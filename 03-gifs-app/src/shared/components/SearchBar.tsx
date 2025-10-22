import { useEffect, useState } from "react";

interface Props {
  placeholder: string;
  buttonText: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({placeholder = 'Buscar', buttonText, onQuery}: Props) => {
  const [query, setQuery] = useState('');
  // useEffect(() => {
  //   const timeOutID = setTimeout(() => {
  //     onQuery(query)
  //   }, 700);

  //   return () => {
  //     clearTimeout(timeOutID)
  //   }
  // }, [query, onQuery])
  const handleSearch = () => {
    onQuery(query);
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSearch}
      >{buttonText}</button>
    </div>
  )
};