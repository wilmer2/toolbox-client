import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonReload } from '../components/ui/ButtonReload'
import { fetchFiles, selectFileState } from '../features/file/files'
import { FileTable } from '../components/files/FileTable'
import { Loader } from '../components/ui/Loader'
import { useQuery } from '../hooks/useQuery'

export const FileContainer = () => {
  const { status, data } = useSelector(selectFileState)
  const dispatch = useDispatch()
  const query = useQuery()
  const fileName = query.get('fileName')

  const handleReload = () => {
    dispatch(fetchFiles({ fileName }))
  }

  useEffect(() => {
    dispatch(fetchFiles({ fileName }))
  }, [fileName])

  let content = <Loader />

  if (status === 'succeeded') {
    content = <FileTable files={data} selectedFile={fileName} />
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
