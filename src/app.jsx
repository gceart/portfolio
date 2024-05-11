import { useState } from 'preact/hooks'
import Note from './components/Note'
import Section from './components/Section'
import Projects from './components/Projects/Projects'
import bg from './assets/bg.jpg'

export function App () {
  return (
    <main className='flex flex-col min-w-dvw min-h-screen bg-black bg-opacity-60 py-6'>
      <span className='w-3/4 gap-2 self-center'>
        <Section title='About Me' />
        <span className='flex justify-center'>
          <Note command='whoami' text='Gastón' />
        </span>
        <Projects />
        <Section title='Knowledge' />
        <Section title='Contact' />
      </span>
      <img src={bg} className='fixed min-w-dvw min-h-screen -z-50 object-cover top-0 left-0' />
    </main>
  )
}
