export default function Nav () {
  return (
    <header className='fixed w-full max-w-5xl text-nowrap p-1 gap-2 self-center flex justify-around backdrop-blur-xl bg-black text-pink-200 bg-opacity-40 rounded-md z-50'>
      <a href='#About Me' className='cursor-pointer hover:brightness-125 transition-all font-semibold'>About Me</a>
      <a href='#Projects' className='cursor-pointer hover:brightness-125 transition-all font-semibold'>Projects</a>
      <a href='#Knowledge' className='cursor-pointer hover:brightness-125 transition-all font-semibold'>Knowledge</a>
      <a href='#Contact' className='cursor-pointer hover:brightness-125 transition-all font-semibold'>Contact</a>
    </header>
  )
}
