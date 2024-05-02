export default function Note (props) {
  const { command, text } = props

  return (
    <article className='w-64 p-1 bg-pink-300'>
      <strong>{command}</strong>
      <p>{text}</p>
    </article>
  )
}
