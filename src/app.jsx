import { useState } from 'preact/hooks'
import Nav from './components/Nav/Nav'
import Section from './components/Section'
import About from './components/About/About'
import Knowledge from './components/Knowledge/Knowledge'
import Projects from './components/Projects/Projects'
import Background from './components/Background/Background'

export function App () {
  return (
    <main className='flex flex-col min-w-screen min-h-screen bg-black bg-opacity-60 overflow-x-hidden'>
      <div className='flex flex-col w-3/4 gap-5 self-center max-w-5xl overflow-x-hidden'>
        <Nav />
        <h1 className='text-4xl mt-40 mb-20 flex flex-col items-center font-semibold text-gray-50'>
          Gastón Villalba
          <span className='text-base'>Portfolio</span>
        </h1>
        <About />
        <Knowledge />
        <Projects />
        <Section title='Contact' />
      </div>
      <Background />
    </main>
  )
}
