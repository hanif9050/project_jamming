import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

import styles from "./App.module.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import dataJs from "./Fetch";
import SearchResults from "./Components/SearchResults/SearchResults";
import Track from "./Components/Track/Track";

function App() {
  const [data, setDate] = useState([]);
  const [trackList, setTrackList] = useState([]);
  useEffect(() => {
    dataJs("h").then((res) => {
      setDate(res);
    });
  });
  const handleTrackAdd = (item) => {
    if (!trackList.includes(item)) {
      setTrackList((prev) => [...prev, item]);
      // console.log("tracList",tracList)
    }
    // console.log("tracList outside",tracList)
  };
  const handleTrackRemove = (target) => {
    setTrackList((prev) => {
      const afterRemove = prev.filter((item) => item.id !== target.id);
      return [...afterRemove];
    });
  };
  console.log("trackList outside div", trackList);
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1>Hnaif</h1>
        <SearchBar />
        <div className={styles.trackContainer}>
          <SearchResults data={data} handleTrackAdd={handleTrackAdd} />
          <Track trackList={trackList} handleTrackRemove={handleTrackRemove} />
        </div>
      </div>
    </div>
  );
}

export default App;
