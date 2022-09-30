import React, {useState} from 'react';

type AccordionPropsType = {
  titleValue: string,
  // collapsed: boolean,
}

function UncontrolledAccordion(props: AccordionPropsType) {
  console.log('Accordion rendering')
  const [collapsed, setCollapsed] = useState(true)
  return <>
  <AccordionTitle title={props.titleValue}/><button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
  {!collapsed && <AccordionBody/>}
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

export default UncontrolledAccordion;
