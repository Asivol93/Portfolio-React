import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'

const HeaderBackground = styled.header`
  background-image: url('https://i.imgur.com/S2Cq7YT.jpg');
  display: flex;
  flex-direction: column;
  /* object-fit: cover; */
  background-position: top;
  color: #fff;
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
      font-size: 30px;
    }
  }

  @media (min-width: 921px) {
    #profile {
      width: 350px;
      right: 20px;
      top: 150px;
    }

    h1 {
      font-size: 60px;
    }
    h2 {
      font-size: 40px;
    }
  }
`
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
          <FontAwesomeIcon icon={faGithub} size='3x' color='#fff' />
        </a>
        <a
          href='https://www.linkedin.com/in/lovisa-carling/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedin} size='3x' color='#fff' />
        </a>
        <a
          href='https://stackoverflow.com/users/16687109/asivol'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faStackOverflow} size='3x' color='#fff' />
        </a>
      </IconWrapper>
      <div>
        <h1>Frontend</h1>
        <h1>developer</h1>
        <h2>with love for innovation</h2>
      </div>

      <img id='profile' src='https://i.imgur.com/PGtCfwP.png' alt='profile' />
    </HeaderBackground>
  )
}
