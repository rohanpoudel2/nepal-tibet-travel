import { useState, useRef, useEffect } from "react";
import styles from "./searchmodal.module.scss";

const SearchModal = ({ showModal, setShowModal }) => {

  const [search, setSearch] = useState("");
  const searchBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [showModal]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className={styles.searchModal}>
      <div className={styles.searchBox} ref={searchBoxRef}>
        <input type="search" name="search" id="search" value={search} onChange={handleInputChange} placeholder="Type here to search" className={styles.input} />
      </div>
    </div>
  )
}

export default SearchModal