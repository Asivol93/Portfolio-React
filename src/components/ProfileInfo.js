import React from 'react'
import {
  ArticleOptionOne,
  ArticleOptionTwo,
  ColoredTitle,
  ColoredTitleWrapper,
} from './StyledComponents'

export const ProfileInfo = () => {
  return (
    <>
      <ArticleOptionTwo>
        <p>
          Hello! I love to build memorable projects with focus on creativity,
          usability and functionality across all my competence areas. Outside of
          the box-thinking close to heart with enthusiasm for innovation and new
          technology. With experience in project management I'm secure in
          leading and be a support member in projects. I often work with a Just
          do it-approach but do appreciate structure such as planning, designing
          and analyzing.
        </p>
      </ArticleOptionTwo>
      <ArticleOptionOne>
        <ColoredTitleWrapper>
          <ColoredTitle>Tech</ColoredTitle>
        </ColoredTitleWrapper>
        <p>
          HTML, CSS, JavaScript, ES6, API:s, Git, Web Accessibility,
          Mob-programming, Pair-programming, Github, Digital Transformation,
          Interaction Analytics, Digital Assistants (NLP)
        </p>
      </ArticleOptionOne>
    </>
  )
}
