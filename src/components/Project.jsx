export default function Project (props) {
  const { name, description, link, repo } = props.data
  const image = `/src/assets/projects/${props.data.class}.png`
  const repoBrand = repo.match(/(?<=https:\/\/)\w+/)[0]
  return (
    <article className='relative flex flex-col gap-2 border-2 border-pink-200 rounded-md max-w-72 hover:scale-105 transition-all text-base'>
      <div className='relative flex p-2 bg-black bg-opacity-20 min-w-full h-72 text-pink-300 rounded-md'>
        <span className='flex flex-col'>
          <h3 className='font-bold'>{name}</h3>
          <p className='row-start-2'>{description}</p>
        </span>
        <footer>
          <button title='Repository' className={`hover:cursor-pointer hover:scale-125 fa-brands fa-${repoBrand} transition-all`} />
          {link && <button title='Link to project' className='fa-solid fa-link hover:cursor-pointer hover:scale-125 transition-all' />}
        </footer>
        <img src={image} className='absolute top-0 left-0 -z-10 w-full h-full object-cover object-top rounded-md blur-sm hover:blur-none'/>
      </div>
    </article>
  )
}
