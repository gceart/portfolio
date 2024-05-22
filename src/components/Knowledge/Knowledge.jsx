import Section from '../Section'

export default function Knowledge () {
  const content = (
    <span className='flex flex-col gap-10 text-lg text-wrap text-pink-200'>
      <span className='flex bg-black bg-opacity-50 p-2 rounded-md'>
        <b className='mr-4 min-w-fit'>{'> 2024'}</b>
        <ul className='flex flex-col gap-2 text-gray-50'>
          <li>• Data Analyst Course (in progress)</li>
        </ul>
      </span>

      <span className='flex bg-black bg-opacity-50 p-2 rounded-md'>
        <b className='mr-4 min-w-fit'>{'> 2023'}</b>
        <ul className='flex flex-col gap-2 text-gray-50'>
          <li>• Finish Computer Systems University Undergraduate</li>
          <li>• Scrum master in AI Project + NodeJS</li>
          <li>• Requirements analysis + UML + NoSQL databases</li>
        </ul>
      </span>

      <span className='flex bg-black bg-opacity-50 p-2 rounded-md'>
        <b className='mr-4 min-w-fit'>{'> 2022'}</b>
        <ul className='flex flex-col gap-2 text-gray-50'>
          <li className=''>• Relational databases</li>
          <li className=''>• Java Junit, TDD, algorithms</li>
        </ul>
      </span>

      <span className='flex bg-black bg-opacity-50 p-2 rounded-md'>
        <b className='mr-4 min-w-fit'>{'> 2021'}</b>
        <ul className='flex flex-col gap-2 text-gray-50'>
          <li className=''>• First Java team project with Git</li>
          <li className=''>• Self-taught start in Javascript</li>
        </ul>
      </span>

      <span className='flex bg-black bg-opacity-50 p-2 rounded-md'>
        <b className='mr-4 min-w-fit'>{'> 2020'}</b>
        <ul className='flex flex-col gap-2 text-gray-50'>
          <li className=''>• First Python team project</li>

          <li className=''>• Begin Computer Systems University Undergraduate</li>
        </ul>
      </span>
    </span>
  )

  return (
    <Section title='Knowledge' content={content} />
  )
}
