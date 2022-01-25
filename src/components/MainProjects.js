import React from 'react'
import styled from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import data from '../assets/ProjectsData.json'
import {
  InsideContainer,
  ArticleOptionTwo,
  ColoredTitle,
  ColoredTitleWrapper,
} from './StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const CardInfo = styled.div`
  padding-bottom: 30px;
  width: 100%;

  img {
    width: 100%;
    display: block;
  }
`

const Tag = styled.span`
  color: #fff;
  background-color: #c70251;
  border: none;
  font-size: 10px;

  padding: 4px;
  margin-right: 10px;
  box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
    rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
    rgb(0 0 0 / 9%) 0px -3px 5px;
`
const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  a {
    text-decoration: none;
    color: #000;
    position: relative;
    display: block;
  }
  @media (max-width: 798px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(156, 166, 197, 0.5);
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: transparent;
  }
`
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`

export const MainProjects = () => {
  return (
    <ArticleOptionTwo>
      <InsideContainer>
        <ColoredTitleWrapper>
          <ColoredTitle>Featured Projects</ColoredTitle>
        </ColoredTitleWrapper>

        <CardContainer>
          {data.map((item) => (
            <CardInfo key={item.title}>
              <a
                href={item.netlify}
                alt='project landingpage'
                target='_blank'
                rel='noopener noreferrer'
              >
                <CardOverlay></CardOverlay>
                <img src={item.image} alt='project poster' />
              </a>
              <DetailsWrapper>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <CardFooter>
                  <TagContainer>
                    {item.tools.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagContainer>
                  <a
                    href={item.github}
                    alt='project landingpage'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size='3x'
                      color='#212427'
                    />
                  </a>
                </CardFooter>
              </DetailsWrapper>
            </CardInfo>
          ))}
        </CardContainer>
      </InsideContainer>
    </ArticleOptionTwo>
  )
}
