import React from 'react';
import Image from 'next/image';

import styles from './user.module.scss';

const User = () => (
  <div className={styles.container_user}>
    <div className={styles.logo}>
      <Image
        src="/assets/logo.png"
        alt="Picture of the author"
        width="150px"
        height="50px"
      />
    </div>
    <div className={styles.logo_user}>
      <Image
        src="/assets/avatar.png"
        alt="Picture of the author"
        width="150px"
        height="150px"
      />
    </div>
    <div className={styles.info}>
      <p className={styles.name}>ASNK123</p>
      <p className={styles.level}>Level 1</p>
      <p className={styles.text}>&quot;Work hard on your test&quot;</p>
    </div>
    <div className={styles.container_log_out}>
      <button type="button" className={styles.button}>
        <Image
          src="/assets/Icons/Logout.svg"
          alt="Picture of the author"
          width="20px"
          height="20px"
        />
        <span>Log Out</span>
      </button>
    </div>
  </div>
);

export default User;
