import React, { useContext, useState } from 'react';
import Image from 'next/image';

import styles from './header.module.scss';
import AplicationContext from '../context/appcontext';

const Header = () => {
  const AppContext = useContext(AplicationContext);
  return (
    <div className={styles.container_header}>
      <div className={styles.container_nav}>
        <div className={styles.hamburger_icon}>
          <Image
            src="/assets/Icons/Menu.svg"
            alt="icono menu"
            width="40px"
            height="40px"
          />
        </div>
        <div className={styles.logo}>
          <Image
            src="/assets/logo.png"
            alt="logo"
            width="100px"
            height="40px"
          />
        </div>
      </div>
      <div className={styles.container_form}>
        <input
          placeholder="Search"
          type="text"
          onChange={(e) => {
            AppContext.setSearch(e.target.value);
          }}
        />
        <button type="button">
          <img
            src="/assets/Icons/Search.svg"
            alt="icono buscar"
            width="20px"
            height="20px"
          />
        </button>
      </div>
    </div>
  );
};
export default Header;
