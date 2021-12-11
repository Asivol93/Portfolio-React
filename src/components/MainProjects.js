import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const MainProjects = () => {
  const projects = [
    {
      title: 'Weather app built with Javascript & open weather API',
      image: 'https://i.imgur.com/x4maGoe.png',
      description:
        'Weather forecast for locations worldwide using Open Weather API',
      tools: {
        tag: 'HTML',
        tag: 'CSS',
        tag: 'JavaScript ES6',
        tag: 'API',
        tag: 'Mob programming',
      },
    },
    {
      title: 'Send happy thoughts with help of API fetch & post requests',
      image: 'https://i.imgur.com/x4maGoe.png',
      description:
        'Website built with React where you can send happy thoughts through API fetch and post requests. Like other thoughts and filter between oldest and newest.',
      tools: {
        tag: 'CSS',
        tag: 'JavaScript ES6',
        tag: 'React',
        tag: 'API',
      },
    },
    {
      title: 'Guess who game with League of Legends theme',
      image: 'https://i.imgur.com/x4maGoe.png',
      description:
        'Guess who game that filters champions based on user guesses',
      tools: {
        tag: 'HTML',
        tag: 'CSS',
        tag: 'JavaScript ES6',
      },
    },
    {
      title: 'Todo list built with Redux',
      image: 'https://i.imgur.com/x4maGoe.png',
      description:
        'Todo list where you can add and clear tasks. Built with Redux reducers and actions',
      tools: {
        tag: 'Styled components',
        tag: 'Redux',
        tag: 'React',
      },
    },
    {
      title: 'Business site built with HTML, CSS & JavaScript',
      image: 'https://i.imgur.com/x4maGoe.png',
      description:
        'Video header with JavaScript navbar, CSS grid and JavaScript accordion.',
      tools: {
        tag: 'HTML',
        tag: 'CSS',
        tag: 'JavaScript ES6',
      },
    },
    {
      title: 'Mobile application built with React Native',
      image: 'https://i.imgur.com/x4maGoe.png',
      description:
        'Fetching cocktails from an API with the accelerometer sensor',
      tools: {
        tag: 'React Native stylesheets',
        tag: 'React Native',
        tag: 'API',
        tag: 'Accelerometer Sensor',
      },
    },
    {
      title: 'Trivia Quiz built in redux',
      image: 'https://i.imgur.com/x4maGoe.png',
      description:
        'Trivia quiz built in Redux. Displays correct/incorrect answers as well as a summary with charts',
      tools: {
        tag: 'Styled components',
        tag: 'React',
        tag: 'Redux',
        tag: 'Mob programming',
      },
    },
    {
      title: 'API built with Next.js',
      image: 'https://i.imgur.com/x4maGoe.png',
      description:
        'Backend project building an API with Next.js. Frontend built with React.',
      tools: {
        tag: 'Next.js',
        tag: 'React Native',
        tag: 'API',
        tag: 'Accelerometer Sensor',
      },
    },
    {
      title: 'Movie Releases',
      image: 'https://i.imgur.com/x4maGoe.png',
      description:
        'Movie releases website built with React that fetches new, up coming and popular movies',
      tools: {
        tag: 'Styled components',
        tag: 'React',
        tag: 'API',
        tag: 'Pair programming',
      },
    },
    {
      title: 'Game finder survey',
      image: 'https://i.imgur.com/x4maGoe.png',
      description:
        'Find a game that matches your profile with this survey built in React',
      tools: {
        tag: 'CSS',
        tag: 'React',
      },
    },
    {
      title: 'Music chatbot built with JavaScript',
      image: 'https://i.imgur.com/x4maGoe.png',
      description:
        'Chat bot that gives you song recommendations based on your mood',
      tools: {
        tag: 'HTML',
        tag: 'CSS',
        tag: 'JavaScript ES6',
        tag: 'Pair programming',
      },
    },
  ]
  return (
    <article>
      <h3>Featured Projects</h3>
      <div>
        <Carousel>
          {projects.map((item) => (
            <div>
              <img src={item.image} alt='project poster' />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.tools.tag}</span>
            </div>
          ))}
        </Carousel>
      </div>
    </article>
  )
}
