'use client'
interface Props {
    error: Error
    reset: () => void
}
const Error = ({error, reset}: Props) => {
    console.log('error ', error)
  return (
    <>
    <div>
      The user file has an error
    </div>
           <button className="btn" onClick={() => reset()}>Reset</button>
    </>
  )
}

export default Error
