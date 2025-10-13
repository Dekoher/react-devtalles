import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: 'Scott 2', quantity: 1 },
  { productName: 'Cannondale 2', quantity: 2 },
  { productName: 'Colnago 2', quantity: 3 },
]

export function FirstStepsApp () {
  return (
    <>
      <h1>Carrito de compras</h1>
      {
        itemsInCart.map(({productName, quantity}) => (
          <ItemCounter key={productName} brand={productName} quantity={quantity}/>
        ))
      }
      {/* <ItemCounter brand="scott" quantity={1}/>
      <ItemCounter brand="cannondale" quantity={2}/>
      <ItemCounter brand="colnago" quantity={3}/> */}
    </>
  )
}