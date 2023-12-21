import Container from 'react-bootstrap/Container'
import { Header } from '../ui/Header'

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <div className='mt-4'>
          {children}
        </div>
      </Container>
    </>
  )
}
