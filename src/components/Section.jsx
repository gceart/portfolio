export default function Section (props) {
  const { title, subtitle, content } = props

  return (
    <section id={title} className='flex flex-col w-full gap-2 py-2'>
      <h2 className='flex justify-between px-1 text-gray-50 items-center border-b border-gray-50 border-dashed font-bold text-lg'>
        {title}
        <small className="flex-grow">{subtitle}</small>
      </h2>
      {content}
    </section>
  )
}
