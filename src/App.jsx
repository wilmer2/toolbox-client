import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FileTable } from './components/files/FileTable'
import { FileList } from './components/files/FileList'
import { MainLayout } from './components/layouts/MainLayout'

function App () {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route exact path='/' element={<FileTable />} />
            <Route exact path='/filenames' element={<FileList />} />
          </Routes>

        </MainLayout>
      </Router>
    </>
  )
}

export default App
