'use client';

import { Accordion } from 'flowbite-react';
import FullDetials from './FullDetials';


const AccordionC = ({car}) => {
   return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Full Detials</Accordion.Title>
        <Accordion.Content>
         {/* ====================================
         ==================================== */}

         <FullDetials car={car}/>
         {/* ====================================
         ==================================== */}
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default AccordionC;

