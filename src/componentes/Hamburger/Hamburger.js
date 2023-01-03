import React from 'react';
import Styles from './Hamburger.module.css';

const Hamburger = () => {
  return (
    <div className={Styles.Container}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>Menu</title>
        <path d="M5.333 22.667h21.333v-2.667h-21.333v2.667zM5.333 17.333h21.333v-2.667h-21.333v2.667zM5.333 9.333v2.667h21.333v-2.667h-21.333z"></path>
      </svg>
    </div>
  );
};

export default Hamburger;
