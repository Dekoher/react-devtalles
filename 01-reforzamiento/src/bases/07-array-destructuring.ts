const characterNames = ['Goku', 'Vegueta', 'Trunks'];

const [,, trunks] = characterNames;

console.log({ trunks });

const returnsArrayFn = () => {
  return ['abc', 123] as const
}

const [ letra, numero] = returnsArrayFn();

console.log(letra);
console.log(numero + 100);

const useState = (value: string) => {
  return [
    value,
    (newValue: string) => console.log('valor=>', newValue)
  ] as const
}

const [name, setName] = useState('Goku')
console.log(name)
setName('Vegueta')