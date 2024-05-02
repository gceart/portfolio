import Project from './Project'

export default function Section (props) {
  const { title, subtitle, data } = props
  let content = null

  if (data?.projects) {
    content = data.projects.map(p => {
      return <Project key={p.class} data={p} />
    })
  }

  return (
    <section id={title} className='flex flex-col w-full gap-2'>
      <h2 className='flex justify-between px-1 text-gray-50 items-center border-b border-gray-50 border-dashed font-bold text-lg'>
        {title}
        <small>{subtitle}</small>
      </h2>
      <content className='flex gap-2 flex-wrap justify-center'>
        {content}
      </content>
    </section>
  )
}
