import React from 'react';

type AccordionPropsType = {
  title: string
  collapsed?: boolean
  onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering');
  return <>
    <AccordionTitle title={props.title} onChange={props.onChange}/>
    {!props.collapsed && <AccordionBody/>}
  </>;
}

function AccordionTitle(props: AccordionPropsType) {
  console.log('AccordionTitle rendered');
  return <h3 onClick={props.onChange}>-- {props.title} --</h3>;
}

function AccordionBody() {
  console.log('AccordionBody rendered');
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>;
}

export default Accordion;
