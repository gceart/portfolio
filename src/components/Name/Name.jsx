export default function Name () {
  return (
    <div className="flex flex-col items-center mt-24 mb-16 gap-2">
      <h1 id='Name' className='text-4xl font-semibold text-gray-50 gap-1'>
        Gastón Villalba
      </h1>
      <a href="mailto:devceart@gmail.com">
        <small className='text-base mb-2 text-gray-50'>devceart@gmail.com</small>
      </a>
      <div className='flex gap-10'>
        <a className='text-xl cursor-pointer fa-brands fa-github text-gray-50 hover:scale-105 transition-all' href='https://github.com/gaelceart' target='_blank' rel='noreferrer' />
        <a className='text-xl cursor-pointer fa-brands fa-linkedin text-gray-50 hover:scale-105 transition-all' href='https://linkedin.com/in/villalbagaston' target='_blank' rel='noreferrer' />
        <a className='text-xl cursor-pointer fa-brands fa-gitlab text-gray-50 hover:scale-105 transition-all' href='https://gitlab.com/gastonv' target='_blank' rel='noreferrer' />
      </div>
    </div>
  )
}
