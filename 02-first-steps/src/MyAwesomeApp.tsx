import type { CSSProperties } from "react";

const name = 'Deko';
const lastName = 'Herrera';
const favouriteSports = ['rideBike', 'swimming', 'running']
const isActive = true;
const address = {
  zipCode: 'xxxxx',
  country: 'MX'
}
const spanProperties: CSSProperties = {
  color: 'blue',
  background: 'yellow',
  fontSize: '24px'
}
export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{ name }</h1>
      <h3>{ lastName }</h3>
      <p>{ favouriteSports.join(', ') }</p>
      <h1>{ isActive }</h1>
      <p style={spanProperties}>{ JSON.stringify(address) }</p>
    </>
  )
}