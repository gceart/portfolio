export default function Note (props) {
  const { command, text } = props
  const me = text.split('\n')[0]
  const info = text.split('\n')[1]

  return (
    <article className='w-full text-xl text-pink-200 rounded-md p-3 bg-black bg-opacity-50'>
      <strong>{`> ${command}`}</strong>
      <p>{me}</p>
      <p>{info}</p>
    </article>
  )
}
