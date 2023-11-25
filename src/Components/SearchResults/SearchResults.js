import React from "react";
import styles from "./SearchResults.module.css";
import TrackList from "../TrackList/TrackList";
function SearchResults(props) {
  // data.album.id
  // data.album.title
  // data.artist.name
  // data.tracks.items
  // data.tracks.items.name
  // data.tracks.items.id
  // data.tracks.items.name
  const listData = props.data.map((song) => (
    <TrackList
      key={song.id}
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
