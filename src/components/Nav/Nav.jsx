export default function Nav () {
  return (
    <header className='fixed w-full max-w-5xl text-nowrap py-2 gap-2 self-center flex justify-around bg-black backdrop-blur-md bg-opacity-60 text-pink-200 rounded-b-md z-50 text-[1.3em]'>
      <a href='#About Me' className='cursor-pointer hover:brightness-125 transition-all font-semibold'>About Me</a>
      <a href='#Projects' className='cursor-pointer hover:brightness-125 transition-all font-semibold'>Projects</a>
      <a href='#Knowledge' className='cursor-pointer hover:brightness-125 transition-all font-semibold'>Knowledge</a>
      <a href='#Contact' className='cursor-pointer hover:brightness-125 transition-all font-semibold'>Contact</a>
    </header>
  )
}
