import React, { useState, useEffect } from 'react';
import Job from "./Job";
import { Form } from "./Form";
export const Jobs = () => {

  const [state, setState] = useState([]);

  useEffect(() => {
    const url = "/offers";
    fetch(url)
      .then(res => {
        return res.json();
      }).then(offers => {
        
        setState({ offers })
      });
  }, [])
  
  return (
    <div>
      <div>
       {(state.offers === undefined)?<h1>No jobs</h1>:state.offers.map((e, i) => <Job key={i} offer={e} />)}
      </div>
        

      <div>
        <Form />
      </div>
    </div>

      
  );
}