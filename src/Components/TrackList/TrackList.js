import React from "react";
import styles from "./TrackList.module.css";
function TrackList(props) {
  const buttonSigned = props.button === "plus" ? "➕" : "❌";
  // props.handleTrackAdd
  // console.log(props.song.artist.name);
  const handleClick = (song) => {
    props.handleTrack(song);
    // console.log("clicked", song);
  };
  return (
    <div>
      <ul>
        <div className={styles.containerList}>
          <li className={styles.list}>
            {props.song.album.title}
            <button
              className={styles.button}
              onClick={() => handleClick(props.song)}
            >
              {buttonSigned}
            </button>
          </li>
          <p>{props.song.title}</p>
          <p>{props.song.artist.name}</p>
        </div>
      </ul>
    </div>
  );
}

export default TrackList;
