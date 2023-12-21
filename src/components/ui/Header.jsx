import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export const Header = () => {
  return (
    <Navbar expand='lg' className='bg-danger'>
      <Container>
        <Navbar.Brand>
          <Link to='/' className='text-white text-decoration-none'>Toolbox</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/' className='text-white text-decoration-none nav-link'>Inicio</Link>
            <Link to='/filenames' className='text-white text-decoration-none nav-link'>Lista de archivos</Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
