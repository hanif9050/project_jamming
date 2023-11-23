import React from "react";
import styles from "./Track.module.css";
import TrackList from "../TrackList/TrackList";
function Track(props) {
  let track = "";
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
      <input className={styles.inputField} type="text" />
      {track}
    </div>
  );
}

export default Track;
