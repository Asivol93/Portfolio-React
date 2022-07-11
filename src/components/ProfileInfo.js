import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import {
  ArticleOptionOne,
  ArticleOptionTwo,
  InsideContainer,
  ColoredTitle,
  ColoredTitleWrapper,
} from './StyledComponents'

const IconWrapper = styled.span`
  /* margin: 15px; */
  padding: 20px;
`

export const ProfileInfo = () => {
  return (
    <>
      <ArticleOptionTwo>
        <InsideContainer>
          <p>
            <IconWrapper>
              <FontAwesomeIcon icon={faCode} size='2x' color='#c70251' />
            </IconWrapper>
            Hello! I’m a Frontend Developer with experience in project
            management and continuous improvement. I love building memorable
            projects with focus on creativity, usability and functionality
            across all my competence areas. Outside of the box-thinking close to
            heart with enthusiasm for innovation and new technology.
          </p>
          <p>
            Currently working as a Front end developer consultant at Axakon
            Consulting.
          </p>
          <p>
            In my free time? I love gaming, especially with friends, as well as
            working out (trying to ace jump ropes at this moment!).
          </p>
        </InsideContainer>
      </ArticleOptionTwo>
      <ArticleOptionOne>
        <InsideContainer>
          <ColoredTitleWrapper>
            <ColoredTitle>Tech</ColoredTitle>
          </ColoredTitleWrapper>
          <p>
            HTML, CSS, JavaScript & TypeScript, React, Redux, APIs, Git, Web
            Accessibility, Mob- and pair-programming, Github/Gitlab, Project
            management, Interaction Analytics, Digital Assistants (NLP)
          </p>
        </InsideContainer>
      </ArticleOptionOne>
    </>
  )
}
