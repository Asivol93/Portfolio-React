import React from 'react'
import styled from 'styled-components'
// import { LightBackground } from '../assets/light-background.jpg'

const HeaderBackground = styled.header`
  background-image: url('https://i.imgur.com/9C8weqB.jpg');
  display: flex;
  flex-direction: column;
  background-position: center;

  height: 500px;
  h1 {
    font-size: 40px;
    margin: 20px 20px 0 20px;
  }

  h2 {
    font-size: 20px;
    margin: 10px 0px 0 20px;
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
  }

  @media (min-width: 921px) {
    #profile {
      width: 350px;
      right: 20px;
      top: 150px;
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

  @media {
  }
`

export const Header = () => {
  return (
    <HeaderBackground>
      <IconWrapper>
        <a href='https://github.com/Asivol93'>
          <img
            src='https://img.icons8.com/ios-glyphs/30/000000/github.png'
            alt='github icon'
          />
        </a>
        <a href='https://www.linkedin.com/in/lovisa-carling/'>
          <img
            src='https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v2.png'
            alt='linkedin icon'
          />
        </a>
        <a href='https://stackoverflow.com/users/16687109/asivol'>
          <img
            src='https://img.icons8.com/windows/32/000000/stackoverflow.png'
            alt='stackoverflow icon'
          />
        </a>
      </IconWrapper>
      <div>
        <h1>Frontend Developer</h1>
        <h2>With love for innovation</h2>
      </div>

      <img id='profile' src='https://i.imgur.com/PGtCfwP.png' alt='profile' />
    </HeaderBackground>
  )
}
