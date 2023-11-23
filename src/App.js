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
  /*   useEffect(() => {
    dataJs("h").then((res) => {
      setDate(res);
    });
  }); */
  useEffect(() => {
    const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=Sorry";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "41c5b43e54msh94c735d769cec1fp172702jsn00545eb8d289",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    // data.album.id
    // data.album.title
    // data.artist.name

    const fetchReq = async (url, options) => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result.data.slice(0, 10));
        setDate(result.data.slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    };
    fetchReq(url, options);
  }, []);
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
  // console.log(data);
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
