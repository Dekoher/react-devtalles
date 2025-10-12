function greet (name: string): string {
  // return `Hello, ${name}`;
  return `Hello, ${name}`;
}

const greet2 = (name: string) => `Hello, ${name}`;

const message = greet('Deko');
const message2 = greet2('Her');

console.log(message);
console.log(message2);

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: 'ABC123',
    username: 'DekoHerrera',
  };
}

const getUser2 = (): User => ({
  uid: 'DEF456',
  username: 'totito',
});

const user = getUser();
console.log(user);
console.log(getUser2());

const myNumbers = [1, 2, 3, 4, 5];

// myNumbers.forEach((n) => {
//   console.log(n * 2);
// });
myNumbers.forEach(console.log);