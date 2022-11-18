import React, {useMemo, useState} from 'react';

export default {
  title: 'useState demo',
};

function generateData() {
  // difficult calculations
  console.log('generateData');
  return 323567894;
}

export const Example1 = () => {
  console.log('Example1');

  // const initValue = useMemo(generateData, []);

  const [counter, setCounter] = useState<number>(generateData); // [323567894, function(newValue){}]

  const changer = (state: number) => {
    return state + 1;
  };

  return <>
    <button onClick={() => setCounter(changer)}>+</button>
    {counter}
  </>;
};

