import React from "react";
import styles from "./SearchResults.module.css";
import TrackList from "../TrackList/TrackList";
function SearchResults(props) {
  const listData = props.data.map((song) => (
    <TrackList
      key={song.id}
      song={song}
      handleTrackAdd={props.handleTrackAdd}
      button="plus"
    />
  ));
  return (
    <div className={styles.container}>
      <h1>Results</h1>

      {listData}
    </div>
  );
}

export default SearchResults;
