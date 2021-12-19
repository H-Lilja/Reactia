import { useState } from "react/cjs/react.development";

const Quote = ({ quote, number}) => {
   const [poista, setPoista]= useState(1);
   const poistaQuote= () =>{
       setPoista(0);
      
   }
    if (number==0 ){
        
        
        return(
            <div>
            <h2>Quotes</h2>
    
               <div> No quotes!</div>
            </div>
    
        )
    }

    else{
    return (
      <div >
        <h2>Quotes</h2>

        <div style={{ border: "1px solid gray" }}>{quote}
        <input type="button" onClick={poistaQuote} value="delete" />
        </div>
      </div>
    );
  };
}
  export default Quote;