import React, { useState } from "react";
import styles from "./Track.module.css";
import TrackList from "../TrackList/TrackList";
function Track(props) {
  const [inputField, setInputField] = useState("New Playlist");
  let track = "";
  const handleButton = () => {
    props.savePlaylist(inputField);
    setInputField("New Playlist");
  };
  if (props.trackList.length > 0) {
    track = props.trackList.map((song) => (
      <TrackList
        key={song.id}
        song={song}
        handleTrack={props.handleTrackRemove}
        button=""
      />
    ));
  }
  return (
    <div className={styles.container}>
      <input
        className={styles.inputField}
        type="text"
        value={inputField}
        onChange={(e) => setInputField(e.target.value)}
      />
      {track}
      <button className={styles.button} onClick={handleButton}>
        Save to Spotify
      </button>
    </div>
  );
}

export default Track;
