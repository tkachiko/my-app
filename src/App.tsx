import React from 'react';
import './App.css';

function Hello() {
  alert('Hello IT-KAMASUTRA')
}

function App() {
  console.log('App rendering')
  return (
    <div>
      <AppTitle/>
      <Rating/>
      <Accordion/>
      <Rating/>
    </div>
  );
}

function AppTitle() {
  console.log('AppTitle rendered')
  return <>This is App component</>
}

function Rating() {
  console.log('Rating rendered')
  return (
    <>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </>
  )
}

function Star() {
  console.log('Star rendered')
  return (
    <div>star</div>
  )
}

function Accordion() {
  console.log('Accordion rendering')
  return <>
    <AccordionTitle/>
    <AccordionBody/>
  </>
}

function AccordionTitle() {
  console.log('AccordionTitle rendered')
  return <h3>Menu</h3>
}

function AccordionBody() {
  console.log('AccordionBody rendered')
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
}

export default App;
