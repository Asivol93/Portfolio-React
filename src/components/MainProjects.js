import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import data from '../assets/ProjectsData.json'
import {
  ArticleOptionOne,
  ArticleOptionTwo,
  ColoredTitle,
  ColoredTitleWrapper,
} from './StyledComponents'

const CardInfo = styled.div`
  padding-bottom: 30px;
  a {
    text-decoration: none;
    color: #000;
  }
`

export const MainProjects = () => {
  return (
    <ArticleOptionTwo>
      <ColoredTitleWrapper>
        <ColoredTitle>Featured Projects</ColoredTitle>
      </ColoredTitleWrapper>

      <Carousel>
        {data.map((item) => (
          <CardInfo key={item.title}>
            <img src={item.image} alt='project poster' />
            <a
              href={item.netlify}
              alt='project landingpage'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.tools.tag}</span>
            </a>
          </CardInfo>
        ))}
      </Carousel>
    </ArticleOptionTwo>
  )
}
