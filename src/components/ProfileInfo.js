import React from 'react'
import {
  ArticleOptionOne,
  ArticleOptionTwo,
  InsideContainer,
  ColoredTitle,
  ColoredTitleWrapper,
} from './StyledComponents'

export const ProfileInfo = () => {
  return (
    <>
      <ArticleOptionTwo>
        <InsideContainer>
          <p>
            Hello! I’m a Frontend Developer with experience in project
            management and continuous improvement. I love building memorable
            projects with focus on creativity, usability and functionality
            across all my competence areas. Outside of the box-thinking close to
            heart with enthusiasm for innovation and new technology.
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
            HTML, CSS, JavaScript ES6 (React), APIs, Git, Web Accessibility,
            Mob- and pair-programming, Github, Digital Transformation,
            Interaction Analytics, Digital Assistants (NLP)
          </p>
        </InsideContainer>
      </ArticleOptionOne>
    </>
  )
}
