import React from 'react';
import {ClockViewPropsType} from './Clock';

export const getTwoDigitTimeString = (num: number) => {
  return num < 10 ? '0' + num : num;
};

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
  return <>
    <span>{getTwoDigitTimeString(date.getHours())}</span>
    :
    <span>{getTwoDigitTimeString(date.getMinutes())}</span>
    :
    <span>{getTwoDigitTimeString(date.getSeconds())}</span>
  </>;
};