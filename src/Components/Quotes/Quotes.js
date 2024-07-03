import React, { useEffect, useState } from "react";
import axios from 'axios';

const Quotes = () => {
  const [data, setData] = useState([]);

 
    
     useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://type.fit/api/quotes",
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);
 
    
 
  return (
    <div >
      
        {/* {data.map(item => (
          
            <p>{item.text}</p>
       
        ))} */}
       {data.map((quote, i) => {
          // (console.log(Math.ceil(Math.random()*100),'sssss') )
           if(i === 0  ) {
            // Math.ceil( Math.random()* (999))
         return(
        
           <div className="Quotes-container" style={{marginTop:"-60px", position:"absolute", marginLeft:"40%"}}>
         <div className="quotes" key={i}>{quote.text}</div>
         <div className="author">~{quote.author}</div>
         </div>
        )} })}
      
      {console.log(data,"datas" )}
    </div>
  );
};

export default Quotes;
