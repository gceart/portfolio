export default function Name () {
  return (
    <h1 className='text-4xl mt-32 mb-16 flex flex-col items-center font-semibold text-gray-50 gap-6'>
      Gastón Villalba
      <div className='flex gap-6'>
        <a className='text-xl cursor-pointer fa-brands fa-linkedin text-gray-50 hover:scale-105 transition-all' href='https://linkedin.com/in/villalbagaston' target='_blank' rel='noreferrer' />
        <a className='text-xl cursor-pointer fa-brands fa-github text-gray-50 hover:scale-105 transition-all' href='https://github.com/gaelceart' target='_blank' rel='noreferrer' />
        <a className='text-xl cursor-pointer fa-brands fa-gitlab text-gray-50 hover:scale-105 transition-all' href='https://gitlab.com/gastonv' target='_blank' rel='noreferrer' />
      </div>
    </h1>
  )
}
