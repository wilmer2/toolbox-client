import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export const Header = () => {
  return (
    <Navbar expand='lg' className='bg-danger'>
      <Container>
        <Navbar.Brand href='#home'>
          <span className='text-white'>Toolbox</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home' className='text-white'>Inicio</Nav.Link>
            <Nav.Link href='#link' className='text-white'>Lista de archivos</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
