import React from "react";

type AccordionPropsType = {
  titleValue: string,
  collapsed: boolean,
}

function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering')
  return <>
  <AccordionTitle title={props.titleValue}/>
  {!props.collapsed && <AccordionBody/>}
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
