import Section from '../Section'
import Note from '../Note'
import { info } from '../../../data/info.js'
import { phrases } from '../../../data/phrases.js'

export default function About () {
  console.log(info)

  const content = (
    <Note command='whoami' text={info.title} />
  )

  return (
    <Section title='About Me' content={content} />
  )
}
