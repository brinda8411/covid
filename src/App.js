import React,{useEffect,useState} from "react";
import './App.css';
import Corona from "./Corona";

function App() {
  const url=`https://api.covid19india.org/data.json`;
  const[one,setOne]=useState([]);
  const city=async()=>{
    const response=await fetch(url)
    const data=await response.json()
    console.log(data.statewise);
    setOne(data.statewise);
  }
  useEffect(()=>{
    city();
  },[])
  return (
    <div className="App">
     <h1 className="heading">Corona in India</h1>
     <h3 className="heading2">Live tracker(state-wise)</h3>
     {one.map(ci=>(
       <Corona names={ci.state}
       update={ci.lastupdatedtime}
       confirmed={ci.confirmed}
         active={ci.active}
         recoveries={ci.recovered}
         deaths={ci.deaths}
       />
     ))}
    </div>
  );
}

export default App;
