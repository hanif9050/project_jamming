import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';

import styles from "./App.module.css";
import SearchBar from './Components/SearchBar/SearchBar';
import dataJs from './Fetch';
import SearchResults from './Components/SearchResults/SearchResults';
import Track from './Components/Track/Track';


function App() {
const [data,setDate]=useState([])
const [tracList,setTrackList]=useState([])
  useEffect(()=>{
    dataJs("h").then(res=>{
      setDate(res)
      
    })

  })
  const handleTrackAdd=(item)=>{
    if(!tracList.includes(item)){
      setTrackList((prev)=>[...prev,item])
      // console.log("tracList",tracList)
    }
    // console.log("tracList outside",tracList)
  }
  console.log("tracList outside div",tracList)
  return (
    <div className={styles.app}>
      <div className={styles.container}>
      <h1>Hnaif</h1>
      <SearchBar/>
      
      <SearchResults data={data} handleTrackAdd={handleTrackAdd}/>
      <Track />
        
          
        
      </div>
    </div>
  );
}

export default App;
