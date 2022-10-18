import {ChangeEvent, useRef, useState} from 'react';

export default {
  title: 'input',
  // component: input,
};

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const actualValue = e.currentTarget.value;
    setValue(actualValue);
  };

  return <><input onChange={onChange}/> - {value}</>;
};
export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return <><input ref={inputRef}/>
    <button onClick={save}>save
    </button>

    - actual value: {value}
  </>;
};
export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState<string>('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value);

  return <input value={parentValue} onChange={onChange}/>;
};
export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState<boolean>(true);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked);

  return <input type={'checkbox'} checked={parentValue} onChange={onChange}/>;
};
export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>('2');
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value);

  return <select onChange={onChange}>
    <option value={parentValue}>none</option>
    <option value={'1'}>Kiev</option>
    <option value={'2'}>Minsk</option>
    <option value={'3'}>Moscow</option>
  </select>
};
export const ControlledInputWithFixedValue = () => <input value={'it-incubator.ru'}/>;
