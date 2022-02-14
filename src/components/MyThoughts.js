import React from 'react'
import styled from 'styled-components'
import {
  ColoredTitle,
  ArticleOptionOne,
  InsideContainer,
  ColoredTitleWrapper,
} from './StyledComponents'

const ArticleImg = styled.img`
  width: 100%;
`
const ArticleWrapper = styled.div`
  text-align: start;
  h4 {
    margin: 3px;
    text-transform: uppercase;
  }
  span {
    color: #c62a88;
    font-weight: 800;
  }
  a {
    text-decoration: none;
    color: black;
  }
`
const Date = styled.h4`
  color: #c62a88;
  text-transform: uppercase;
`

const TestDiv = styled.div`
  width: 100px;
  height: 100px;
  /* background: red;
  opacity: 1; */
  background: rgba(255, 255, 0, 1);
`

export const MyThoughts = () => {
  return (
    <ArticleOptionOne>
      <InsideContainer>
        <ColoredTitleWrapper>
          <ColoredTitle>My thoughts</ColoredTitle>
        </ColoredTitleWrapper>
        <ArticleImg src='https://i.imgur.com/ikgAmwp.jpg' />
        <ArticleWrapper>
          <Date>Nov 3</Date>
          <a
            href='https://medium.com/@lovisa.carling/are-developers-lonely-individuals-working-by-themselves-80d638b3e9bd'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h4>Are developers lonely individuals working by themselves? </h4>
            <p>
              The stereotype that developers are lonely, introvert individuals
              who prefer working alone in a dark room is a preconception that
              most people who never coded have. Me included before joining
              Technigo Frontend Bootcamp! <span>&gt;&gt;</span>
            </p>
          </a>
        </ArticleWrapper>
        <h3>Other thoughts</h3>
        <ArticleWrapper>
          <Date>Dec 3</Date>
          <a
            href='https://medium.com/@lovisa.carling/never-memorize-something-that-you-can-look-up-d1f1d69e1598'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h4>Never memorize something that you can look up</h4>
            <p>
              I have had countless of thoughts and discussions with my fellow
              developer friends about feeling as an imposter when googling
              things, even the smallest most basic stuff.
              <span>&gt;&gt;</span>
            </p>
          </a>
        </ArticleWrapper>
      </InsideContainer>
    </ArticleOptionOne>
  )
}
