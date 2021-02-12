import React, { useEffect } from 'react'

import { Wrapper } from './styles'
import Navbar from './Navbar'

export const Header = () => {
  useEffect(() => {
    let header = document.querySelector('.header')
    window.addEventListener('scroll', (event) => {
      let windowPosition = window.scrollY > 0
      header.classList.toggle('sticky', windowPosition)
    })
  }, [])

  return (
    <Wrapper className="header">
      <Navbar />
    </Wrapper>
  )
}
