import { useState } from 'preact/hooks'
import Nav from './components/Nav/Nav'
import Section from './components/Section'
import About from './components/About/About'
import Knowledge from './components/Knowledge/Knowledge'
import Projects from './components/Projects/Projects'
import bg from './assets/bg.jpg'

export function App () {
  return (
    <main className='flex flex-col min-w-screen min-h-screen bg-black bg-opacity-60 py-[8px]'>
      <div className='flex flex-col w-3/4 gap-5 self-center max-w-5xl'>
        <Nav />
        <h1 className='text-4xl mt-24 mb-10 flex flex-col items-center font-semibold text-white'>Gastón Villalba<span className='text-base'>Portfolio</span></h1>
        <About />
        <Knowledge />
        <Projects />
        <Section title='Contact' />
      </div>
      <img src={bg} className='fixed min-w-dvw min-h-screen -z-50 object-cover top-0 left-0' />
    </main>
  )
}
