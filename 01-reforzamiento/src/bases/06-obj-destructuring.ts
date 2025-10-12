const person = {
    name: 'Deko',
    age: 30,
    key: 'abc123'
}
const { name: ironmanName, age, key } = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;
// const country = person.country;

console.log({ironmanName, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({name, age, key, rank}: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank
  }
}

// const { keyName, rank, user: { name } } = useContext(person);
const { keyName, rank, user } = useContext(person);
const { name } = user
console.log({ keyName, rank, name });
