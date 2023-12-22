import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FileContainer } from './containers/FileContainer'
import { FileNameContainer } from './containers/FileNameContainer'
import { MainLayout } from './components/layouts/MainLayout'

function App () {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route exact path='/' element={<FileContainer />} />
            <Route exact path='/filenames' element={<FileNameContainer />} />
          </Routes>

        </MainLayout>
      </Router>
    </>
  )
}

export default App
