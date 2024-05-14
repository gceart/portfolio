export default function Note (props) {
  const { command, text } = props

  return (
    <article className='w-full text-xl text-pink-200 rounded-md p-3 bg-black bg-opacity-50'>
      <strong>{`> ${command}`}</strong>
      <p>{text}</p>
    </article>
  )
}
