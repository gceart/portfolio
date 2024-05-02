export default function Project (props) {
  const { name, description, link, repo, image } = props.data
  return (
    <article className='p-2 backdrop-blur-sm bg-pink-200 bg-opacity-95 rounded-md'>
      <h3 className='font-bold'>{name}</h3>
      <p>{description}</p>
    </article>
  )
}
