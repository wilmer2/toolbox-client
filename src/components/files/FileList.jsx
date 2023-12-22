import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

export const FileList = ({ fileNames }) => {
  const renderItem = (fileName) => (
    <ListGroup.Item key={fileName}>
      <Link to={`/?fileName=${fileName}`} className='text-decoration-none'>{fileName}</Link>
    </ListGroup.Item>
  )

  return (
    <>
      <h2>Nombre de archivos</h2>
      <div className='mt-3'>
        <ListGroup>
          {
          fileNames.map((fileName) => renderItem(fileName))
         }
        </ListGroup>
      </div>
    </>
  )
}
