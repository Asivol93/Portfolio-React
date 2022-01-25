import React from 'react'
import styled from 'styled-components'

const FooterBackground = styled.section`
  width: 100%;
  height: 250px;
  background-image: url('https://i.imgur.com/S2Cq7YT.jpg');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: top;
  color: #fff;
  h2 {
    text-transform: uppercase;
  }
  p {
    margin: 2px;
  }
`

export const Footer = () => {
  return (
    <FooterBackground>
      <h2>Contact</h2>
      <p>Lovisa Carling</p>
      <p>+46 722 33 44 14</p>
      <p>lovisa.carling@gmail.com</p>
    </FooterBackground>
  )
}
