import React, { useState } from 'react';
import './accordion.css';
import MyAccordion from './MyAccordion';
import {questions} from './Api';

const Accordion =()=>{
    const [data,setdata]=useState(questions);
    return(
        <>
        <section className="main-div">
            <h1>React practice questions</h1>
            {
                data.map((currElement)=>{
                    return <MyAccordion key={currElement.id}  {...currElement}></MyAccordion>
                })
            }
        </section>
        </>
      
        
    );
}
export default Accordion;