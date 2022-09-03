import React from "react";

type AccordionPropsType = {
  titleValue: string,
  collapsed: boolean,
}

function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering')
  if (!props.collapsed) {
    return <>
      <AccordionTitle title={props.titleValue}/>
      <AccordionBody/>
    </>
  }
  return <>
    <AccordionTitle title={props.titleValue}/>
  </>
}

type AccordionTitlePropsType = {
  title: string,
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendered')
  return <h3>-- {props.title} --</h3>
}

function AccordionBody() {
  console.log('AccordionBody rendered')
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
}

export default Accordion;
