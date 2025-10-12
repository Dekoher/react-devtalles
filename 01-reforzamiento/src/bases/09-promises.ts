const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(100)
    reject('el vato no volvio')
  }, 2000);
})

myPromise.then((money: number) => {
  console.log(money);
}).catch((reason) => {
  console.warn(reason);
}).finally(() => {
  console.log('a seguir dandole papito');
})

// curl --header "api_key: ODuusJKon9UsrJZUee0QLeWqT9nGE08n" https://api.giphy.com
// https://api.giphy.com/v1/gifs/random?api_key=123asd&tag=&rating=g
// curl "https://api.giphy.com/v1/gifs/random?api_key=ODuusJKon9UsrJZUee0QLeWqT9nGE08n&tag=&rating=g"