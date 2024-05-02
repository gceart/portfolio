import { useState } from 'preact/hooks'
import Note from './components/Note'
import Section from './components/Section'
import { projects } from '../data/data'
import bg from './assets/bg.jpg'

export function App () {
  return (
    <div className='flex flex-col min-w-dvw min-h-screen bg-black bg-opacity-60 bg-gradient-to-t'>
      <span className='w-3/4 gap-2 self-center'>
        <Section title='About Me' />
        <Note command='whoami' text='Gastón' />
        <Section title='Knowledge' />
        <Section title='Projects' data={{ projects }} />
        <Section title='Contact' />
      </span>
      <img src={bg} className='fixed min-w-dvw min-h-screen -z-50 object-cover' />
    </div>
  )
}
