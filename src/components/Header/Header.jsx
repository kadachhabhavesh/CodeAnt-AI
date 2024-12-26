import React from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.title}>
          <div>Repositories</div>
          <div>33 total Repositories</div>
        </div>
        <div>
          <button className={styles.button}>
            <img src="src\assets\images\refresh.png" alt="" />
            <div>Refresh All</div>
          </button>
          <button className={styles.button}>
            <img src="src\assets\images\add.png" alt="" />
            <div>Add Repository </div>
          </button>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className={styles.searchBar}>
          <div>
            <img src="src\assets\images\search.png" alt="" />
          </div>
          <input placeholder="Search Repositories" />
        </div>
      </div>
    </div>
  );
};

export default Header;
