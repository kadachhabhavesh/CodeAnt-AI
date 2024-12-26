import React from "react";
import styles from "./RepositoryCard.module.css";

const RepositoryCard = ({ name, size, language, visibility, updated }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <div>{name}</div><span>{visibility}</span>
      </div>
      <div className={styles.info}>
        <div>{language} <div className={styles.circle}></div></div>
        <div className={styles.size}>
          <img src="src\assets\images\database.png" alt="" />
          <div>
            {size} KB
          </div>
        </div>
        <div className={styles.Updateddate} >Updated {updated} ago</div>
      </div>
    </div>
  );
};

export default RepositoryCard;
