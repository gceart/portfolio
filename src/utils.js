import { useEffect } from 'preact/hooks'
export const awake = () => {
  useEffect(() => {
    const promises = [
      new Promise(resolve => resolve(fetch('https://notes-challenge.onrender.com'))),
      new Promise(resolve => resolve(fetch('https://kuasapp-server.onrender.com')))
    ]
    async function exec () {
      Promise.all(promises).then(result => console.log(result))
    }
    exec()
  }, [])
}
