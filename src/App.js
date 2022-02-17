import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/Header'
import { ProfileInfo } from 'components/ProfileInfo'
import { MainProjects } from 'components/MainProjects'
import { MyThoughts } from 'components/MyThoughts'
import { Skills } from 'components/Skills'
import { More } from 'components/More'
import { Footer } from 'components/Footer'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const App = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <ProfileInfo />
        <MainProjects />
        <MyThoughts />
        <Skills />
        <More />
        <Footer />
      </MainContainer>
    </>
  )
}
