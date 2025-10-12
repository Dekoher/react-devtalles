import type { GiphyRandomResponse } from "../data/gifResponse";

const API_KEY = 'ODuusJKon9UsrJZUee0QLeWqT9nGE08n';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

const createImageInDOM = (url: string) => {
  const imageElem = document.createElement('img');
  imageElem.src = url;
  document.body.append(imageElem);
}

myRequest
  .then((response) => response.json())
  .then(( { data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    // createImageInDOM(imageUrl);
  })
  .catch((error) => {
    console.log('error=>', error);
  })