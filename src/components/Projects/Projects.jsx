import { useEffect, useState } from 'preact/hooks'
import Section from '../Section'
import Project from './Project'
import { projects } from '../../../data/projects.js'
import './projects.css'

export default function Projects () {
  const [showAll, setShowAll] = useState(false)
  const arrow = showAll ? 'unfold_less' : 'unfold_more'
  const elements = projects.map(p => {
    return <Project key={p.class} data={p} />
  })

  const toggleAnimation = () => {
    const remainElement = document.getElementById('remain')
    if (showAll) {
      remainElement?.classList.remove('unfold')
      remainElement?.classList.add('fold')
      setTimeout(() => setShowAll(false), 125)
    } else {
      setShowAll(true)
    }
  }

  useEffect(() => {
    const remainElement = document.getElementById('remain')
    if (showAll) {
      remainElement?.classList.remove('fold')
      remainElement?.classList.add('unfold')
    }
  }, [showAll])

  const handleShow = () => {
    toggleAnimation()
  }

  const more = <span className='material-symbols-outlined hover:scale-105 cursor-pointer flex ' onClick={() => handleShow()}>{arrow}</span>

  const mainProjects = (
    <>
      <span className='row-start-2 col-span-2'> {elements[0]} </span>
      {elements[1]}
      {elements[2]}
    </>
  )

  const remain = (
    <section id='remain'> {elements.splice(3)} </section>
  )

  const content = (
    <content className='relative grid grid-cols-2 gap-2 w-full'>
      {mainProjects}
      {showAll && remain}
    </content>
  )

  return (
    <Section title='Projects' subtitle={more} content={content} />
  )
}
