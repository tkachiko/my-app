import React, {useEffect, useState} from 'react';

export default {
  title: 'useEffect demo',
};

export const SimpleExample = () => {
  const [fake, setFake] = useState<number>(1);
  const [counter, setCounter] = useState<number>(1);

  console.log('SimpleExample');

  // useEffect(() => {
  //   console.log('useEffect');
  //   document.title = counter.toString()
  //   // api getUsers().then('')
  //   // setInterval
  //   // indexedDB
  //   // document.getElementById
  //   // document.title = 'User'
  // });

  useEffect(() => {
    console.log('useEffect every render');
    document.title = counter.toString()
  });

  useEffect(() => {
    console.log('useEffect only first render (componentDidMount)');
    document.title = counter.toString()
  }, []);

  useEffect(() => {
    console.log('useEffect first render and every counter change');
    document.title = counter.toString()
  }, [counter]);

  return <>
    Counter: {counter}, Fake: {fake}
    <button onClick={() => setCounter(counter + 1)}>counter +</button>
    <button onClick={() => setFake(fake + 1)}>fake +</button>
  </>;
};

