import type { GiphyRandomResponse } from "../data/gifResponse";

const API_KEY = 'ODuusJKon9UsrJZUee0QLeWqT9nGE08n';

const createImageInDOM = (url: string) => {
  const imageElem = document.createElement('img');
  imageElem.src = url;
  document.body.append(imageElem);
}

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)

  const { data } = (await response.json()) as GiphyRandomResponse;
  return data.images.original.url;
}

getRandomGifUrl().then(createImageInDOM)