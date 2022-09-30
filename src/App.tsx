import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
  console.log('App rendering');

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

  return (
    <div className={'App'}>
      <Rating value={ratingValue} onClick={setRatingValue}/>

      {/*<Accordion titleValue={'Menu'} collapsed={true}/>
      <Accordion titleValue={'Users'} collapsed={false}/>

      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>*/}

      <OnOff/>
      {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
      <UncontrolledRating/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string,
}

function PageTitle(props: PageTitlePropsType) {
  console.log('PageTitle rendered');
  return <h1>{props.title}</h1>;
}

export default App;
