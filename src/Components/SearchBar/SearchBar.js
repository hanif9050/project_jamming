import styles from './SearchBar.module.css'
function SearchBar() {
    return ( <>
    
    <input type="text" className={styles.inputField}/>
    <button className={styles.button}>Search</button>
    </> );
}

export default SearchBar;