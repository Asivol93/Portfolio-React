import React from 'react'
import { Header } from 'components/Header'
import { ProfileInfo } from 'components/ProfileInfo'
import { MainProjects } from 'components/MainProjects'

export const App = () => {
  return (
    <div>
      <Header />
      <ProfileInfo />
      <MainProjects />
      Find me in src/app.js!
    </div>
  )
}
