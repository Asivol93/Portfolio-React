import React from 'react'
import { Header } from 'components/Header'
import { ProfileInfo } from 'components/ProfileInfo'
import { MainProjects } from 'components/MainProjects'
import { MyThoughts } from 'components/MyThoughts'

export const App = () => {
  return (
    <div>
      <Header />
      <ProfileInfo />
      <MainProjects />
      <MyThoughts />
      Find me in src/app.js!
    </div>
  )
}
