import Button from 'react-bootstrap/Button'

export const ButtonReload = ({ onReload }) => {
  return (
    <div className='d-flex justify-content-center'>
      <div>
        <h5 className='container-sm'>¡Vaya! Algo salió mal. intenta volver a cargar el contenido</h5>
        <div className='d-flex justify-content-center'>
          <Button variant='danger' onClick={onReload}>Volver a cargar</Button>
        </div>
      </div>

    </div>
  )
}
