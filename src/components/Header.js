import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'

const HeaderBackground = styled.header`
  background-image: url('https://images.unsplash.com/photo-1528731708534-816fe59f90cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  display: flex;
  flex-direction: column;
  /* object-fit: cover; */
  position: relative;
  background-position: stretch;
  color: #212427;
  height: 500px;
  h1 {
    font-size: 40px;
    margin: 0px 0px 0 30px;
  }

  h2 {
    font-size: 20px;
    margin: 10px 0px 0 30px;
  }

  #profile {
    position: absolute;
    right: 35px;
    top: 290px;
    width: 210px;
  }

  #first,
  #second {
    display: none;
  }

  #third {
    position: absolute;
    width: 240px;
    right: 50px;
    bottom: 0;
  }
  @media (min-width: 620px) and (max-width: 920px) {
    #profile {
      width: 270px;
      right: 20px;
      top: 230px;
    }

    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 25px;
    }
  }

  @media (min-width: 921px) {
    #first {
      display: initial;
      position: absolute;
      width: 300px;
      right: 350px;
      top: 100px;
    }
    #second {
      display: initial;
      position: absolute;
      width: 300px;
      right: 200px;
      top: 100px;
    }
    #third {
      position: absolute;
      width: 300px;
      right: 50px;
      top: 100px;
    }

    h1 {
      font-size: 60px;
    }
    h2 {
      font-size: 30px;
    }
  }
`
// const imageContainer = styled.div`
//   position: absolute;
//   display: flex;
//   width: 100%;
// `
const IconWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 20px;
  place-items: flex-end;

  img {
    width: 50px;
  }

  a {
    margin: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const Header = () => {
  return (
    <HeaderBackground>
      <IconWrapper>
        <a
          href='https://github.com/Asivol93'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} size='3x' color='#212427' />
        </a>
        <a
          href='https://www.linkedin.com/in/lovisa-carling/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedin} size='3x' color='#212427' />
        </a>
        <a
          href='https://stackoverflow.com/users/16687109/asivol'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faStackOverflow} size='3x' color='#212427' />
        </a>
      </IconWrapper>
      <div>
        <h1>Frontend</h1>
        <h1>developer</h1>
        <h2>with love for innovation</h2>
      </div>

      <img id='first' src='https://i.imgur.com/QFZbCf9.png' alt='profile' />
      <img id='second' src='https://i.imgur.com/eA82jcz.png' alt='profile' />
      <img id='third' src='https://i.imgur.com/8y5SflB.png' alt='profile' />
    </HeaderBackground>
  )
}
