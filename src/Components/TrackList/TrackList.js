import React from "react";
import styles from "./TrackList.module.css";
function TrackList(props) {
  const buttonSigned = props.button === "plus" ? "➕" : "❌";
  // props.handleTrackAdd

  const handleClick = (song) => {
    props.handleTrackAdd(song);
    console.log("clicked", song);
  };
  return (
    <div>
      <ul>
        <div className={styles.containerList}>
          <li className={styles.list}>
            {props.song.name}{" "}
            <button
              className={styles.button}
              onClick={() => handleClick(props.song)}
            >
              {buttonSigned}
            </button>
          </li>
          <p>{props.song.artist}</p>
        </div>
      </ul>
    </div>
  );
}

export default TrackList;
