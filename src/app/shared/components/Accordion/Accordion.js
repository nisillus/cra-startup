import React, { Fragment } from 'react';
import AccordionItem from './AccordionItem';

function Accordion(props) {
  return (
    <Fragment>
      { props.data.map(item => <AccordionItem key={item.id} {...item}/>) }
    </Fragment>
  );
}


export default Accordion;