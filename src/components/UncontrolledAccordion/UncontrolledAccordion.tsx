import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer';

type AccordionPropsType = {
  titleValue: string,
}

export const UncontrolledAccordion = React.memo((props: AccordionPropsType) => {
  console.log('Accordion rendering');

  // const [collapsed, setCollapsed] = useState(true);
  const [state, dispatch] = useReducer(reducer, {collapsed: false});

  return <>
    {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
    <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
    {!state.collapsed && <AccordionBody/>}
  </>;
});

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
  console.log('AccordionTitle rendered');
  return <h3 onClick={props.onClick}>-- {props.title} --</h3>;
});

const AccordionBody = React.memo(() => {
  console.log('AccordionBody rendered');
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>;
});

export default UncontrolledAccordion;
