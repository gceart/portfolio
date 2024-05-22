import { useState } from 'preact/hooks'
import Section from '../Section'
import Project from './Project'
import { projects } from '../../../data/projects.js'

export default function Projects () {
  const [showAll, setShowAll] = useState(false)
  const arrow = showAll ? 'unfold_less' : 'unfold_more'
  const elements = projects.map(p => {
    return <Project key={p.class} data={p} />
  })
  const more = <span className='material-symbols-outlined hover:scale-105 cursor-pointer flex ' onClick={() => setShowAll(old => !old)}>{arrow}</span>

  const mainProjects = (
    <>
      <span className='row-start-2 col-span-2'> {elements[0]} </span>
      {elements[1]}
      {elements[2]}
    </>
  )
  const remain = (
    <span className={`${showAll ? 'h-auto opacity-100' : 'h-0 opacity-0 hidden'}  col-span-2 grid grid-cols-2 transition-all`}> {elements.splice(3)} </span>
  )

  const content = (
    <content className='relative grid grid-cols-2 gap-2 w-full'>
      {mainProjects}
      {remain}
    </content>
  )

  return (
    <Section title='Projects' subtitle={more} content={content} />
  )
}
