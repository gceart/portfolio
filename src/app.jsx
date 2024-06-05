import Nav from './components/Nav/Nav'
import Name from './components/Name/Name'
import About from './components/About/About'
import Knowledge from './components/Knowledge/Knowledge'
import Projects from './components/Projects/Projects'
import Background from './components/Background/Background'
import { awake } from './utils.js'

export function App () {
  awake()
  return (
    <main className='transition-all flex flex-col min-w-screen min-h-screen bg-black bg-opacity-50 overflow-x-hidden'>
      <div className='flex flex-col w-3/4 gap-5 self-center max-w-5xl overflow-x-hidden pb-32'>
        <Nav />
        <Name />
        <About />
        <Knowledge />
        <Projects />
      </div>
      <Background />
    </main>
  )
}
