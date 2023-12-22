import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFiles, selectFileState } from '../features/file/files'
import { FileTable } from '../components/files/FileTable'
import { Loader } from '../components/ui/Loader'

export const FileContainer = () => {
  const { status, data } = useSelector(selectFileState)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFiles())
    }
  }, [])

  let content = <Loader />

  if (status === 'succeeded') {
    content = <FileTable files={data} />
  }

  return (
    <>
      {content}
    </>
  )
}
