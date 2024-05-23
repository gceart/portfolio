export default function Project (props) {
  const { name, description, link, repo, techs } = props.data
  const image = `/src/assets/projects/${props.data.class}.png`
  const repoBrand = repo?.match(/(?<=https:\/\/)\w+/)[0]
  const technologies = techs?.map(t =>
    <i key={`${props.class}_${t}`} className={`fa-brands fa-${t} text-lg`} />
  )

  return (
    <article className='col-auto relative flex flex-col gap-2 border-2 border-pink-200 rounded-md max-w-full min-h-fit min-w-50 h-70 hover:border-pink-500 transition-all text-base'>
      <div className='flex flex-col gap-2 px-4 relative p-2 bg-black bg-opacity-70 w-full min-h-0 h-full text-pink-200 rounded-md'>
        <header className='flex justify-between relative'>
          <h3 className='font-bold text-xl'>{name}</h3>
          <span className='absolute -top-1 -right-1'>{technologies}</span>
        </header>
        <p className='row-start-2 text-lg text-gray-50'>{description}</p>
        <footer className='flex w-full h-full justify-evenly items-end py-4'>
          <a title='Go to repository' className={`cursor-pointer hover:scale-125 fa-brands fa-${repoBrand} transition-all text-xl`} href={repo} />
          {link && <a title='Go to website' className='fa-solid fa-globe text-xl hover:cursor-pointer hover:scale-125 transition-all' href={link} />}
        </footer>
      </div>
      <img src={image} className='absolute top-0 left-0 -z-10 w-full h-full object-cover object-top rounded-md' />

    </article>
  )
}
