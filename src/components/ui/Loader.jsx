import Spinner from 'react-bootstrap/Spinner'

export const Loader = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Spinner className='spinner-border text-danger' animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  )
}
