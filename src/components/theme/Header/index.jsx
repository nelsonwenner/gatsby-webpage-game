import React,{ useEffect } from 'react'
import './styles.css';

import Navbar from './Navbar';

const Wrapper = ({ children }) => (
  <div className="header">{ children }</div>
)

export const Header = () => {
  
  useEffect(() => {
    let header = document.querySelector('.header');
    window.addEventListener('scroll', (event) => {
      let windowPosition = window.scrollY > 0;
      header.classList.toggle('sticky', windowPosition);
    })
  }, [])

  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  )
}