import Table from 'react-bootstrap/Table'

export const FileTable = () => {
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
        <tr>
          <td>file1.csv</td>
          <td>RgTya</td>
          <td>64075909</td>
          <td>Loremipsum</td>
        </tr>
      </tbody>
    </Table>
  )
}
