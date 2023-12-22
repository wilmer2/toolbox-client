import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonReload } from '../components/ui/ButtonReload'
import { fetchFileNames, selectFileNamesState } from '../features/file/fileNames'
import { FileList } from '../components/files/FileList'
import { Loader } from '../components/ui/Loader'

export const FileNameContainer = () => {
  const { data, status } = useSelector(selectFileNamesState)
  const dispatch = useDispatch()

  const handleReload = () => {
    dispatch(fetchFileNames())
  }

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFileNames())
    }
  }, [])

  let content = <Loader />

  if (status === 'succeeded') {
    content = <FileList fileNames={data} />
  }

  if (status === 'failed') {
    content = <ButtonReload onReload={handleReload} />
  }

  return (
    <>
      {content}
    </>
  )
}
