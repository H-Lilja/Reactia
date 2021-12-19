import Title from "./components/Title";
import Quote from "./components/Quote";
import {useState,useEffect} from "react"

function App() {

  const [lainaukset,setLainaukset] = useState("")
   const loadQuotes = async() => {
    const API_URL= "https://api.kanye.rest/"
    let response = await  fetch(API_URL);
    let data = await response.json();
    setLainaukset( data);
    
}
const [count,setCount] = useState(0)
const [count2,setCount2] = useState(0)
 useEffect(() =>{
    loadQuotes();
 },[count]);


return(
    <div>
        <Title/>
        <Quote quote = {lainaukset.quote} number = {count2} />

    <p>Total quote count {count}</p>
    <p>Quotes in view {count2}</p>
    <button onClick = {(loadQuotes)=>{
      
        setCount(count+1);
        setCount2(count2+1);
    }}>Fetch 1 quote</button>
    <button onClick = {()=>{
        setCount2(count2 - count2);
        setLainaukset("");
    }}>Delete all quotes</button>
  </div>
);
   
};

export default App;
