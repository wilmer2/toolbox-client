import Alert from 'react-bootstrap/Alert'
import Table from 'react-bootstrap/Table'

export const FileTable = ({ files, selectedFile }) => {
  const renderItem = ({ file, text, number, hex }) => (
    <tr key={hex}>
      <td>{file}</td>
      <td>{text}</td>
      <td>{number}</td>
      <td>{hex}</td>
    </tr>
  )

  let content = (
    <Alert variant='dark'>
      {selectedFile ? `No hay columnas para el archivo ${selectedFile}` : 'No hay csv generados '}

    </Alert>
  )

  if (files.length) {
    content = (
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {
            files.map((file) => renderItem(file))
          }
        </tbody>
      </Table>
    )
  }

  return (
    <>
      {content}
    </>
  )
}
