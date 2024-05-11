export default function Note (props) {
  const { command, text } = props

  return (
    <article className='w-64 text-pink-200 rounded-md px-2 py-1 bg-black bg-opacity-50'>
      <strong>{command}</strong>
      <p>{text}</p>
    </article>
  )
}
