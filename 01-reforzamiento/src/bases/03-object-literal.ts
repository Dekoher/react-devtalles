interface Person {
  name: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  city: string;
  zip: string;
}

const ironman: Person = {
  name: 'Deko',
  lastName: 'Herrera',
  age: 35,
  address: {
    city: 'Dublin',
    zip: '12345',
  },
};

console.log(ironman);