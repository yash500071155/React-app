import React , { useState} from 'react';


const MyAccordion = ({question,answer}) =>{
    const [show,setshow]=useState(false);
    return(
        <>
        <div className="main-heading">
            <p onClick={()=>setshow(!show)}>
                {show ? "➖":"➕"}
                <h3>{question}</h3>
            </p>
        </div>
        {show && <p className='answers'>{answer}</p>}
        </>
    );
}

export default MyAccordion;