import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";


export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([])
  const [gifs, setGifsList] = useState<Gif[]>([])

  const handleTermClicked = (term: string) => {
    console.log('term=>', term);
  }
  const handleSearch = async (search: string = '') => {
    search = search.toLocaleLowerCase().trim();
    if(search.length === 0) return;
    if (previousTerms.includes(search)) return;
    setPreviousTerms([search, ...previousTerms].splice(0, 8));
    const gifsResponse = await getGifsByQuery(search);
    console.log('gifsResponse=>', gifsResponse);
    setGifsList(gifsResponse);
  }

  return (
    <>
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte Gifs"/>
      <SearchBar placeholder="Buscar Gifs" buttonText="Buscar" onQuery={handleSearch}/>
      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>
      <GifList gifs={gifs}/>
    </>
  )
};