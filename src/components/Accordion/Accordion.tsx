import React from 'react';

type AccordionPropsType = {
  title: string
  collapsed?: boolean
  onChange: () => void
  items: ItemType[]
  onClick: (value: number) => void
}

type ItemType = {
  title: string
  value: any
}

export function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering');
  return <>
    <AccordionTitle title={props.title} onChange={props.onChange}/>
    {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
  </>;
}

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendered');
  return <h3 onClick={props.onChange}>-- {props.title} --</h3>;
}

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: number) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  console.log('AccordionBody rendered');
  return <ul>
    {props.items.map((item, index) => <li onClick={() => {
      props.onClick(item.value);
    }} key={index}>{item.title}</li>)}
  </ul>;
}

export default Accordion;
