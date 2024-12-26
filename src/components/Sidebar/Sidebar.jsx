import React, { useState } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.brandName}>
          <img src="src/assets/images/CodeAnt.png" alt="CodeAnt Logo" />
          <div>CodeAnt AI</div>
        </div>

        <div className={styles.menu} onClick={toggleMenu}>
          <img src="src/assets/images/menu.png" alt="Menu Icon" />
        </div>
      </div>

      <div
        className={`${styles.SideBarContent} ${
          isMenuOpen ? styles.showMenu : ""
        }`}
      >
        <div className={styles.dropdown}>
          <div>UtkarshDhairyaPa...</div>
          <img src="src/assets/images/down-arrow.png" alt="Dropdown Icon" />
        </div>

        <div className={styles.sideBarItems}>
          <div>
            <div className={styles.sideBarItem}>
              <img src="src/assets/images/home.png" alt="Code Icon" />
              <div>Repositories</div>
            </div>
            <div className={styles.sideBarItem}>
              <img src="src/assets/images/code.png" alt="Code Icon" />
              <div>AI Code Review</div>
            </div>
            <div className={styles.sideBarItem}>
              <img src="src\assets\images\cloud.png" alt="Code Icon" />
              <div>Cloud Security</div>
            </div>
            <div className={styles.sideBarItem}>
              <img src="src\assets\images\HowToUse.png" alt="Code Icon" />
              <div>How to Use</div>
            </div>
            <div className={styles.sideBarItem}>
              <img src="src\assets\images\gear.png" alt="Code Icon" />
              <div>Settings</div>
            </div>
          </div>
          <div>
            <div className={styles.sideBarItem}>
              <img src="src\assets\images\Support.png" alt="Code Icon" />
              <div>Support</div>
            </div>
            <div className={styles.sideBarItem}>
              <img src="src\assets\images\LogOut.png" alt="Code Icon" />
              <div>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
