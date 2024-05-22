export default function Info (props) {
  const { year, data } = props
  return (
    <span className='flex bg-black bg-opacity-50 p-2 rounded-md'>
      <b className='mr-4 min-w-fit'>{`> ${year}`}</b>
      <ul className='flex flex-col gap-2 text-gray-50'>
        {data.map((e, i) => <li key={`${year}-${i}`}>{`• ${e}`}</li>)}
      </ul>
    </span>
  )
}
