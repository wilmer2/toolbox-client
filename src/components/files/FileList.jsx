import ListGroup from 'react-bootstrap/ListGroup'

export const FileList = () => {
  return (
    <>
      <h2>Nombre de archivos</h2>
      <div className='mt-3'>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
    </>
  )
}
