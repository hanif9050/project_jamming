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
        <div key={props.song.id} className={styles.containerList}>
          <li className={styles.list}>
            {props.song.name}
            <button
              className={styles.button}
              onClick={() => handleClick(props.song)}
            >
              {buttonSigned}
            </button>
          </li>
          <p>{props.song.album}</p>
          <p>{props.song.artists}</p>
        </div>
      </ul>
    </div>
  );
}

export default TrackList;
