import Table from 'react-bootstrap/Table'

export const FileTable = ({ files }) => {
  const renderItem = ({ file, text, number, hex }) => (
    <tr key={hex}>
      <td>{file}</td>
      <td>{text}</td>
      <td>{number}</td>
      <td>{hex}</td>
    </tr>
  )

  return (
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
