import { useState } from "react";

// import './ItemCounter.css';
import styles from './ItemCounter.module.css';

interface Props {
  brand: string;
  quantity?: number;
};

export const ItemCounter = ({brand, quantity = 1}: Props) => {
  const [count, setCount] = useState(quantity)
  // const handleClick = () => {
  //   console.log(`Click ${brand}`);
  // }
  const handleAdd = () => {
    setCount(count + 1)
  }
  const handleSubtract = () => {
    if (count === 1) return;
    setCount(count - 1)
  }
  return (
    <section className={styles['item-row']}>
      <span
        className={styles['item-text']}
        style={{
          color: count === 1 ? 'red' : 'black',
        }}
      >
        {brand}
      </span>
      <button
        onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button
        onClick={handleSubtract}>-1</button>
    </section>
  )
};