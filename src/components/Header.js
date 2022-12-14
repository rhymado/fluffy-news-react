import React from "react";
import styles from "../styles/Header.module.css";

import withNavigate from "../helpers/withNavigate";

function Header({ navigate, onSearchHandler }) {
  const onClickHandler = (to) => {
    navigate(to);
  };
  const userInfo = JSON.parse(localStorage["user-info"] || "{}");
  return (
    <header className={styles.container}>
      <aside className={styles["header-item"]}>
        <div
          className={styles.clickable}
          onClick={() => {
            onClickHandler("/");
          }}
        >
          Library
        </div>
      </aside>
      <nav className={`${styles["header-item"]} ${styles.nav}`}>
        <div
          className={styles.clickable}
          onClick={() => {
            onClickHandler("/position");
          }}
        >
          Position
        </div>
        <div
          className={styles.clickable}
          onClick={() => {
            onClickHandler("/books");
          }}
        >
          Books
        </div>
        <div
          className={styles.clickable}
          onClick={() => {
            onClickHandler("/counter");
          }}
        >
          Counter
        </div>
      </nav>
      <aside className={styles["header-item"]}>
        <input
          type="text"
          className={styles["search-bar"]}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearchHandler(e.target.value);
            }
          }}
        />
        {userInfo.token ? (
          <div className={styles.clickable}>Profile</div>
        ) : (
          <div
            className={styles.clickable}
            onClick={() => {
              onClickHandler("/register");
            }}
          >
            Register
          </div>
        )}
      </aside>
    </header>
  );
}

export default withNavigate(Header);
