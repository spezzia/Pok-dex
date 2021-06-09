import React, { FC } from 'react';
import styles from './layoutApp.module.scss';

interface LayoutAppInterface {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const LayoutApp: FC<LayoutAppInterface> = ({ leftContent, rightContent }) => (
  <div className={styles.layout}>
    <div className={styles.left}>{leftContent}</div>
    <div className={styles.right}>{rightContent}</div>
  </div>
);

export default LayoutApp;
