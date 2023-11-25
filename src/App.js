import "./App.css";
import React, { useEffect, useState } from "react";

import styles from "./App.module.css";
import SearchBar from "./Components/SearchBar/SearchBar";

import SearchResults from "./Components/SearchResults/SearchResults";
import Track from "./Components/Track/Track";

import { Spotify } from "./SpotifyLatest";

function App() {
  const [data, setData] = useState([]);
  const [trackList, setTrackList] = useState([]);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    Spotify.getAccessToken();
  }, []);
  useEffect(() => {
    if (search) {
      console.log(search);
      Spotify.search(search).then((res) => {
        setData(res);
        console.log("inside", res);
      });
    }
    // getToken().then((response) => setToken(response.access_token));
  }, [search]);

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

  const handleSearchButton = (item) => {
    setSearch(item);
  };
  const savePlaylist = (playlistName) => {
    const trackURIs = trackList.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then((res) => {
      // console.log(res);
      setTrackList([]);
    });
  };
  // console.log("trackList outside div", trackList);
  // console.log(data);
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1>Hnaif</h1>
        <SearchBar handleSearchButton={handleSearchButton} />
        <div className={styles.trackContainer}>
          <SearchResults data={data} handleTrackAdd={handleTrackAdd} />
          <Track
            trackList={trackList}
            handleTrackRemove={handleTrackRemove}
            savePlaylist={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
