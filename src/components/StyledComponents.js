import styled from 'styled-components'

export const ArticleOptionOne = styled.article`
  text-align: center;
  padding: 50px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 20px;
  }
`
export const ArticleOptionTwo = styled.article`
  padding: 50px 0 50px 0;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  p {
    font-size: 20px;
  }
`
export const InsideContainer = styled.div`
  width: 70%;
`

export const ColoredTitle = styled.h3`
  background-color: #c70251;
  padding: 10px;
  word-break: none;
  text-transform: uppercase;
  color: white;
  line-height: 27px;
  font-size: 25px;
  font-weight: 500;
  box-shadow: rgb(0 0 0 / 10%) 0px 20px 25px -5px,
    rgb(0 0 0 / 4%) 0px 10px 10px -5px;
`
export const ColoredTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`
