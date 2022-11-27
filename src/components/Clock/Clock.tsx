import React, {useEffect, useState} from 'react';

type PropsType = {}

const getTwoDigitTimeString = (num: number) => {
  return num < 10 ? '0' + num : num
}

export const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {

    const intervalId = setInterval(() => {
      console.log('tick');
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }

  }, [])

  return (
    <div>
      <span>{getTwoDigitTimeString(date.getHours())}</span>
      :
      <span>{getTwoDigitTimeString(date.getMinutes())}</span>
      :
      <span>{getTwoDigitTimeString(date.getSeconds())}</span>
    </div>
  );
};