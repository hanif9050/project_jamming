import React from "react";
import styles from "./SearchResults.module.css";
import TrackList from "../TrackList/TrackList";
function SearchResults(props) {
  // data.album.id
  // data.album.title
  // data.artist.name
  const listData = props.data.map((song) => (
    <TrackList
      key={song.album.id}
      song={song}
      handleTrack={props.handleTrackAdd}
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
