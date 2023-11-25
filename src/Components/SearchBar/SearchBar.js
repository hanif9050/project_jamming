import { useState } from "react";
import styles from "./SearchBar.module.css";
function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");
  const handleClick = () => {
    props.handleSearchButton(searchInput);
    setSearchInput("");
  };
  return (
    <>
      <input
        type="text"
        className={styles.inputField}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className={styles.button} onClick={handleClick}>
        Search
      </button>
    </>
  );
}

export default SearchBar;
