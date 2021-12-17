import React from 'react'
import styled from 'styled-components'
import {
  ArticleOptionOne,
  InsideContainer,
  ColoredTitleWrapper,
  ColoredTitle,
} from './StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'

const IconWrapperBottom = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-evenly;
  a {
    margin: 30px;
  }
`

export const More = () => {
  return (
    <ArticleOptionOne>
      <InsideContainer>
        <ColoredTitleWrapper>
          <ColoredTitle>For more</ColoredTitle>
        </ColoredTitleWrapper>
        <IconWrapperBottom>
          <div>
            <a
              href='https://github.com/Asivol93'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} size='3x' color='black' />
            </a>
          </div>
          <div>
            <a
              href='https://www.linkedin.com/in/lovisa-carling/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} size='3x' color='black' />
            </a>
          </div>
          <div>
            <a
              href='https://stackoverflow.com/users/16687109/asivol'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faStackOverflow} size='3x' color='black' />
            </a>
          </div>
        </IconWrapperBottom>
      </InsideContainer>
    </ArticleOptionOne>
  )
}
