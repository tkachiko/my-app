import React from 'react';
import s from './OnOff.module.css';

type OnOffPropsType = {
  isOn: boolean
}

export const OnOff = (props: OnOffPropsType) => {
  return (
    <div className={s.onOff}>
      <div className={`${s.on} ${props.isOn && s.active}`}>On</div>
      <div className={`${s.off} ${!props.isOn && s.active}`}>Off</div>
      <div className={`${s.circle} ${props.isOn ? s.circleOn : s.circleOff}`}></div>
    </div>
  );
};
