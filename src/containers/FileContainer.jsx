import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestStarted } from '../features/file/files'
import { FileTable } from '../components/files/FileTable'

export const FileContainer = () => {
  const fileState = useSelector((state) => state.files)
  const dispatch = useDispatch()

  console.log('*** file state ***', fileState)

  useEffect(() => {
    dispatch(requestStarted())
  }, [])

  return (
    <>
      <FileTable />

    </>
  )
}
