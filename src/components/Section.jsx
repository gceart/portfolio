export default function Section (props) {
  const { title, subtitle, ...extra } = props
  return (
    <section id={title} className='flex flex-col w-full'>
      <h2 className='flex justify-between px-1 text-gray-50 items-center border-b border-gray-50 border-dashed'>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </h2>
    </section>
  )
}
