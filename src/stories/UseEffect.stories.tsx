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
    document.title = counter.toString();
  });

  useEffect(() => {
    console.log('useEffect only first render (componentDidMount)');
    document.title = counter.toString();
  }, []);

  useEffect(() => {
    console.log('useEffect first render and every counter change');
    document.title = counter.toString();
  }, [counter]);

  return <>
    Counter: {counter}, Fake: {fake}
    <button onClick={() => setCounter(counter + 1)}>counter +</button>
    <button onClick={() => setFake(fake + 1)}>fake +</button>
  </>;
};

export const SetIntervalExample = () => {
  const [counter, setCounter] = useState<number>(1);

  console.log('SetTimeoutExample');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(state => state + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <>
    Hello, counter: {counter}
  </>;
};

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1);

  console.log('Component rendered with: ' + counter);

  useEffect(() => {
    console.log('Effect occurred: ' + counter);

    return () => {
      console.log('RESET EFFECT: ' + counter);
    };
  }, [counter]);

  const increase = () => {
    setCounter(counter + 1);
  };

  return <>
    Hello, counter: {counter}
    <button onClick={increase}>+
    </button>
  </>;
};

export const KeysTrackerExample = () => {
  const [text, setText] = useState('');

  console.log('Component rendered with: ' + text);

  const handler = (e: KeyboardEvent) => {
    console.log('Key pressed: ' + e.key);
    setText(text + e.key);
  };

  useEffect(() => {
    window.addEventListener('keypress', handler);

    return () => {
      window.removeEventListener('keypress', handler);
    };
  }, [text]);

  return <>
    Typed text: {text}
  </>;
};

export const SetTimeoutExample = () => {
  const [text, setText] = useState('');

  console.log('Component rendered with: ' + text);

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      console.log('TIMEOUT EXPIRED');
      setText('3 seconds passed');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  return <>
    text: {text}
  </>;
};