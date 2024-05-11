export default function Project (props) {
  const { name, description, link, repo, techs } = props.data
  const image = `/src/assets/projects/${props.data.class}.png`
  const repoBrand = repo?.match(/(?<=https:\/\/)\w+/)[0]
  const technologies = techs?.map(t =>
    <i key={`${props.class}_${t}`} className={`fa-brands fa-${t} text-lg`} />
  )

  return (
    <article className='col-auto relative flex flex-col gap-2 border-2 border-pink-200 rounded-md max-w-full h-64 hover:border-pink-500 transition-all text-base'>

      <div className='flex flex-col gap-2 px-4 relative p-2 bg-black bg-opacity-50 w-full min-h-0 h-full text-pink-300 rounded-md backdrop-blur-sm'>
        <header className='flex justify-between'>
          <h3 className='font-bold text-xl'>{name}</h3>
          {technologies}
        </header>
        <p className='row-start-2 text-lg'>{description}</p>
        <footer className='flex w-full h-full justify-evenly items-end py-4'>
          <i title='Go to repository' className={`cursor-pointer hover:scale-125 fa-brands fa-${repoBrand} transition-all text-xl`} />
          {link && <i title='Go to website' className='fa-solid fa-globe text-xl hover:cursor-pointer hover:scale-125 transition-all' />}
        </footer>
      </div>
      <img src={image} className='absolute top-0 left-0 -z-10 w-full h-full object-cover object-top rounded-md' />

    </article>
  )
}
