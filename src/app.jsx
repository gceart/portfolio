import { useState } from 'preact/hooks'
import Note from './components/Note'
import Section from './components/Section'

export function App () {
  return (
    <div className='flex flex-col min-w-dvw min-h-dvh bg-black gap-2'>
      <Section title='About Me' />
      <Note command='whoami' text='Gastón' />
      <Section title='Knowledge' />
      <Section title='Projects' />
      <Section title='Contact' />
    </div>
  )
}
