import Section from '../Section'
import Info from './Info'

export default function Knowledge () {
  const content = (
    <span className='flex flex-col gap-10 text-lg text-wrap text-pink-200'>
      <Info year='2024' data={['Data Analyst Course (in progress)']} />
      <Info year='2023' data={['Finish Computer Systems University Undergraduate', 'Scrum master in AI Project + NodeJS', 'Requirements analysis + UML + NoSQL databases']} />
      <Info year='2022' data={['Relational databases', 'Java Junit, TDD, algorithms']} />
      <Info year='2021' data={['First Java team project with Git', 'Self-taught start in Javascript']} />
      <Info year='2020' data={['First Python team project', 'Begin Computer Systems University Undergraduate']} />
    </span>
  )

  return (
    <Section title='Knowledge' content={content} />
  )
}
