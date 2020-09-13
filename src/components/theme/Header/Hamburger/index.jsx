import React from 'react';
import './styles.css';

const Hamburger = ({ isClicked, onClick }) => {
  return (
    <div 
      className={`hamburger ${ (isClicked && 'motion') }`}
      onClick={ onClick }
    /> 
  )
}

export default Hamburger;