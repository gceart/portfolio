import { useEffect, useState } from 'preact/hooks'
import { phrases } from '../../../data/phrases.js'
import bg from '../../assets/bg.jpg'
import './background.css'

export default function Background () {
  const [phrase, setPhrase] = useState(phrases[0])

  const setAnimation = () => {
    const index = Math.floor(Math.random() * phrases.length)
    const phrase = document.getElementById('phrase')
    const directions = ['UR', 'DR', 'UL', 'DL']
    const numDirection = Math.floor(Math.random() * directions.length)
    const classDirection = `animation-${directions[numDirection]}`
    phrase.classList.toggle('-top-80')
    phrase.classList.add(classDirection)
    setTimeout(() => {
      phrase.classList.remove(classDirection)
      phrase.classList.toggle('-top-80')
    }, 13000)
    return `I like ${phrases[index]}`
  }

  useEffect(() => {
    setPhrase(setAnimation())
    setInterval(() => setPhrase(setAnimation()), 15000)
  }, [])

  return (
    <>
      <img src={bg} className='fixed min-w-dvw min-h-screen -z-50 object-cover top-0 left-0' />
      <div className='fixed min-w-dvw min-h-dvh'>
        <span id='phrase' className='-z-20 -top-80 absolute rotate-12 text-gray-50 text-nowrap max-w-fit max-h-fit'>{phrase}</span>
      </div>
    </>
  )
}
