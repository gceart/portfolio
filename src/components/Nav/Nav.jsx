export default function Nav () {
  return (
    <header className='fixed w-full max-w-5xl text-nowrap py-1 gap-2 self-center flex justify-around bg-black backdrop-blur-md bg-opacity-60 text-gray-50 rounded-b-md z-50 text-[.8em]'>
      <a href='#About Me' className='cursor-pointer hover:brightness-125 transition-all font-semibold'>About Me</a>
      <a href='#Knowledge' className='cursor-pointer hover:brightness-125 transition-all font-semibold'>Knowledge</a>
      <a href='#Projects' className='cursor-pointer hover:brightness-125 transition-all font-semibold'>Projects</a>
    </header>
  )
}
